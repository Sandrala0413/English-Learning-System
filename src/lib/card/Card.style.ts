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
    },

    // "@media (max-width: 1024px)": {
    //     width: "75%", // 手機，讓它滿版
    // },

    "@media (max-width: 768px)": {
        width: "90%", // 手機，讓它滿版
    },
})

export const wordCss = css({
    fontWeight: "800",
    fontSize: "2vw",

})

export const speechCss = css({
    fontStyle: "italic",
    
})

export const pronounceBox = css({
    display: "flex",
    alignItems: "center",
    padding: "5px",
})

export const pronounceCss = css({
    padding: "7px"

})

export const defineCss = css({
    fontSize: "1.2vw",
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

export const sentenceCss = css({
    fontSize: "1.2vw",
    padding: "5px"
})

export const starIcon = css({
    display: "inline-flex",
    marginLeft: "auto",
    justifyContent: "flex-end",
    color: " rgb(243, 213, 93)",
    fontSize: "2.5vw",

})