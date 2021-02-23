import { Component } from "preact";

export class Topics extends Component {
  constructor(props) {
    super(props);
    this.searchTopic = this.props.onSearchTopic;
  }

  render() {
    return (
      <div class={this.props.class}>
        <div class="text-sm bg-gray-100 rounded p-4">
          <div class="font-bold mb-2">Popular Topics</div>
          {this.props.topics &&
            this.props.topics.map((topic) => (
              <li>
                <button
                  type="button"
                  class="text-indigo-500"
                  value={topic.value}
                  onClick={(e) => {
                    e.preventDefault();
                    const { value } = e.target;
                    this.searchTopic(value);
                  }}
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
