import { Fragment } from "preact";
export function hitLayoutSmart(
  item,
  { main, extra, icon, url, description, wrap }
) {
  const imageExt = /\.svg|\.ico|\.png|\.jpg|\.jpeg|data:image/g;
  const iconSet = /^fa|mdi/g;
  if (icon && icon.match(imageExt)) {
    icon = <img src={icon} alt="" />;
  } else if (icon && icon.match(iconSet)) {
    icon = <i class={icon}></i>;
  }

  return (
    <div className="aa-ItemWrapper">
      <div className="aa-ItemContent">
        {icon ? <div class="aa-ItemIcon ">{icon}</div> : ""}
        <div class="aa-ItemContentBody">
          <div class="aa-ItemContentTitle">{main}</div>
          {typeof extra === "string" ? (
            <div class="aa-ItemContentSubtitle">{extra}</div>
          ) : (
            ""
          )}
          {typeof extra === "number" ? (
            <div class="aa-ItemContentSubtitle">
              <span class="aa-ItemContentTag">{extra}</span>
            </div>
          ) : (
            ""
          )}
          {typeof extra === "object" && extra ? (
            <div class="aa-ItemContentSubtitle">
              {extra
                .map((tag) => <span class="aa-ItemContentTag">{tag}</span>)
                .join("")}
            </div>
          ) : (
            ""
          )}
          {description ? (
            <div class="aa-ItemContentDescription">{description}</div>
          ) : (
            ""
          )}
          <button class="aa-ItemActionButton" type="button" title="select">
            <i class="mdi mdi-subdirectory-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default hitLayoutSmart;
