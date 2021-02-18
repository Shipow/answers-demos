import config from "../config";
import ask from "../img/ask.svg";

function QuestionSuggestionList(props) {
  if (!props.shouldDisplay) {
    return null;
  }
  const texts = props.texts;
  const listItems = texts.map((text) => (
    <li
      key={text}
      onClick={() => {
        props.updateAppQuery(text);
      }}
    >
      <button className="ask-this-question">
        {`“${text}”`}
        <img src={ask} alt="Ask this question" />
      </button>
    </li>
  ));

  return (
    <div className="question-suggestion-container">
      <span>
        <h2>Start a searchversation</h2>
        Search through {config.company} support and FAQ pages using AI-powered
        Q&A. Ask something like:
      </span>
      <ul>{listItems}</ul>
    </div>
  );
}

export default QuestionSuggestionList;
