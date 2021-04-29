import { Grid } from "@material-ui/core";
import useFetchData from "../hooks/useFetchData";

const Home = () => {
  const homeTemplate = useFetchData("/");

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{ __html: homeTemplate.data }}></div>;
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
