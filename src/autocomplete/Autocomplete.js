import algoliasearch from "algoliasearch/lite";
import { autocomplete, getAlgoliaHits } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";

import config from "../shared/config";
import { debounceGetAnswers } from "../shared/answers";

import headerLayout from "./components/headerLayout";
import hitLayoutSmart from "./components/hitLayoutSmart";

// docs
const algoliaDocsSearchClient = algoliasearch(
  config.algoliaDocs.appId,
  config.algoliaDocs.apiKey
);

// algolia www
const algoliaWebsiteSearchClient = algoliasearch(
  config.algoliaWWW.appId,
  config.algoliaWWW.apiKey
);

// stack overflow algolia
const stackoverflowAlgoliaSearchClient = algoliasearch(
  config.algoliaSO.appId,
  config.algoliaSO.apiKey
);

const answersRef = {
  current: []
};

function Autocomplete() {
  const search = autocomplete({
    container: "#autocomplete",
    placeholder: "Search for help...",
    debug: true,
    detachedMediaQuery: "",
    openOnFocus: true,
    onStateChange({ prevState, state }) {
      if (prevState.query !== state.query) {
        debounceGetAnswers(state.query, (answers) => {
          answersRef.current = answers;
          search.refresh();
        });
      }
    },
    getSources({ query, state }) {
      if (!query) {
        return [];
      }

      return [
        {
          // ----------------
          // Source: Algolia Answers
          // ----------------
          sourceId: "Answers",
          getItems() {
            return answersRef.current;
          },
          templates: {
            header({ items }) {
              return headerLayout({ items, sourceTitle: "Algolia Answers" });
            },
            item({ item }) {
              return hitLayoutSmart(item, {
                main: item.title,
                description: item.description,
                icon: "far fa-lightbulb"
              });
            }
          }
        },
        {
          // ----------------
          // Algolia Docs
          // ----------------
          sourceId: "algoliaDocs",
          getItemInputValue: ({ state }) => state.query,
          getItems({ query }) {
            return getAlgoliaHits({
              searchClient: algoliaDocsSearchClient,
              queries: [
                {
                  indexName: "documentation_production",
                  query,
                  params: {
                    hitsPerPage: 5
                  }
                }
              ]
            });
          },
          templates: {
            header({ items }) {
              return headerLayout({
                items,
                sourceTitle: "Algolia Docs"
              });
            },
            item({ item }) {
              return hitLayoutSmart(item, {
                main: item.title,
                wrap: false,
                extra:
                  item.content_structure.lvl0 +
                  " > " +
                  item.content_structure.lvl1,
                icon: "fas fa-book"
              });
            }
          }
        },
        {
          // ----------------
          // Algolia Docs Topics
          // ----------------
          sourceId: "algoliaDocsFacets",
          getItemInputValue: ({ state }) => state.query,
          getItems({ query }) {
            return algoliaDocsSearchClient
              .initIndex("documentation_production")
              .searchForFacetValues("category", query, {
                maxFacetHits: 5
              })
              .then(({ facetHits }) => {
                return facetHits;
              });
          },
          templates: {
            header({ items }) {
              return headerLayout({
                items,
                sourceTitle: "Algolia Help Topics"
              });
            },
            item({ item }) {
              return hitLayoutSmart(item, {
                main: item.value,
                icon: "fas fa-tag"
              });
            }
          }
        },
        {
          // ----------------
          // Algolia Website
          // ----------------
          sourceId: "algoliaWebsite",
          getItemInputValue: ({ state }) => state.query,
          getItems({ query }) {
            return getAlgoliaHits({
              searchClient: algoliaWebsiteSearchClient,
              queries: [
                {
                  indexName: "PROD_algolia_com_site",
                  query,
                  params: {
                    hitsPerPage: 3
                  }
                }
              ]
            });
          },
          templates: {
            header({ items }) {
              return headerLayout({
                items,
                sourceTitle: "Algolia Website"
              });
            },
            item({ item }) {
              return hitLayoutSmart(item, {
                main: item.title.en,
                icon: "fas fa-info-circle",
                extra: item.path
              });
            }
          }
        },
        {
          // ----------------
          // Stackoverflow #Algolia
          // ----------------
          sourceId: "stackoverflowAlgolia",
          getItemUrl: ({ item }) =>
            `https://github.com/${item.owner}/${item.repo}/issues/${item.number}`,
          getItemInputValue: ({ state }) => state.query,
          getItems({ query }) {
            return getAlgoliaHits({
              searchClient: stackoverflowAlgoliaSearchClient,
              queries: [
                {
                  indexName: "instantsearch-so-algolia",
                  query,
                  params: {
                    hitsPerPage: 10
                  }
                }
              ]
            });
          },
          templates: {
            header({ items }) {
              return headerLayout({
                items,
                sourceTitle: "StackOverflow"
              });
            },
            item({ item }) {
              return hitLayoutSmart(item, {
                main: item.title,
                icon: "fab fa-stack-overflow"
              });
            }
          }
        }
      ];
    }
  });
}

export default Autocomplete;
