import { css } from "../../stitches.config";

export const addBox = css({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    // marginLeft: "10%",
    gap: "20px"
})

export const inputBox = css({
    borderRadius: "7px",

})

export const addBtn = css({
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

export const vocListBox = css({
    display: "flex",
    flexDirection: "column",
    marginLeft: "10%",
    gap: "15px",
})

export const card = css({
    margin: "0",
})
  