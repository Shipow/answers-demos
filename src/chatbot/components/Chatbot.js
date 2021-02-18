import algoliasearch from "algoliasearch/lite";
import { Component } from "preact";

import {
  EXPERIMENTAL_Answers as Answers,
  InstantSearch,
  SearchBox
} from "react-instantsearch-dom";

import config from "../config";
import companyPNG from "../img/company.png";
import companySVG from "../img/company.svg";
import cross from "../img/cross.svg";
import send from "../img/send.svg";
import "./Answers.scss";
import createAnswersComponent from "./AnswersComponent";
import "./App.scss";
import QuestionSuggestionList from "./QuestionSuggestionList";
import "./QuestionSuggestionList.scss";

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
          class="rounded-full h-16 w-16 bg-indigo-700 text-white block"
          onClick={this.openChat.bind(this)}
        >
          Chat
        </button>
      );
    } else {
      return (
        <div
          className={`chat-container ${this.state.query ? "has-response" : ""}`}
        >
          <header>
            <button
              className="cross"
              aria-label="Close the chat"
              onClick={this.closeChat.bind(this)}
            >
              <img src={cross} alt="Cross" />
            </button>
            <div className="logo-container">
              <img
                className="company-logo"
                src={config.logoFormat === "svg" ? companySVG : companyPNG}
                alt="Company logo"
              />
              <span> answers </span>
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
              submit={<img src={send} alt="Send" />}
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
