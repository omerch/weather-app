import { makeStyles } from '@material-ui/core'
import React from 'react'
import logo from '../images/bg.jpg';

const useStyles = makeStyles({
    component: {
       marginLeft: 10
    },
    leftContainer: {
        backgroundImage: `url(${logo})`,
        height: '80%',
        width: '30%',
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer:{
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
        height:"80%",
        width:'70%'
    }
})

function Information({data}) {
    const classes = useStyles();
    console.log(data)
    return (
        <div className={classes.component}>
            <h1>{data}</h1>
        </div>
    )
}

export default Information

