import React,{useState, useEffect} from 'react'
import { Box, Button, Card, CardActionArea, CardActions, makeStyles, Typography } from '@material-ui/core'
import logo from '../images/bg.jpg';
import Form from './Form';
import fetchWeather from '../service/Api'
import Details from './Details';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto'
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
    },
    cards: {
        marginTop:380,
        display:'column',
        justifyContent: 'space-around',
        paddingLeft:50,
        color: '#e67e22',
        width: 150,
        height:150
    },
    lowercard: {
        marginTop:20
    }
})

function Weather() {
    const classes = useStyles();

    // states for fetching default locations data
    const [def1, setDef1] = useState({})
    const [def2, setDef2] = useState({})

    // storing cards click states
    const [loc1, setLoc1] = useState(false)
    const [loc2, setLoc2] = useState(false)
    
    // method to initialize fetchWeather data
    useEffect(() => {
        const getWeather = async() => {
            // Default location 1
            await fetchWeather('London', 'England').then(response => {
                setDef1(response.data)
                console.log(def1)
            }).catch( error => console.log(error))

            // Default location 2
            await fetchWeather('Berlin', 'Germany').then(response => {
                setDef2(response.data)
                console.log(def2)
            }).catch( error => console.log(error))
        }
        getWeather();
    }, [])

    const handleClick = () =>{
        setLoc1(false);
        setLoc2(false);
    }
    return ( 
        <Box className={classes.component}>
            {loc1 || loc2 ? (
            <>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Button onClick={() => handleClick()}>Go Back</Button>
                {def1 && def2 !== undefined ? (
                    <div>
                        {loc1 === true && <Details data={def1}/>}
                        {loc2 === true && <Details data={def2}/>}
                    </div>
                ) : null } 
            </Box>
            </>
            ) : (
            <>
            <Box className={classes.leftContainer}>
                {def1 && def2 !== undefined ? (
                    <Box className={classes.cards}>
                        <Card>
                            <CardActionArea onClick={() => setLoc1(true)}>
                                <CardActions>
                                <Typography>{def1.name}</Typography>
                                <Typography>{Math.floor(def1.main.temp - 273.15)}°C</Typography>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.lowercard}>
                            <CardActionArea onClick={() => setLoc2(true)}>
                                <CardActions>
                                    <Typography>{def2.name}</Typography>
                                    <Typography>{Math.floor(def2.main.temp - 273.15)}°C</Typography>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Box>
                    ) : null}
            </Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
            </>
            ) }
        </Box>
    )
}
 
export default Weather
