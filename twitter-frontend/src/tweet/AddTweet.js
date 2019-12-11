import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '70%',
    },
    button: {
        width: '20%',
    },
}))

export default function AddTweet() {
    const classes = useStyles()
    const token = localStorage.token
    const [inputs, setInputs] = useState({
        content: '',
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
        console.log(inputs)
    }
    const addTweet = async () => {

        await axios.post("http://localhost:8080/api/tweets", inputs,
            {
                headers:
                {
                    Authorization: 'Bearer ' + token
                }
            }).then(
                
            )
        console.log(token)
    }
    const iconStyle = {
        float: 'left',
        width: '67px',
        marginTop: '20px'
    }
    const contentStyle = {
        float: 'left',
        width: '80%',
        textAlign: 'right'
    }

    return (
        <div className={classes.paper} >
            <form className={classes.form} noValidate>
                <div style={iconStyle}>
                    <UserIcon color="disabled" style={{ fontSize: 50 }} />
                </div>
                <div style={contentStyle}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="content"
                        label="무슨 일이 일어나고 있나요?"
                        name="content"
                        autoFocus
                        onChange={onChange}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={addTweet}
                    >
                        트윗
                </Button>
                </div>

            </form>
        </div>
    );
}