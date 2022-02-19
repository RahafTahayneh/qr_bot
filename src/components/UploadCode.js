import React, { useState, useRef } from "react";
import { Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import QrReader from "react-qr-reader";
import CancelIcon from "@material-ui/icons/Cancel";
import { toast, Toaster } from "react-hot-toast";

const useStyles = makeStyles(() => ({
    root: {
        padding: 24,
    },
    title: {
        color: "rgb(216, 218, 222)",
        fontSize: 20,
        marginBottom: 16
    },
    icon: {
        fontSize: 48,
        color: "rgb(216, 218, 222)",
        marginBottom: 10
    },
    button: {
        border: "solid 2px #9c27b0 !important",
        borderRadius: '8px !important',
        backgroundColor: "#9c27b0 !important",
        color: "#fff !important"
    },
    qr: {
        height:({scan} ) => scan?  "150px": "0px",
        width: ({scan} ) => scan? "150px": "0px"

    },
    result: {
        fontSize: 20,
        fontWeight: 700,
        paddingTop: 20,
        textAlign: "center"
    },
    scannedLink: {
        color: '#9c27b0',
        cursor: "pointer"
    }
}));

const UploadCode = () => {
    const [scanResult, setScanResult] = useState("")
    const [scan, setScan] = useState(false)
    const [isShown, setIsShown] = useState(false)
    const classes = useStyles({scan})
    const qrRef= useRef(null);

    const uploadImage = () => {
        qrRef.current.openImageDialog();
        setTimeout(() => {
            setScan(true)
            setIsShown(true)
        }, 1000)
    };
    const handleScanFile = (result) => {
        if (result) {
            setScanResult(result);
        }
    }

    return (
        <Grid container direction="column" alignItems={"center"} justifyContent={"center"} wrap="nowrap" className={classes.root}
        >
            { isShown && <Grid item onClick={()=> {
                setScan(false)
                setIsShown(false)
                setScanResult('')
            }}>
                <IconButton >
                    <CancelIcon />
                </IconButton>
            </Grid> }
            { !scanResult && !isShown && <Button variant="contained" className={classes.button} onClick={uploadImage}>
                Upload Image 🚀
            </Button> }
           <Grid item className={classes.qr}>
                <QrReader
                    ref={qrRef}
                    delay={300}
                    style={{width: '100%'}}
                    onError={(error) => {toast.error(error)}}
                    onScan={handleScanFile}
                    legacyMode
                />
            </Grid>
            {!!scanResult && <Grid item className={classes.result}>
                Scanned Result: <span className={classes.scannedLink} onClick={() => {
                window.open(scanResult, "_blank")
                setScanResult('')
                setScan(false)
                setIsShown(false)
            }}>  <a> {scanResult}</a> </span>
            </Grid>}
        </Grid>
    )
};

export default UploadCode;