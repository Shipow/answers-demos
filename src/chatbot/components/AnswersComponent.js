import config from "../config.js";
import typing from "../img/typing.gif";
import { Component } from "preact";

function AnswersfeedbackButton(props) {
  return (
    <button className="ais-Answers-feedback-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

class Answersfeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  sendFeedback(text) {
    this.setState({ submitted: true });
    return;
  }

  render() {
    return (
      <div
        className={`ais-Answers-feedback ${
          this.state.submitted ? "ais-Answers-feedback--hide" : ""
        }`}
      >
        <div className={"ais-Answers-feedback--text"}>
          Did this answer your question?
          <AnswersfeedbackButton
            text="Yes"
            onClick={(text) => this.sendFeedback(text)}
          />
          -
          <AnswersfeedbackButton
            text="No"
            onClick={(text) => this.sendFeedback(text)}
          />
        </div>
      </div>
    );
  }
}

function createAnswersComponent(query) {
  return ({ hits, isLoading }) => {
    if (!query) {
      return null;
    }
    return (
      <div
        className={`ais-Answers my-Answers ${
          isLoading ? "ais-Answers--empty" : ""
        }`}
      >
        <div className="ais-Answers--scroll">
          <div className="results-description-container">
            <h2>Answers results</h2>
            Check out our Q&A search 👇
          </div>

          {isLoading && (
            <div className="ais-Answers-loader">
              <img src={typing} alt="Loading" />
            </div>
          )}

          {!isLoading && (
            <ul className="ais-Answers-list">
              {(hits || []).map((hit, index) => (
                <li className="ais-Answers-item" key={index}>
                  <h2 className="one-line">
                    {hit[config.responseHeadAttribute]}
                  </h2>
                  <p
                    className="description four-lines"
                    dangerouslySetInnerHTML={{ __html: hit._answer.extract }}
                  ></p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isLoading && hits && hits.length && <Answersfeedback />}
      </div>
    );
  };
}

export default createAnswersComponent;
