import { css } from '../../stitches.config';

export const headerBtn = css({
    color: "white",
    fontSize: "20px",
    padding: "20px",
    fontWeight: "900"
})

export const headerBar = css({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "30px",
})

export const logoImg = css({
    width: "60px",
    height: "60px",
    borderRadius: "50%"
})

export const searchBar = css({
    borderRadius: "20px",
    width: "15vw",
    height: "5vh",
    border: "2px solid #ccc",
    padding: "10px",
    margin: "10px"
})

export const logInBtn = css({
    display: "inline-flex",
    // marginLeft: "auto"
    flexGrow: 1, // 讓它佔據剩餘空間
    justifyContent: "flex-end",
    marginRight: "5vw"
})

export const logInPage = css({
    position: "fixed", // 獨立存在，不影響其他排版
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(255, 255, 2555, 0.63)", // 半透明背景
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10" // 確保顯示在最上層
});

export const logInContainer = css({
    display: "inline-flex",
    flexDirection: "column",
    gap: "20px",
    background: "linear-gradient(135deg,rgb(255, 255, 255),  #e0cfca)",
    borderRadius: "7px",
    padding: "30px",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
})

export const inputBox = css({
    borderRadius: "20px",
    border: "solid rgba(0, 0, 0, 0.5) 1.5px",

})

export const userIcon = css({
    borderRadius: "60%",
    background: "rgb(255, 255, 255)",
    fontSize: "40px",
    padding: "13px"
})

export const logInPageBtn = css({
    // background: " #c5d5fa",
    // color: "#333",
    // padding: "10px",
    // border: "none",
    // borderRadius: "8px",
    // cursor: "pointer",
    // fontWeight: "bold",
    // transition: "0.3s",
    // '&:hover': {
    //     background: " #adc2f3", /* 深一點的藍色 */
    // }
    width: "5em",
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
        height: "2em",
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
