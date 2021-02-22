import config from "../config";
import { Icon } from "/src/shared/icons";

function QuestionSuggestionList(props) {
  if (!props.shouldDisplay) {
    return null;
  }
  const texts = props.texts;
  const listItems = texts.map((text) => (
    <li
      class="bg-white border rounded mb-2 p-4"
      key={text}
      onClick={() => {
        props.updateAppQuery(text);
      }}
    >
      <button class="flex w-full">
        <span class="flex-1">{`“${text}”`}</span>
        <Icon class="flex-end text-indigo-500" icon="ask" />
      </button>
    </li>
  ));

  return (
    <div class="p-8">
      <div class="text-sm text-gray-700 pb-6">
        Search through {config.company} support and FAQ pages using AI-powered
        Q&A. Ask something like:
      </div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default QuestionSuggestionList;
