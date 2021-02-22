import { Component, render } from "preact";

import { searchFAQ, debounceGetAnswers } from "./shared/answers";
import "./shared/index.scss";

import Chatbot from "./chatbot/components/Chatbot";
import Autocomplete from "./autocomplete/Autocomplete.js";
import Hit from "./form-deflect/components/Hit";

import { Logo, Icon } from "./shared/icons";
import config from "./shared/config";

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
      <div class="bg-gray-100 fixed top-0 right-0 left-0 bottom-0 h-full">
        <div class="w-full h-16 bg-white border-b border-gray-300 flex items-center">
          <div class="container mx-auto p-4 flex items-center ">
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
                      class="block font-bold text-gray-700"
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
                        {config.topics.map((topic) => {
                          return <option value={topic}>{topic}</option>;
                        })}
                      </select>
                    </div>
                  </div>

                  <div class="p-4">
                    <label for="company" class="block font-bold text-gray-700">
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
                    <label for="message" class="block font-bold text-gray-700">
                      {answers[0] && answers
                        ? "Before you email, do these answer your question?"
                        : `Frequently Asked Questions for ${this.state.topic}`}
                    </label>

                    {((answers[0] && answers) || results).map((result) => {
                      return Hit(result, answers);
                    })}
                  </div>

                  <div class="p-4">
                    <label for="message" class="block font-bold text-gray-700">
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
