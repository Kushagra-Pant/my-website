import "../index.css"
import "./TagRow.css"
import colors from './colors.json';
import React from "react";

type TagRowProps = {
    tags: string[];
}

function length(prop: TagRowProps): number {
    return prop.tags.length;
}

function TagRow(tags: TagRowProps) {
    let tagElements: React.ReactElement[] = [];

    for (let i = 0; i < length(tags); i++) {
        tagElements.push(
        <span className="tag" key={i} style={{backgroundColor: getColor(tags.tags[i])}} >
          {tags.tags[i]}
        </span>
      );
    }

    return (
        <div className="tagRow">
            {tagElements}
        </div>
    );
}

// Colors stuff below
function getColor(name: string): string{
    return colors[name as keyof typeof colors] || "#808080";
}

export default TagRow;