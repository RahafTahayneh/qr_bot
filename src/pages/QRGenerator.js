import React, { useEffect, useState } from "react";
import { Button, Grid, makeStyles, Tab, Tabs, TextField } from "@material-ui/core";
import { Header } from "../components";
import QRCode from "qrcode.react";
import ColorComp from "../components/ColorComp";


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
        fontWeight: 600,
        marginBottom: "16px !important"
    },
    container: {
        width: "100%",
        padding: 4,
        marginTop: 10,
        '@media (min-width: 800px)' : {
            padding: "20px 80px !important",
            marginTop: 16
        },
    },
    paper: {
        padding: 24,
        backgroundColor: "#fff",
        borderRadius: 16,
    },
    input: {},
    button: {
        backgroundColor: "#9c27b0 !important",
        color: "#fff",
        fontWeight: "400 !important",
        fontSize: "12px !important",
        padding: "12px !important",
        marginTop: 24,
    },
    qrContainer:{
        height: 300,
        width: "100%",
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        color: "#000",
        borderBottom: "solid 1.5px #ccc"
    },
    content: {
        marginBottom: 16
    },
    tabContainer:{
        margin: "16px 0px 0px"
    }
}));

const QRGenerator = () => {
    const classes = useStyles();
    const [value, setValue] = useState("")
    const [ImageUrl, setImageUrl] = useState(false);
    const [tab, setTab] = useState(0);
    const [bgColor, setBgColor] = useState({color: "#fff", opa: 1})
    const [fgColor, setFgColor] = useState({color: "#000", opa: 1})
    const [size, setSize] = useState(290)
    const [displayColor, setDisplayColor] = useState(false)

    const handleChange = (event, newValue) => {
        setTab(newValue);
        setDisplayColor(false)
    };


    const onGenerateCode = async () => {
        setImageUrl(true)
    }

    const downloadQRCode = () => {
        // Generate download with use canvas and stream
        const canvas = document.getElementById("qr-gen");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${value}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    useEffect(() => {
        if(!value){
            setImageUrl(false)
        }
    }, [value])

    const getComponent = () => {
        switch (tab) {
            case 0:
                return (
                    <ColorComp color={bgColor} setDisplayColor={setDisplayColor}  onSetColor={(color) => setBgColor({
                        color: color.hex,
                        opa: color.rgb.a,
                    })} displayColor={displayColor}/>
                )
            case 1:
                return <ColorComp color={fgColor} setDisplayColor={setDisplayColor} onSetColor={(color) => setFgColor({
                    color: color.hex,
                    opa: color.rgb.a,
                })} displayColor={displayColor} />
            default:
                return null;
        }
    }

    return (
        <Grid container direction="column" justifyContent="center" className={classes.root} spacing={4}>
            <Grid item container>
                <Header/>
            </Grid>
            <Grid item className={classes.title}>
                Create your Dynamic QR code
            </Grid>
            <Grid item container justifyContent={"space-between"} className={classes.container}>
                <Grid item className={classes.content}>
                    <Grid container direction={"column"}>
                        <Grid item className={classes.subTitle}>
                            1. Generate your code
                        </Grid>
                        <Grid item>
                            <Grid container direction={"column"} wrap={"nowrap"} className={classes.paper}>
                                <Grid item>
                                    <TextField
                                        variant="outlined"
                                        required
                                        label="Type text here"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}/>
                                </Grid>
                                <Grid item>
                                    <Button variant={'outlined'} className={classes.button} disabled={!value}
                                            onClick={() => onGenerateCode()}>
                                        GENERATE CODE
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={"column"} alignItems={"flex-start"}>
                        <Grid item className={classes.subTitle}>
                            2. Preview QR Code
                        </Grid>
                        <Grid item>
                            <Grid container direction={"column"} wrap={"nowrap"} className={classes.paper}>
                                <Grid item container alignItems={"center"} justifyContent={"center"} className={classes.qrContainer}>
                                    {ImageUrl && <QRCode
                                        id="qr-gen"
                                        value={value}
                                        size={size}
                                        bgColor={bgColor.color}
                                        fgColor={fgColor.color}
                                        level={"L"}
                                        includeMargin={true}
                                    />}
                                    {!ImageUrl && (<>Your QR Code will display here</>)}
                                </Grid>
                                <Grid item>
                                    <Tabs
                                        value={tab}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        onChange={handleChange}
                                        centered
                                    >
                                        <Tab label="Bg color" disabled={!value || !ImageUrl} />
                                        <Tab label="Fg color" disabled={!value || !ImageUrl}/>
                                    </Tabs>
                                </Grid>
                                {value && ImageUrl && (<Grid item container alignItems="center" justifyContent="center" className={classes.tabContainer}>
                                    {getComponent()}
                                </Grid>)}
                                <Grid item container alignItems={"center"} >
                                    <Button fullWidth variant={'outlined'} className={classes.button} disabled={!value || !ImageUrl}
                                            onClick={() => downloadQRCode()}>
                                        DOWNLOAD QR CODE
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default QRGenerator