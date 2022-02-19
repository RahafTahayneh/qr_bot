import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Header, Landing } from "../components";
import Information from "../components/Information";
import Footer from "../components/Footer";

const useStyles = makeStyles(() => ({
    root: {
        height: "100%",
        position: "relative",
    },
    section: {
        width: '100%',
        marginBottom: "120px",
        marginTop: "70px !important",
    },
    footer:{
        width: "100%",
        position: "absolute",
        bottom: 0,
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container direction={"column"} alignItems={"center"} className={classes.root}>
            <Grid item container>
                <Header/>
            </Grid>
            <Grid item id="home" className={classes.section}>
                <Landing/>
            </Grid>
            <Grid item id="overview" className={classes.section}>
                <Information />
            </Grid>
            <Grid item className={classes.footer}>
                <Footer />
            </Grid>
        </Grid>

    )

};

export default Home;
