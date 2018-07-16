import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(weatherData) {
    let average = weatherData.reduce((temp1, temp2) => temp1+temp2)/weatherData.length;
    return _.round(average);
}
export default ({weatherData, units}) => {
    
    return (
            <div>
                <Sparklines height={140} width={200} data={weatherData}>
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="avg"></SparklinesReferenceLine>
                </Sparklines>
                <div>{average(weatherData)} {units}</div>
            </div>
    );
}