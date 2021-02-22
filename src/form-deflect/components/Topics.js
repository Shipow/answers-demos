import { Component } from "preact";

export class Topics extends Component {
  openSearch(e) {
    return "";
  }
  render() {
    return (
      <div {...this.props}>
        <div class="text-sm bg-gray-100 rounded p-4">
          <div class="font-bold mb-2">Popular Topics</div>
          {this.props.topics &&
            this.props.topics.map((topic) => (
              <li>
                <button
                  type="button"
                  class="text-indigo-500"
                  onClick={this.openSearch(topic.value)}
                >
                  {topic.value}
                </button>
              </li>
            ))}
        </div>
      </div>
    );
  }
}

export default Topics;
