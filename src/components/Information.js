import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import Feature from "./Feature";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#e5e5e5",
        width: "100%",
        padding: "40px"
    },
    title: {
        fontSize: "32px",
        fontWeight: 900,
        margin: "18px 0px",
        alignItems: "center",
        color: "#3c4858"
    },
    subTitle:{
        color: "#555",
        alignItems: "center",
        fontSize: 16,
        marginBottom: 12,
        maxWidth: 1000
    },
    icon: {
        fontSize: "45px",
        color: "#03a9f4"
    },
    label: {

    }
}))

const Information = () => {
    const classes = useStyles();

    return (
        <Grid container direction={"column"} alignItems="center" justifyContent="center" className={classes.root}>
            <Grid item className={classes.title}>
                QR code. What is it?
            </Grid>
            <Grid item className={classes.subTitle}>
                QR Code is a two-dimensional version of the barcode, typically made up of black and white pixel patterns. Denso Wave, a Japanese subsidiary of the Toyota supplier Denso, developed them for marking components in order to accelerate logistics processes for their automobile production. Now, it has found its way into mobile marketing with the widespread adoption of smartphones. "QR" stands for "Quick Response", which refers to the instant access to the information hidden in the Code.
            </Grid>
            <Grid item>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <Feature icon={<MobileScreenShareIcon className={classes.icon}/>} label={"Mobile friendly"} description={"QR codes are easily scanned with iPhone, Android and other mobile devices. Displayed content is adopted for various devices"} />
                    </Grid>
                    <Grid item>
                        <Feature icon={<AvTimerIcon className={classes.icon}/>} label={"Fast access to information"} description={"The only thing needed is a mobile phone. Just scan and get media content anywhere and any time. No search and googling"} />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )

}
export default Information