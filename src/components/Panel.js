import React  from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Panel = () => {
    return (
        <Grid container direction="row" alignItems="center" wrap="nowrap">
            <Grid item className="tab">
                <Link to="/#home">
                    Home
                </Link>
            </Grid>
            <Grid item className="tab">
                <Link to="/#overview">
                  Overview
                </Link>
            </Grid>
        </Grid>
    )
}

export default Panel;