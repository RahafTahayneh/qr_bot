import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton, makeStyles } from '@material-ui/core';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import CancelIcon from '@material-ui/icons/Cancel';
import { toast } from "react-hot-toast";

const useStyles = makeStyles(( ) => ({
    root:{
        position: 'relative',
        borderTop: "solid 1.5px #ccc"
    },
    button: {
        backgroundColor: "#9c27b0 !important",
        color: "#fff !important",
        fontWeight: "400 !important",
        fontSize: "12px !important",
        padding: "12px !important",
        display: ({ scan }) =>  scan? 'none' : 'unset'
    },
    qrbody: {
        position: "absolute",
        width: "100%",
        height: "calc(100% - 16px)",
    },
    qrView:{
        height: "100%"
    },
    result: {
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center"
    },
    scannedLink: {
        color: '#9c27b0',
        cursor: "pointer"
    }
}))

const ScanCode = () => {
    const [scanResult,setScanResult] = useState("")
    const [scan, setScan] = useState(false)
    const [isShown, setIsShown] = useState(false)

    const classes = useStyles({ scan })

    const barcodeScannerComponentHandleUpdate = (error, result) => {
        if (result) {
            setScanResult(result.text);
            window.navigator.vibrate(100);
            setScan(false);
            setIsShown(true)
        }
        if(error) toast.error(error)
    };

    useEffect(() => {
        if(scan) {
            const timeOut = setTimeout(() => {
                setIsShown(true)
            }, 1000)
            return () => {
                clearTimeout(timeOut);
            };
        }
    }, [scan])

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.root}>
            { isShown && <Grid item onClick={()=> {
                setScan(false)
                setIsShown(false)
                setScanResult("")
            }}>
                <IconButton >
                    <CancelIcon />
                </IconButton>
            </Grid> }
            {
                (() => {
                    switch (scan) {
                        case true:
                            return !scanResult && (
                                <Grid item container direction="row" alignItems='flex-start' justifyContent="center" className={classes.qrbody}>
                                    <Grid item className={classes.qrView}>
                                        <BarcodeScannerComponent
                                            onUpdate={barcodeScannerComponentHandleUpdate}
                                        />
                                    </Grid>
                                </Grid>
                            )
                        case false:
                            return !scanResult && (
                                <Grid item>
                                    <Button variant="contained" className={classes.button} onClick={() => setScan(true)}>
                                        Request Camera permissions
                                    </Button>
                                </Grid>)

                    }
                })()
            }
            {!!scanResult && <Grid item className={classes.result}>
                Scanned Result: <span className={classes.scannedLink} onClick={() => {
                    window.open(scanResult, "_blank")
                    setScanResult('')
                    setIsShown(false)
                    setScan(false)
                }}> {scanResult} </span>
            </Grid>}
        </Grid>
    )

};

export default ScanCode