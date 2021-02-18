import { Fragment } from "preact";

export function headerLayout({ items, sourceTitle }) {
  if (items.length === 0) {
    return "";
  }
  return (
    <div class="aa-SourceHeader">
      <div class="aa-SourceHeaderTitle">{sourceTitle}</div>
      <div class="aa-SourceHeaderLine"></div>
    </div>
  );
}

export default headerLayout;
