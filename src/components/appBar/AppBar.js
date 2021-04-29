import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { AppBar as UIAppBar, Box, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
}));

/**
 * @param title (property) String représentant le titre de la barre
 *
 * @param buttons (property) est un tableau d'objet contenant les attributs
 *  title: le tittre du bouton
 *  handleClick: l'action à réaliser au clique
 *  icon: L'icon du bouton (si icon passé en paramètre title et handleClick ignoré)
 *  button: le bouton afficher (si tableau est passé en parametre tout les attributs son ignoré)
 */

function AppBarComponent(props) {
  const { title = "CV rest", buttons } = props;
  const classes = useStyles();
  const history = useHistory();

  /*
   * Redirige l'utilisateur sur la page d'acceuil
   */
  const handleClick = () => {
    history.push("/");
  };
  return (
    <UIAppBar position="static" className="my-app-bar">
      <Toolbar style={{ minHeight: "80px" }}>
        {buttons?.map((button) => {
          if (button.button) {
            return button.button;
          } else if (button.icon) {
            return (
              <IconButton color="inherit" onClick={button.handleClick}>
                {button.icon}
              </IconButton>
            );
          } else {
            return (
              <Button color="inherit" onClick={button.handleClick}>
                {button.title}
              </Button>
            );
          }
        })}
      </Toolbar>
    </UIAppBar>
  );
}

export default AppBarComponent;
