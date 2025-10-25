import "../index.css"
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
        <div>
            {tagElements}
        </div>
    );
}

// Colors stuff below
function getColor(name: string): string{
    switch(name){
        case "HTML":
            return colors.HTML;
        case "CSS":
            return colors.CSS;
        case "JavaScript":
            return colors.JavaScript;
        case "Python":
            return colors.Python;
        case "Java":
            return colors.Java;
        default:
            return "red";
    }
}

export default TagRow;