import { useState } from "react";
import useFetchData from "../hooks/useFetchData";

import { Typography } from "@material-ui/core";

import { sendGetRequest } from "../utils/sendRequest";

const Cv = () => {
  const homeTemplate = useFetchData("/resume");
  let firstId;
  const [firstCvHtml, setFirstCvHtml] = useState("");
  const parser = new DOMParser();
  if (!homeTemplate.isLoading) {
    const xmlDoc = parser.parseFromString(homeTemplate.data, "text/xml");
    firstId = xmlDoc.getElementsByTagName("id")[0];
    firstId = firstId.innerHTML;
    if (firstId) {
      sendGetRequest("/htmlcv?id=" + firstId, {}, (res) => {
        setFirstCvHtml(res.data);
      });
    }
  }

  return (
    <>
      <br />
      <Typography>
        Cette page affiche le premier Cv présent dans le base de données, il est
        impossible de consulter tout les cv dans notre client mais cest juste ce
        que notre client fait
      </Typography>
      <br />
      {firstCvHtml && (
        <div dangerouslySetInnerHTML={{ __html: firstCvHtml }}></div>
      )}
    </>
  );
};

export default Cv;
