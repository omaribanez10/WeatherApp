import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../../src/services/transformWeather';
import {api_weather} from './../../constans/api_url';
import './styles.css';
import {
    SUN, CLOUDY, 
} from './../../constans/weathers'


const data = {
    temperature: 25,
    weatherState: SUN,
    humidity: 80,
    wind: '18 m/s',
}



// El componente de tipo clase la usamos cuando necesitamos cosas más complejas 
class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Bogotá",
            data: data,

        }
    }

  
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            /** Sacar los datos del JSON */
            return resolve.json()
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data:newWeather,
            })
           
        });
        /** Aquí no puedo utilizar el this.State
         porque ya lo estoy utilizando, debo utilizar el setState */

      /** this.setState({
            city: "Bogotá",
            data: data2,
        });
        */  

    }
    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }


}
export default WeatherLocation;