import React from "react";
import AppBarComponent from "./AppBar";
import { useHistory } from "react-router";

const AppBar = (props) => {
  const history = useHistory();
  const buttons = [
    {
      title: "Acceuil",
      handleClick: () => {
        history.push("/");
      },
    },
    {
      title: "Aide",
      handleClick: () => {
        history.push("/help");
      },
    },
    {
      title: "CV",
      handleClick: () => {
        history.push("/cv");
      },
    },
  ];
  return <AppBarComponent buttons={buttons} />;
};

export default AppBar;
