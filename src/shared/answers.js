import algoliasearch from "algoliasearch/lite";
import config from "./config";

function callNluEngine(query, callback) {
  const data = qaParams(query);
  const URL = `https://${config.algoliaAnswers.appId}-2.algolia.net/1/answers/${config.algoliaAnswers.indexName}/prediction`;

  fetch(URL, {
    method: "POST",
    headers: {
      "X-Algolia-Application-Id": config.algoliaAnswers.appId,
      "X-Algolia-API-Key": config.algoliaAnswers.apiKey
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((res) => callback(res.hits))
    .catch(console.error);
}

function qaParams(query) {
  return {
    query: query,
    attributesForPrediction: ["page_title", "title", "description"],
    queryLanguages: ["en"],
    threshold: 0,
    nbHits: 1,
    params: {
      typoTolerance: "min",
      highlightPreTag: "<mark>",
      highlightPostTag: "</mark>"
    }
  };
}

function debounce(fn, time) {
  var timerId = undefined;
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
      return fn.apply(void 0, args);
    }, time);
  };
}

export function searchFAQ(topic, callback) {
  algoliasearch(config.algoliaDocs.appId, config.algoliaDocs.apiKey)
    .initIndex("documentation_production")
    .search("", {
      filters: `category:"${topic}"`,
      hitsPerPage: 2
    })
    .then((res) => callback(res.hits))
    .catch(console.error);
}

export function searchTopics(query, callback) {
  algoliasearch(config.algoliaDocs.appId, config.algoliaDocs.apiKey)
    .initIndex("documentation_production")
    .searchForFacetValues("category", query, {
      maxFacetHits: 12
    })
    .then((res) => callback(res.facetHits))
    .catch(console.error);
}

export const debounceGetAnswers = debounce(callNluEngine, 400);
