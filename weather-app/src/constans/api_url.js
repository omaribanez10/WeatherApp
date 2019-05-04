
const location = "Bogota,CO";
const api_key = "2f1b4c014ee260c68fd5e732af1cadbb";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
