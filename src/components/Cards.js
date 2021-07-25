import { Box, Card, CardActionArea, CardActions, Link, makeStyles, Typography } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import Details from './Details';
import fetchWeather from '../service/Api'
import Information from './Information';


const useStyles = makeStyles({
    component: {
        marginTop:380,
        display:'column',
        justifyContent: 'space-around',
        paddingLeft:50,
        width: 150,
        height:150
    },
    lowercard: {
        marginTop:20
    }
})


function Cards() {
    const classes = useStyles();
    const [active, setActive] = useState(false)
    const [def1, setDef1] = useState({})
    const [def2, setDef2] = useState({})

    useEffect(() => {
        // Default location 1
        const getWeather = async() => {
            await fetchWeather('Paris', 'France').then(response => {
                setDef1(response.data)
                console.log(def1)
            })
            // Default location 2
            await fetchWeather('Berlin', 'Germany').then(response => {
                setDef2(response.data)
                console.log(def2)
            })
        }
        getWeather();
    }, [])
    
    return (
        <div className={classes.component}>
            {/* {active === false && 
            <>
            <Box>
                <Card>
                    <CardActionArea onClick={() => setActive(true)}>
                        <CardActions>
                        <Typography>{def1.name}</Typography>
                        </CardActions>
                    </CardActionArea>
                </Card>
                <Card className={classes.lowercard}>
                    <CardActionArea onClick={() => setActive(true)}>
                        <CardActions>
                            <Typography>{def2.name} </Typography>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Box>
            </>
            }
            {active === true && <Details data={def1}/>} */}
            {active ? (
                <Information />
            ) : (
                <>
                <Box>
                    <Card>
                        <CardActionArea onClick={() => setActive(true)}>
                            <CardActions>
                            <Typography>{def1.name}</Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.lowercard}>
                        <CardActionArea onClick={() => setActive(true)}>
                            <CardActions>
                                <Typography>{def2.name} </Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Box>
                </>
            )}
            
        </div>
    )
}

export default Cards
