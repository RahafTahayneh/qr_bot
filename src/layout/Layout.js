import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        padding: 16
    }
}))

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            {children}
        </Grid>
    )

}

export default Layout;