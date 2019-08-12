const axios = require('axios')

const getClima = async(lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ecf364f3566e9facf91234f942f6b4ef&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}