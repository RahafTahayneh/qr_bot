import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import illustration from "../assets/qr_code.png"

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 40
    }
}))

const Landing = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.root} direction="column" alignItems="center" justifyContent="center" wrap={"nowrap"}>
            <Grid item>
                <img src={illustration} alt="" className="illustration" />
            </Grid>
            <Grid item className={"welcome"}>
                Scan or create your own QR codes within the app.
            </Grid>
            <Grid item className={"sub-welcome"}>
                QrBar allow you to scan a wide rang of QR code formats,,  Share websites, your Wi-Fi hotspot credentials, contacts (e.g. vCard or MeCard) and many more.
            </Grid>
            <Grid item container direction="row" alignItems="center" justifyContent={"space-between"} className={"btn-container"}>
                <Grid item>
                    <Link to={"/qr-scanner"}>
                        <Button variant="contained" className={"main-button"}>
                            Scan QR
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to={"/qr-generator"}>
                        <Button variant="contained" className={"main-button"}>
                            Generate QR
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Landing;