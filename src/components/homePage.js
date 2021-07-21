import React, { useState, useEffect } from 'react';
import "./CSS/index.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";


const HomePage = () => {
  const token = window.sessionStorage.getItem("token");
  const [ sesion, setSesion ] = useState(null)
  
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

 useEffect(() => {
     token ? setSesion(true) : setSesion(null)
 })
 
  
 

  const history = useHistory();

  const classes = useStyles();

 
  const redirectToRegister = () => {
    history.push("/register");
  };



  return (
    <div className="homepage">
      <h1>
        Добре дошли при
        <h1>LC Brokers!</h1>
      </h1>
      <div className="registerMessage" 
      id="register-button"
      style={{ display: sesion ? 'none' : 'block' }}
      >
        <h3>
          <b>Don't have an account? </b>
        </h3>
        <span>
          <div className={classes.root}>
            <Button
              onClick={() => redirectToRegister()}
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default HomePage;
