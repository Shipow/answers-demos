import "./index.scss";
import { Component, render } from "preact";

import { searchFAQ, debounceGetAnswers } from "./shared/answers";

import Chatbot from "./chatbot/components/Chatbot";
import Autocomplete from "./autocomplete/Autocomplete.js";
import Hit from "./form-deflect/components/Hit";

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

  submitForm = (e) => {
    e.preventDefault();
  };

  render(props, { topic, query, results = [], answers = [] }) {
    return (
      <div class="relative">
        <div class="w-full h-16 bg-white border-b border-gray-300 flex items-center">
          <div class="container mx-auto p-4 flex items-center ">
            <div class="flex-1">
              <svg
                viewBox="0 0 25 25"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Algolia logo</title>
                <g fill="none">
                  <path
                    d="M3.181 0h17.796a3.186 3.186 0 0 1 3.181 3.188v17.84a3.186 3.186 0 0 1-3.18 3.187H3.18A3.186 3.186 0 0 1 0 21.027V3.18A3.18 3.18 0 0 1 3.181 0z"
                    fill="#5468FF"
                  ></path>
                  <path
                    d="M12.16 6.593c-3.766 0-6.823 3.062-6.823 6.845 0 3.782 3.057 6.837 6.824 6.837s6.824-3.062 6.824-6.845a6.823 6.823 0 0 0-6.824-6.837zm0 11.663a4.816 4.816 0 0 1-4.807-4.818A4.816 4.816 0 0 1 12.16 8.62a4.816 4.816 0 0 1 4.808 4.818 4.811 4.811 0 0 1-4.808 4.818zm0-8.652v3.591c0 .103.11.177.206.125l3.181-1.652c.073-.037.095-.125.059-.199a3.957 3.957 0 0 0-3.298-2.005c-.074 0-.147.06-.147.14zM7.706 6.967l-.418-.418a1.043 1.043 0 0 0-1.48 0l-.5.499a1.048 1.048 0 0 0 0 1.484l.411.41c.066.067.162.052.22-.014a8.08 8.08 0 0 1 .8-.94c.3-.301.607-.565.945-.808.073-.044.08-.147.022-.213zm6.691-1.087v-.83c0-.58-.469-1.05-1.048-1.05h-2.44c-.58 0-1.049.47-1.049 1.05v.852c0 .096.088.162.184.14a7.624 7.624 0 0 1 2.125-.301c.697 0 1.386.095 2.053.279a.142.142 0 0 0 .175-.14z"
                    fill="#FFF"
                  ></path>
                </g>
              </svg>
            </div>

            <div class="ml-6">
              <div id="autocomplete"></div>
            </div>
          </div>
        </div>
        <script
          src="https://kit.fontawesome.com/cde989c88d.js"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <div class="container mx-auto">
          <div class="relative md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto">
            <div class="pt-16">
              <h2 class="text-3xl font-medium tracking-tight text-gray-900">
                Contact Support
              </h2>
            </div>
            <div class="mt-8 rounded-lg overflow-hidden bg-white shadow-lg gap-y-6 sm:gap-x-8">
              <div>
                <form action="#" method="POST" class="">
                  <div class="p-4 w-3/6">
                    <label
                      for="first_name"
                      class="block text-lg font-medium text-gray-700"
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
                      class="block text-lg font-medium text-gray-700"
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
                      class="mb-4 block text-lg font-medium text-gray-700"
                    >
                      {answers[0] && answers
                        ? "Before you email, do these answer your question?"
                        : `Frequently Asked Questions for ${this.state.topic}`}
                    </label>

                    {((answers[0] && answers) || results).map((result) => {
                      return Hit(result, answers);
                    })}
                  </div>

                  <div class="p-4">
                    <label
                      for="message"
                      class="block text-lg font-medium text-gray-700"
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
                      onClick={this.submitForm}
                      type="submit"
                      class="inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-base text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed right-8 bottom-8 inline">
          <Chatbot />
        </div>
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
  Autocomplete();
}
