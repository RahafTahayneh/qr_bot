import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 30,
        marginLeft: 20

    },
    desc:{
        color: "#555",
        fontSize: 12,
        fontWeight: 400,
        maxWidth: 350,
        alignItems: "center"
    },
    icon: {

    },
    label: {
        color: "#555",
        fontSize: 16,
        fontWeight: 800,
        margin: "12px 0px",
        alignItems: "center"
    }
}))

const Feature = ({icon, label, description}) => {
    const classes = useStyles();

    return (
        <Grid container direction={"column"} alignItems="center" className={classes.root}>
            <Grid item>
                {icon}
            </Grid>
            <Grid item className={classes.label}>
                {label}
            </Grid>
            <Grid item className={classes.desc}>
                {description}
            </Grid>
        </Grid>
    )

}
export default Feature