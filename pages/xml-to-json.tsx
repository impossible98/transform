import ConversionPanel from "@components/ConversionPanel";
import React from "react";
import { xml2json } from "xml-js";

function XmlToJson() {
  const transformer = React.useCallback(async ({ value }) => {
    return JSON.stringify(
      JSON.parse(
        xml2json(value, {
          compact: true
        })
      )
    );
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="XML"
      editorLanguage="xml"
      resultTitle="JSON"
      resultLanguage={"json"}
    />
  );
}

export default XmlToJson;
