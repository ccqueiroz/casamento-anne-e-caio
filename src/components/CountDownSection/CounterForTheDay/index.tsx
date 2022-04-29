import { Box } from '@chakra-ui/react';
import React, {memo} from 'react';
import { CounterDate } from '..';
import CounterForTheDayUI from './CounterForTheDayUI';

const CounterForTheDay: React.FC<CounterDate> = ({
    day, hour, minutes, seconds
}) => {
    
    return (
        <Box
            width="100%"
            maxWidth="1200px"
            height="auto"
            margin="0 auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CounterForTheDayUI name="dias" value={day}/>
            <CounterForTheDayUI name="horas" value={hour}/>
            <CounterForTheDayUI name="minutos" value={minutes}/>
            <CounterForTheDayUI name="segundos" value={seconds}/>
        </Box>
    );
}

export default memo(CounterForTheDay);