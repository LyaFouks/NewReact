import Paragraph from "./Paragraph";

const ParagraphOutput = (props) => {
  console.log("ParagraphOutput component");

  return <Paragraph>{props.isShown ? "New paragraph" : ""}</Paragraph>;
};

export default ParagraphOutput;
