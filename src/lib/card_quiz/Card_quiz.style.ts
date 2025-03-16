import { css } from "../../stitches.config";

export const card = css({
    background: "rgba(245, 245, 245, 0.3)",
    // boxShadow: ""
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    width: "70vw",
    margin: "auto",
    padding: "20px",
    borderRadius: "20px",
    transition: "transform 0.3s ease-in-out, background 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    '&:hover': {
        transform: "scale(1.05)", // 滑鼠懸停時放大
        background: "rgba(245, 245, 245, 0.7)",
        boxShadow: "20px 10px 10px rgba(0, 0, 0, 0.5)"
    }
})


export const speechCss = css({
    fontStyle: "italic",
    
})

export const defineCss = css({
    fontSize: "20px",
    padding: "5px"
})

export const defineBox = css({
    borderRadius: "5px",
    backgroundColor: "rgba(230, 195, 195)",
    padding: "5px",
    color: "white",
    fontWeight: "700",
    // display: "inline"
    width: "fit-content",
    margin: "5px"
})


export const buttonBox = css({
    display: "flex",
    justifyContent: "space-around"
})

export const inputBox = css({
    borderRadius: "7px",
})

export const Btn = css({
    width: "5em",
    // marginLeft: "10px",
    height: "2em",
    borderRadius: "30em",
    fontSize: "15px",
    color: "rgb(251, 250, 251)",
    fontWeight: "700",
    border: "none",
    position: "relative",
    overflow: "hidden",
    zIndex: "1",
    boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff",
    '&::before': {
        content: "''",
        width: "0",
        height: "3em",
        borderRadius: "30em",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundImage: "linear-gradient(to right, #c5d5fa, #fad0c4 100%)",
        transition: ".5s ease",
        display: "block",
        zIndex: "-1",
    },
    '&:hover::before': {
        width: "9em",
    }
})