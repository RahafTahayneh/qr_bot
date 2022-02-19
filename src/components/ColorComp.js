import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { SketchPicker } from "react-color";

const useStyles = makeStyles(() => ({
    root: {
        padding: 8,
        borderRadius: 8,
        border: "solid 1px #ddd",
        width: "fit-content"
    },
    color: {
        width: 28,
        height: 28,
        marginRight: 10,
        border: "solid 1px #ddd",
        borderRadius: 8
    },
    text: {
        fontSize: 14,
        fontWeight: 700,
        color: "#000"
    }
}));

const ColorComp = ({ onSetColor, color, displayColor, setDisplayColor }) => {
    const classes = useStyles();
    const popover = {
        position: "absolute",
        zIndex: "2",
    };
    const cover = {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
    };


    return (
        <>
        <Grid container direction="row" alignItems="center" wrap="nowrap" className={classes.root} onClick={()=> setDisplayColor(true)}>
            <Grid item className={classes.color} style={{ background: color.color }}/>
            <Grid item className={classes.text}>
                {color.color}
            </Grid>
        </Grid>
            {displayColor && (
                <div style={popover}>
                    <div style={cover} onClick={() => setDisplayColor(false)} />
                    <SketchPicker color={color.color} onChange={onSetColor} />
                </div>
            )}
            </>

    )
}

export default ColorComp