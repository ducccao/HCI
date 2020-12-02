import React from "react";
import { makeStyles, Box, Grid, Button } from "@material-ui/core";

const mate = makeStyles((theme) => ({
  dashboard: {
    height: "100vh",
    width: "100%",
  },
  dash_up: {
    height: "70%",
    width: "100%",
    display: "flex",
    backgroundColor: theme.palette.primary.main,
  },
  big_image: {
    width: "50%",
    backgroundColor: theme.palette.primary.dark,
  },
  grid_image: {
    width: "50%",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    backgroundColor: theme.palette.primary.light,
  },
  grid_item: {
    border: "1px solid black",
  },
  dash_down: {
    height: "30%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.success.main,
  },
  group_feature: {
    height: 200,
    width: 400,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function Dashboard() {
  const classes = mate();

  return (
    <Box className={classes.dashboard}>
      <Box className={classes.dash_up}>
        <Box className={classes.big_image}></Box>
        <Box className={classes.grid_image}>
          <Box className={classes.grid_item}></Box>
          <Box className={classes.grid_item}></Box>
          <Box className={classes.grid_item}></Box>
          <Box className={classes.grid_item}></Box>
          <Box className={classes.grid_item}></Box>
          <Box className={classes.grid_item}></Box>
          <Box className={classes.grid_item}></Box>
          <Box className={classes.grid_item}></Box>
          <Box className={classes.grid_item}></Box>
        </Box>
      </Box>
      <Box className={classes.dash_down}>
        <Box className={classes.group_feature}>
          <Button variant="contained" color="primary">
            Zoom Big Image
          </Button>
          <Button variant="contained" color="primary">
            Zoom Grid Images
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
