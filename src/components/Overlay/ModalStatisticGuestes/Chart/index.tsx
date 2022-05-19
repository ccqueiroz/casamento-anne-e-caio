import React, { useMemo, useCallback } from 'react';
import { Box } from '@chakra-ui/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { GuestsModel } from '../../../../data/model/Guests';
import { DataChart, RenderCustomLabel } from '../../../../data/model/Chart';

interface ChartGuestsProps {
    guestsList: Array<GuestsModel> | undefined
}

const ChartGuests: React.FC<ChartGuestsProps> = ({guestsList}) => {

    const calcPercent = useCallback((inputValue: number, totalValue: number) => {
        return Math.round((inputValue / totalValue) * 100)
    }, []);

    const guestsStatistic = useMemo(() => {
        const totalGuests = guestsList?.length;
        const guestsConfirmedWillWedding = guestsList?.filter((guest) => guest?.presenceAtTheEvent === 'Y')?.length;
        const guestsConfirmedWillNotWedding = guestsList?.filter((guest) => guest?.presenceAtTheEvent === 'N')?.length;
        const guestsNotConfim = guestsList?.filter((guest) => !guest?.presenceAtTheEvent)?.length;
        const dataChart: Array<DataChart> = [
            {
                type: 'Convidados que irão ao casamento',
                value: guestsConfirmedWillWedding,
                percent: calcPercent(Number(guestsConfirmedWillWedding), Number(totalGuests)),
                color: '#0c6a6b'
            },
            {
                type: 'Convidados que não irão ao casamento',
                value: guestsConfirmedWillNotWedding,
                percent: calcPercent(Number(guestsConfirmedWillNotWedding), Number(totalGuests)),
                color: '#e53e3e'
            },
            {
                type: 'Convidados a confirmar',
                value: guestsNotConfim,
                percent: calcPercent(Number(guestsNotConfim), Number(totalGuests)),
                color: '#f6ad55'
            }
        ];

        return dataChart;
    }, [guestsList, calcPercent]);

    const renderCustomLabel = useCallback(({ cx, cy, midAngle, innerRadius, outerRadius, value }: RenderCustomLabel) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {value}
            </text>
        );
    }, []);

    return (    
        <Box width="100%" height={{
            base: '250px',
            md: '350px',
            lg: '350px',
        }} minHeight="150px" id="content-chart">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        cx="50%"
                        cy="50%"
                        data={guestsStatistic}
                        dataKey="value"
                        label={renderCustomLabel}
                        labelLine={false}
                    >
                        {
                            guestsStatistic.map((item: DataChart) => {
                                return(
                                    <Cell key={item.type} fill={item.color}/>
                                );
                            })
                        }
                    </Pie>
                    <Legend
                        verticalAlign="bottom"
                        height={80}
                        payload={guestsStatistic?.map(item => ({ value: item?.type, color: item?.color }))}
                        align="center"
                        layout="horizontal"
                    />
                </PieChart>
            </ResponsiveContainer>
        </Box>
    );
}

export { ChartGuests }