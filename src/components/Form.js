import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import fetchWeather from '../service/Api'
import Details from './Details';

const useStyles = makeStyles({
    component: {
        padding: 10,
        background: '#445A6F'
    },
    input:{
        color:'white',
        marginRight: 15
    },
    button: {
        width: 71,
        height: 40,
        background: '#e67e22',
        color: 'white',
        marginTop: 5
    }
})

function Form() {
    // storing search data
    const [weather, setWeather] = useState();
    // handle search response
    const [click, handleClick] = useState(false);
    // form values
    const [form, setForm] = useState({
        city: "",
        country: ""
    })

    // Api to fetch data
    useEffect(() => {
        const getWeather = async() => {
            form.city && await fetchWeather(form.city, form.country).then(response => {
                setWeather(response.data)
                console.log(response.data)
            })
        }
        getWeather();
        handleClick(false);
    }, [click])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name === 'city') {
            setForm({...form, city: value})
        }
        if (name === 'country'){
            setForm({...form, country: value})
        }
    }

    const classes = useStyles();
    return (
        <>
            <Box className={classes.component}>
                <TextField
                    name="city" 
                    label="city" 
                    inputProps={{className: classes.input}}
                    className={classes.input}
                    onChange={e => handleChange(e)}/>
                <TextField
                    name="country" 
                    label="country" 
                    inputProps={{className: classes.input}}
                    className={classes.input}
                    onChange={e => handleChange(e)}/>
                <Button 
                    onClick={() => handleClick(true)}
                    variant='contained'
                    className={classes.button}>Search</Button>
            </Box>
            {/* Passing information to another component */}
            <Details data={weather}/>
        </>
    )
}

export default Form
