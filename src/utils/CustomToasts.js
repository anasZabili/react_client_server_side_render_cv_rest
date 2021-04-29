import { Grid, Typography } from "@material-ui/core";
import { toast, Slide } from "react-toastify";

const TIME_DELAY = 4000;

export function customErrorToast(title, message) {
  const options = {
    autoClose: TIME_DELAY,
    // autoClose: false,
    type: toast.TYPE.ERROR,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    transition: Slide,
  };
  return toast(
    <Grid container>
      <Grid item xs>
        <Typography variant="h6">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body2">{message}</Typography>
      </Grid>
    </Grid>,
    options
  );
}

export function customSuccessToast(title, message) {
  const options = {
    autoClose: 3000,
    // autoClose: false,
    type: toast.TYPE.SUCCESS,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    transition: Slide,
  };
  return toast(
    <Grid container>
      <Grid item xs>
        <Typography variant="h6">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body2">{message}</Typography>
      </Grid>
    </Grid>,
    options
  );
}

export function customInfoToast(title, message) {
  const options = {
    autoClose: TIME_DELAY,
    // autoClose: false,
    type: toast.TYPE.INFO,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    transition: Slide,
  };
  return toast(
    <Grid container>
      <Grid item xs>
        <Typography variant="h6">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body2">{message}</Typography>
      </Grid>
    </Grid>,
    options
  );
}
