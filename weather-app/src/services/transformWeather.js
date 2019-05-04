import convert from 'convert-units';
import {
    SUN, CLOUDY,
} from './../constans/weathers'




const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weather_data => {
    return SUN;
}
/** Función para obtener los datos del JSON que consultamos en el server */
const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}
export default transformWeather;