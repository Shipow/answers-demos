import { Component, render } from "preact";

import { searchFAQ, debounceGetAnswers, searchTopics } from "./shared/answers";
import Chatbot from "./chatbot/components/Chatbot";
import Autocomplete from "./autocomplete/Autocomplete.js";
import Hit from "./form-deflect/components/Hit";
import Topics from "./form-deflect/components/Topics";
import { Logo, Icon } from "./shared/icons";
import "./shared/index.scss";
//import config from "./shared/config";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onSearchTopic = this.onSearchTopic.bind(this);
  }

  componentDidMount() {
    searchTopics("", (topics) => {
      this.setState({
        topics
      });
    });
    searchFAQ("faq", (results) => {
      this.setState({
        results
      });
    });
  }

  onSearchTopic(topic) {
    search.setQuery(topic);
    search.setIsOpen();
    search.refresh();
    // TODO: make it happen with initialState
    document.querySelector(".aa-DetachedSearchButton").click();
    this.setState({
      topic
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

  render(props, { topic, query, results = [], answers = [], topics = [] }) {
    return (
      <div class="bg-gray-100 fixed top-0 right-0 left-0 bottom-0 h-full">
        <div class="w-full h-16 bg-white border-b border-gray-300 flex items-center">
          <div class="container mx-auto p-4 flex items-center">
            <div class="flex-1">
              <Logo class="inline mr-2" />
              <Icon
                class="text-indigo-500 inline-block"
                width="120"
                icon="answers"
              />
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
          <div class="relative md:w-full lg:w-5/6 xl:w-4/6 mx-auto">
            <h2 class="text-3xl font-medium tracking-tight text-gray-900 pt-16">
              Contact Support
            </h2>

            <div class="mt-6 rounded-lg overflow-hidden bg-white shadow-lg gap-y-6 sm:gap-x-8">
              <form action="#" method="POST" class="">
                <div class="flex">
                  <div class="w-4/6 flex-1">
                    <div class="p-4 w-4/6">
                      <label
                        for="first_name"
                        class="block font-bold text-gray-700"
                      >
                        What do you need help with?
                      </label>
                      <div class="mt-1">
                        <select
                          id="topic"
                          name="topic"
                          class="py-3 px-4 block w-full shadow-sm border rounded-md"
                          value={topic}
                          onChange={this.onTopic}
                        >
                          <option disabled selected value>
                            -- Select a topic --
                          </option>
                          {topics &&
                            topics.map((t) => {
                              return <option value={t.value}>{t.value}</option>;
                            })}
                        </select>
                      </div>
                    </div>

                    <div class="p-4">
                      <label
                        for="company"
                        class="block font-bold text-gray-700"
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
                        class="block font-bold text-gray-700"
                      >
                        {answers[0] && answers
                          ? "Before you email, do these answer your question?"
                          : "Frequently Asked Questions"}
                      </label>

                      {((answers[0] && answers) || results).map((result) => {
                        return Hit(result, answers);
                      })}
                    </div>

                    <div class="p-4">
                      <label
                        for="message"
                        class="block font-bold text-gray-700"
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
                  </div>
                  <Topics
                    topics={topics}
                    onSearchTopic={this.onSearchTopic}
                    class="m-2"
                  />
                </div>
                <div class="flex w-full items-center border-t-2 bg-gray-100 p-4">
                  <div class="flex-1 text-gray-400">
                    Please complete a description before submitting a request.
                  </div>
                  <button
                    onClick={this.submitForm}
                    type="submit"
                    class="inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-base text-white bg-gray-400 hover:bg-indigo-700"
                  >
                    Send Email
                  </button>
                </div>
              </form>
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

render(<App />, document.getElementById("root"));
const search = Autocomplete();
