import { Box, makeStyles, Typography } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import DehazeIcon from '@material-ui/icons/Dehaze';

import React from 'react'

const useStyles = makeStyles({
    component:{
        margin: 50,
        borderStyle: 'double'
    },
    row:{
        padding: 10,
        fontSize: 20,
        letterSpacing: 2
    },
    value:{
        color: 'white',
        marginLeft:10
    },
    icon:{
        marginRight: 15,
        color: 'darkred',
        paddingTop:5
    }
})

function Details({data}) {
    console.log('details', data)

    const classes = useStyles();
    return (
        data ?
        <Box className={classes.component}>
            <Typography className={classes.row}>
                <LocationOnIcon className={classes.icon}/> Location 
                <Box className={classes.value} component="span">
                    {data.name}, {data.sys.country}
                </Box>
            </Typography>
            <Typography className={classes.row}>
                <SettingsBrightnessIcon className={classes.icon}/> Temperature 
                <Box className={classes.value} component="span">
                    {Math.floor(data.main.temp - 273.15)}°C 
                </Box>
            </Typography>
            <Typography className={classes.row}>
                <OpacityIcon className={classes.icon}/> Humidity 
                <Box className={classes.value} component="span">
                    {data.main.humidity} %
                </Box>
            </Typography>
            <Typography className={classes.row}>
                <Brightness5Icon className={classes.icon}/> Sunrise 
                <Box className={classes.value} component="span">
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                </Box>
            </Typography>
            <Typography className={classes.row}>
                <Brightness6Icon className={classes.icon}/> Sunset 
                <Box className={classes.value} component="span">
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                </Box>
            </Typography>
            <Typography className={classes.row}>
                <DehazeIcon className={classes.icon}/> Condition 
                <Box className={classes.value} component="span">
                    {data.weather[0].main}
                </Box></Typography>
        </Box> : ''
    )
}

export default Details
