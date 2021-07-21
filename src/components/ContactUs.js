import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './CSS/index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin:theme.spacing(1),
        },
    },
}));

const ContactUs = () => {
    const classes = useStyles();
    return(
        <div className={classes.root} id="contacts">
             <p>
          <b>LC Brokers ООД : </b>
          София 1404, бул.Витоша 122А
        </p>
        <p>
          <b>Мобилен:</b> 0878 007 10544
        </p>
        <p>
          <b>Телефон:</b> 02 /978 698744
        </p>
        <p>
          <b>Факс:</b> 02 /978 698744
        </p>
        <p>
          <b>E-mail:</b> Frontab@abv.bg
        </p>
        <p>Любомир Петров - Управител</p>
        {/* <Button variant="contained" color="primary" >Пишете ни(In progress)</Button> */}
    </div>
    )
}


export default ContactUs;