import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Panel from "./Panel";

const useStyles = makeStyles(() => ({
    root: {
       height: 60,
       padding: 16
    }
}))

//#9c27b0
const Header = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root} alignItems="center" justifyContent="space-between" wrap={"nowrap"}>
            <Grid item container alignItems={"center"} className="logo-container" >
                <Link to="/">
                    <a>
                        QrBot
                    </a>
                </Link>
            </Grid>
            <Grid item>
                <Panel />
            </Grid>
        </Grid>
    )

}

export default Header;