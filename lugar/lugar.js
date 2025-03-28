const axios = require('axios')

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir)
        // console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        // timeout: 1000,
        headers: { 'x-rapidapi-key': '4706a1646fmsh07b81ce8ec1310ep1d2fb2jsn88bb2f5eb8e8' }
    })

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0]

    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}