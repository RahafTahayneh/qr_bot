import React  from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Panel = () => {
    return (
        <Grid container direction="row" alignItems="center" wrap="nowrap">
            <Grid item className="tab">
                <Link to="/#home">
                    <a>Home </a>
                </Link>
            </Grid>
            <Grid item className="tab">
                <Link to="/#overview">
                    <a>Overview </a>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Panel;