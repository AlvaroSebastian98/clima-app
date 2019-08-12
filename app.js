const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima.js')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv

// lugar.getLugarLatLng(argv.direccion)
//     .then(res => {
//         console.log(res)

//         clima.getClima(res.lat, res.lng)
//             .then(console.log)
//             .catch(console.log)

//     })

const getInfo = async direccion => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng)

        return `El clima de ${direccion} es de ${temp}`
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)