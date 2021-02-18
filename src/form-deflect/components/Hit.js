export function Hit(result, answers) {
  const helpfulAnswer = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log(value);
  };
  return (
    <div class="mb-4">
      <div class="py-1 text-gray-400 text-sm rounded">
        {result.content_structure.lvl0} &gt; {result.content_structure.lvl1}
      </div>
      <a
        class="leading-6 font-bold text-indigo-500"
        href={"https://algolia.com" + result.url}
        target="_blank"
        rel="noreferrer"
      >
        {result.title}
        <svg
          class="inline-block align-middle ml-2"
          viewBox="0 0 24 24"
          height="14"
          width="14"
        >
          <path
            fill="currentColor"
            d="M17 13v6c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM10.707 14.707l9.293-9.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-9.293 9.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
          ></path>
        </svg>
      </a>

      <p class="text-gray-600 overflow-hidden max-h-12 overflow-ellipsis">
        {result.description}
      </p>
      {answers[0] && answers ? (
        <div class="text-gray-500 mt-6">
          Was this answer helpful
          <button
            type="button"
            onClick={helpfulAnswer}
            value="true"
            class="inline-flex items-center justify-center mx-2 px-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-300 hover:bg-green-400"
          >
            YES
          </button>
          <button
            type="button"
            onClick={helpfulAnswer}
            value="false"
            class="inline-flex items-center justify-center px-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-300 hover:bg-red-400"
          >
            NO
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Hit;
