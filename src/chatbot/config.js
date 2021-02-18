export default {
  /* Algolia index credentials */
  appId: "B1G2GM9NG0",
  apiKey: "56184c0a739f3a6c6a00b6d8473c3a8f",
  indexName: "documentation_production",

  /* Answers parameters */
  attributesForPrediction: ["page_title", "title", "description"],
  queryLanguages: ["en"],
  nbHits: 2, // default 10
  threshold: 0, // default 0
  params: {},

  /* Use for styling and text rendering */
  company: "Algolia",
  responseHeadAttribute: "title",
  logoFormat: "svg", // or png
  primary: "#5468FF",
  blurWeight: "0px",

  searchSuggestion1: "how can i self host algolia?",
  searchSuggestion2: "impossible to connect issue"
};
