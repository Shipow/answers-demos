import algoliasearch from "algoliasearch/lite";
import { Component } from "preact";

import {
  EXPERIMENTAL_Answers as Answers,
  InstantSearch,
  SearchBox
} from "react-instantsearch-dom";

import { Icon, Logo } from "/src/shared/icons";
import config from "../config";

import createAnswersComponent from "./AnswersComponent";
import "./Chatbot.scss";
import QuestionSuggestionList from "./QuestionSuggestionList";

const searchClient = algoliasearch(config.appId, config.apiKey);

class Chatbot extends Component {
  constructor() {
    super();
    this.state = {
      opened: false,
      query: "",
      company: undefined
    };
  }

  updateQuery(query) {
    const newState = {
      ...this.state,
      query
    };
    this.setState(newState);
  }

  updateQueryWithSearchState(newState) {
    this.setState(newState);
  }

  openChat(newState) {
    this.setState({ ...newState.state, opened: true });
  }

  closeChat(newState) {
    this.setState({ ...newState.state, opened: false });
  }

  render() {
    if (this.state.opened === false) {
      return (
        <button
          class="rounded-full h-16 w-16 bg-indigo-700 text-white block flex items-center justify-center"
          onClick={this.openChat.bind(this)}
        >
          Chat
        </button>
      );
    } else {
      return (
        <div
          style={{ width: "500px", height: "600px" }}
          class={`relative bg-gray-200 shadow-xl overflow-hidden rounded ${
            this.state.query ? "has-response" : ""
          }`}
        >
          <header class="h-20 bg-indigo-500 flex items-center">
            <button
              class="absolute top-2 right-2"
              aria-label="Close the chat"
              onClick={this.closeChat.bind(this)}
            >
              <Icon class="text-white" icon="cross" />
            </button>
            <div class="m-auto w-3/6">
              <Icon class="h-8 w-full" icon="algolia" />
            </div>
          </header>
          <QuestionSuggestionList
            texts={[config.searchSuggestion1, config.searchSuggestion2]}
            updateAppQuery={this.updateQuery.bind(this)}
            shouldDisplay={!this.state.query}
          />
          <InstantSearch
            searchClient={searchClient}
            indexName={config.indexName}
            searchState={{ query: this.state.query }}
            onSearchStateChange={this.updateQueryWithSearchState.bind(this)}
          >
            <Answers
              searchClient={searchClient}
              attributesForPrediction={config.attributesForPrediction}
              queryLanguages={config.queryLanguages}
              answersComponent={createAnswersComponent(this.state.query)}
              nbHits={config.nbHits}
              threshold={config.threshold}
              params={{
                ...config.params,
                highlightPreTag: "<em>",
                highlightPostTag: "</em>"
              }}
            />
            <SearchBox
              translations={{
                placeholder: "Type your message"
              }}
              submit={<Icon icon="send" />}
              searchAsYouType={false}
              showLoadingIndicator={false}
            />
          </InstantSearch>
        </div>
      );
    }
  }
}

export default Chatbot;
