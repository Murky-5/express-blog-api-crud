const show = ({params}, res, next) => LISTA.id.find((digger) => digger.id == params.id)

module.exports = show