import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  select: {
    width: "150px",
    height: "40pxpx",
    border: "radius: 5px",
    boxShadow: "none",
    border: "1px solid #ced6e0",
    transition: "all 0.3s ease -in -out",
    fontSize: "18px",
    padding: "5px 15px",
    background: "none",
    color: "#000000",
    marginBottom: "25px",
    cursor: "pointer",
    position: "relative"
  }
}));