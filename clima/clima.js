const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=3424207355431bb032e58f440a309283`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}