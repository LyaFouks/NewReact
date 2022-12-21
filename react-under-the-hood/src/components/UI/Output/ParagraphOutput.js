import Paragraph from "./Paragraph";
import React from "react";

const ParagraphOutput = (props) => {
  console.log("ParagraphOutput component");

  return <Paragraph>{props.isShown ? "New paragraph" : ""}</Paragraph>;
};

export default React.memo(ParagraphOutput);
