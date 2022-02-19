import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(()=> ({
    root:{
        padding: "24px",
        backgroundColor: "hsl(217, 28%, 15%)"
    },
    title:{
        fontSize: "18px !important"
    },
    icon:{
        color: "#0077b5",
        margin: "16px 8px 0px",
        fontSize: 45,
        cursor: "pointer"
    },
    gitHubIcon :{
        color: "#fff",
        margin: "16px 8px 0px",
        fontSize: 40,
        cursor: "pointer"
    },
    twitter: {
        color: "#1DA1F2",
        margin: "16px 8px 0px",
        fontSize: 40,
        cursor: "pointer"
    }
}))

const Footer = () => {
    const classes = useStyles();

    return(
        <Grid container direction={"column"} alignItems={"center"} justifyContent="center" className={classes.root}>
            <Grid item className={classes.title}>
                By <span className={"name"}> Rahaf Tahayneh</span>
            </Grid>
            <Grid item container direction="row" alignItems="center" justifyContent={"center"}>
                <Grid item onClick={()=> window.open("https://www.linkedin.com/in/rahaftahayneh9/", "_blank")}>
                    <LinkedInIcon className={classes.icon} />
                </Grid>
                <Grid item onClick={()=> window.open("https://github.com/RahafTahayneh", "_blank")}>
                    <GitHubIcon className={classes.gitHubIcon} />
                </Grid>
                <Grid item onClick={()=> window.open("https://twitter.com/rahaftahayneh9h", "_blank")}>
                    <TwitterIcon className={classes.twitter} />
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Footer;