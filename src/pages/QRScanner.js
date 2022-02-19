import React, { useRef, useState } from "react";
import { Grid, Paper, Tabs, Tab, makeStyles } from "@material-ui/core";
import { Header, ScanCode, UploadCode } from "../components";

const useStyles = makeStyles(() => ({
    root: {
        height: "100%",
    },
    title: {
        width: '100%',
        fontSize: 40,
        fontWeight: 900,
        textAlign: "center",
    },
    subTitle: {
        width: '100%',
        fontSize: 20,
        fontWeight: 400,
        textAlign: "center",
        marginBottom: "16px !important"
    },
    container: {
        width: '100%',
        padding: 4,
        '@media (min-width: 800px)' : {
            padding: "20px 80px 20px !important",
            marginTop: 16
        },
    }
}));

const QRScanner = () => {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getComponent = () => {
        switch (value) {
            case 0:
                return <ScanCode />
            case 1:
                return <UploadCode />
            default:
                return null;
        }
    }

    return (
        <Grid container direction="column" justifyContent="center" className={classes.root} spacing={4}>
            <Grid item container>
                <Header />
            </Grid>
            <Grid item className={classes.title}>
                Upload or scan your QR code
            </Grid>
            <Grid item className={classes.subTitle}>
                Upload JPEG/PNG file or scan your code with camera
            </Grid>
            <Grid item container justifyContent={"center"} className={classes.container}>
                <Paper square className="scanner-box">
                    <Grid container direction="column" alignItems="center" justifyContent="center" className="border-solid border-b-2 border-gray-200">
                        <Grid item>
                            <Tabs
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                                centered
                            >
                                <Tab label="SCAN QR CODE" />
                                <Tab label="UPLOAD IMAGE" />
                            </Tabs>
                        </Grid>
                    </Grid>
                    <Grid item container className="scanner-root">
                        {getComponent()}
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    )
}

export default QRScanner