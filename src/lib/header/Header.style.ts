import { css } from '../../stitches.config';

export const headerBtn = css({
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "900"
})

export const headerBar = css({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "3rem",
    marginLeft: "2.5%",
    gap: "2rem"
})

export const logoImg = css({
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "50%"
})

export const searchBar = css({
    borderRadius: "20px",
    width: "15vw",
    height: "5vh",
    border: "0.2vw solid #ccc",
    padding: "5%",
    margin: "5%"
})

export const logInBtn = css({
    display: "inline-flex",
    marginLeft: "auto",
    // flexGrow: 1,
    justifyContent: "flex-end",
    marginRight: "1rem",
    // borderRadius: "5px",
    // background: " #c5d5fa",
    // fontSize: "20px",
    // color: "white",
    // padding: "5px",
    // '&:hover':{
    //     background: " #adc2f3"
    // }
    padding: '0.5em 1em',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    letterSpacing: '5px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.9)',
    transition: 'all 1000ms',
    fontSize: '1.3rem',
    position: 'relative',
    overflow: 'hidden',
    outline: '2px solidrgba(255, 255, 255, 0.9)',
  
    '&:hover': {
      color: '#ffffff',
      transform: 'scale(1.1)',
      outline: '2px solidrgb(103, 157, 219)',
      boxShadow: '4px 5px 17px -4px #8888ba',
    },
  
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '-50px',
      top: '0',
      width: '0',
      height: '100%',
      backgroundColor: '#c5d5f8',
      transform: 'skewX(45deg)',
      zIndex: '-1',
      transition: 'width 800ms',
    },
  
    '&:hover::before': {
      width: '200%',
    },

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
    fontSize: "2vw",
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
    fontSize: "1vw",
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

