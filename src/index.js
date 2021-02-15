import "./style";
import { Component, render } from "preact";

// answers algolia docs
const acctDetails = {
  appId: "B1G2GM9NG0",
  apiKey: "56184c0a739f3a6c6a00b6d8473c3a8f",
  indexName: "documentation_production"
};

// answers algolia docs
const acctDetailsFAQ = {
  appId: "B1G2GM9NG0",
  apiKey: "3ec8b05f457a8e2637cb430fb3806569",
  indexName: "documentation_production"
};

function searchFAQ(query, callback) {
  const data = { query, filters: "type:faq", hitsPerPage: 3 };
  const URL = `https://${acctDetailsFAQ.appId}-2.algolia.net/1/indexes/${acctDetailsFAQ.indexName}/query`;

  fetch(URL, {
    method: "POST",
    headers: {
      "X-Algolia-Application-Id": acctDetailsFAQ.appId,
      "X-Algolia-API-Key": acctDetailsFAQ.apiKey
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((res) => callback(res.hits))
    .catch(console.error);
}

function callNluEngine(query, callback) {
  const data = qaParams(query);
  const URL = `https://${acctDetails.appId}-2.algolia.net/1/answers/${acctDetails.indexName}/prediction`;

  fetch(URL, {
    method: "POST",
    headers: {
      "X-Algolia-Application-Id": acctDetails.appId,
      "X-Algolia-API-Key": acctDetails.apiKey
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

const debounceGetAnswers = debounce(callNluEngine, 400);

export default class App extends Component {
  componentDidMount() {
    const initialTopic = "InstantSearch";
    searchFAQ(initialTopic, (results) => {
      this.setState({
        topic: initialTopic,
        query: "",
        results
      });
    });
  }

  onQuery = (e) => {
    const { value } = e.target;
    this.setState({ query: value });
    debounceGetAnswers(value, (answers) => {
      this.setState({ answers });
    });
  };

  onTopic = (e) => {
    const { value } = e.target;
    this.setState({ topic: value });
    searchFAQ(value, (results) => {
      this.setState({ results });
    });
  };

  render(props, { topic, query, results = [], answers = [] }) {
    return (
      <div class="container mx-auto">
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />

        <div class="relative md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto">
          <div class="pt-16">
            <h2 class="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Contact Support
            </h2>
          </div>
          <div class="mt-8 rounded-lg overflow-hidden bg-white shadow-lg gap-y-6 sm:gap-x-8">
            <div>
              <form action="#" method="POST" class="">
                <div class="p-4 w-3/6">
                  <label
                    for="first_name"
                    class="block text-xl font-medium text-gray-700"
                  >
                    What do you need help with?
                  </label>
                  <div class="mt-1">
                    <select
                      id="topic"
                      name="topic"
                      class="py-3 px-4 block w-full shadow-sm border rounded-md"
                      value={this.state.topic}
                      onChange={this.onTopic}
                    >
                      <option value="InstantSearch">InstantSearch</option>
                      <option value="Autocomplete">Autocomplete</option>
                      <option value="API rest">Algolia API</option>
                      <option value="Magento">Algolia for Magento</option>
                      <option value="Shopify">Algolia for Shopify</option>
                      <option value="Pricing">Sales</option>
                      <option value="Billing">Billing</option>
                      <option value="">Other</option>
                    </select>
                  </div>
                </div>

                <div class="p-4">
                  <label
                    for="company"
                    class="block text-xl font-medium text-gray-700"
                  >
                    What’s your question?
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="query"
                      id="query"
                      class="py-3 px-4 block w-full shadow-sm border rounded-md"
                      value={query}
                      onInput={this.onQuery}
                    />
                  </div>
                </div>

                <div class="p-4">
                  <label
                    for="message"
                    class="mb-4 block text-xl font-medium text-gray-700"
                  >
                    {answers[0] && answers
                      ? "Before you email, do these answer your question?"
                      : `Frequently Asked Questions for ${this.state.topic}`}
                  </label>

                  {((answers[0] && answers) || results).map((result) => {
                    return (
                      <div class="mb-4">
                        <div class="py-1 text-gray-400 text-xs font-bold uppercase rounded">
                          {result.content_structure.lvl0} >{" "}
                          {result.content_structure.lvl1}
                        </div>
                        <a
                          class="leading-6 font-bold text-indigo-500"
                          href={"https://algolia.com" + result.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {result.title}
                          <svg
                            class="inline-block align-middle ml-2"
                            viewBox="0 0 24 24"
                            height="14"
                            width="14"
                          >
                            <path
                              fill="currentColor"
                              d="M17 13v6c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM10.707 14.707l9.293-9.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-9.293 9.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
                            ></path>
                          </svg>
                        </a>

                        <p class="text-gray-600 overflow-hidden max-h-12 overflow-ellipsis">
                          {result.description}
                        </p>
                        {answers[0] && answers ? (
                          <div class="text-gray-500 mt-6">
                            Was this answer helpful
                            <button class="inline-flex items-center justify-center mx-2 px-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-300 hover:bg-green-400">
                              YES
                            </button>
                            <button class="inline-flex items-center justify-center px-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-300 hover:bg-red-400">
                              NO
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>

                <div class="p-4">
                  <label
                    for="message"
                    class="block text-xl font-medium text-gray-700"
                  >
                    Tell us more - how can we help?
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      class="py-3 px-4 block w-full shadow-sm border rounded-md"
                    ></textarea>
                  </div>
                </div>

                <div class="flex items-center border-t-2 bg-gray-100 p-4">
                  <div class="flex-1 text-gray-400">
                    Please complete a description before submitting a request.
                  </div>
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
