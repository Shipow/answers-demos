import config from "../config.js";
import typing from "../img/typing.gif";
import { Component } from "preact";

function AnswersfeedbackButton(props) {
  return (
    <button {...this.props} onClick={props.onClick}>
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
    if (this.state.submitted) {
      return "";
    }
    return (
      <div class="p-8 text-sm text-gray-600">
        Did this answer your question?
        <AnswersfeedbackButton
          class="py-1 px-2 bg-green-500 text-white rounded m-2"
          text="Yes"
          onClick={(text) => this.sendFeedback(text)}
        />
        <AnswersfeedbackButton
          class="py-1 px-2 bg-red-500 text-white rounded"
          text="No"
          onClick={(text) => this.sendFeedback(text)}
        />
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
        class={`ais-Answers my-Answers ${
          isLoading ? "ais-Answers--empty" : ""
        }`}
      >
        <div class="p-8">
          <div class="text-sm text-gray-700 pb-6">
            Answers results. Check out our Q&A search
          </div>

          {isLoading && (
            <div class="">
              <img src={typing} alt="Loading" />
            </div>
          )}

          {!isLoading && (
            <ul>
              {(hits || []).map((hit, index) => (
                <li class="bg-white p-4 mb-2 rounded" key={index}>
                  <h2 class="text-md font-medium text-indigo-500">
                    {hit[config.responseHeadAttribute]}
                  </h2>
                  <p
                    class="text-sm text-gray-600"
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
