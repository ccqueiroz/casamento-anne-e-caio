import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { convertMonthsToDays } from '../../data/utils/convertMonthToDays';
import CounterForTheDay from './CounterForTheDay';
import { HeaderCountDown } from './HeaderCountDown';
import { TextCounterSection } from './TextCounterSection';

export type CounterDate = {
    day: number | null;
    hour: number | null;
    minutes: number | null;
    seconds: number | null;
}

const CountDown: React.FC = () => {
    const [counterDate, setCounterDate] = useState<CounterDate>({
        day: null,
        hour: null,
        minutes: null,
        seconds: null
    });
    const weddingDate = new Date(2022, 4, 29, 15, 30, 0);
    const refTime = useRef({});

    useEffect(() => {
        if (refTime && refTime.current) {
            clearInterval(Number(refTime.current));
        }
        refTime.current = setInterval(() => {
            const timeLeft = weddingDate.getTime() - new Date().getTime()
            const newDate = new Date(timeLeft)
            setCounterDate({
                day: convertMonthsToDays({timeLeft}),
                hour: newDate.getHours(),
                minutes: newDate.getMinutes(),
                seconds: newDate.getSeconds(),
            })
        }, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box
            width="100vw"
            height="auto"
            padding="5%"
        >
            <HeaderCountDown />
            <CounterForTheDay
                day={counterDate.day}
                hour={counterDate.hour}
                minutes={counterDate.minutes}
                seconds={counterDate.seconds}
            />
            <TextCounterSection /> 
        </Box>
    );
}

export { CountDown } 