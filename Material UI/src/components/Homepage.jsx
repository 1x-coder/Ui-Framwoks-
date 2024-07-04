import { Grid , Typography} from "@mui/icons-material";
const Homepage = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={12} sm={6}>
          <Typography varient ="h2">
             Hellow World
          </Typography>

          <Typography varient ="h2">
             I am Abdullah
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
