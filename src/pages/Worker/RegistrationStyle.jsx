import { red } from "@material-ui/core/colors";

const orange = "#F2A74B";
const textLight = "#eaf2f4";
const textDark = "#0D0D0D";
const borderLight = "#8246b9";

export const register = theme => ({

  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    backgroundColor:"#333",
    // display: "block",
    // backgroundColor:"#7b8484 ",
    height:"100vh",
    width: "auto",
    [theme.breakpoints.up(400 + theme.spacing(2))]: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto"
    }
    
  },
  paper: {
    position: "relative",
    marginTop: theme.spacing(2),
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color:"white",
    background:"#191926",
    //   "linear-gradient(180deg, #8246b9 15%, rgba(24,167,75,1) 90%)",
    // boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",

    "&:hover": {
      boxShadow: "0px 24px 36px rgba(131,153,167,0.99)"
    }
  },
  avatar: {
    marginTop: 20,
    position: "relative",
    background: "rgba(255,255,255,0.85)",
    width: "100px",
    height: "100px",
    boxShadow: "0px 0px 12px rgba(131,153,167,0.99)"
  },

  icon: {
    width: "80px",
    height: "80px",
    color: "rgba(131,153,167,0.79)"
  },

  form: {
    margin: theme.spacing(4),
    color:"white"
  },
  

  button: {
      cursor:"pointer",
      background: "white",
    position: "relative",
    fontWeight: 400,
    fontFamily: "Raleway, sans-serif",
    overflow: "hidden",
    marginTop: theme.spacing(6),
    padding: `${theme.spacing(1.6)}px`,
    border: "none",
    borderRadius: "8px",
    letterSpacing: "3px",
    color: "black",
},
error: {
    border: `1.2px solid ${red[900]}`,
    background: "rgba(169,198,217,0.29457423)",
    // color: red[900],
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Raleway, sans-serif",
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(3)
  },


});
