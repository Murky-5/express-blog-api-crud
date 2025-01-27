const list = require('../posts/books')

const found = (params) => list.find((digger) => digger.id == params.id)

const scroller = (id) => id = list[list.length - 1].id + 1


const show = ({params}, res, next) => {
    console.log(list.findIndex((digger) => digger.id == params.id))
    res.json(found(params))
}

const create = ({body}, res, next) => {
    list.push({
        id: scroller,
        title: body.title || "empty",
        picture: body.picture || "empty",
        tags: body.tags || "empty"
    })
    
    res.json(list)
}

const update = ({body, params}, res, next) => {
    found.title = body.title
    found.coverPicture = body.coverPicture
    found.tags = body.tags

    res.json(found(params))
}

const modify = ({body, params}, res, next) => {
    found.title = body.title || found.title
    found.coverPicture = body.coverPicture || found.coverPicture
    found.tags = body.tags || found.tags

    res.json(found(params))
}

const destroy = ({params}, req, res, next) => {
    console.log("ciao")
    list.splice( list.findIndex((digger) => digger.id == params.id) , 1 )
    res.sendStatus(204)
}

module.exports = {show, create, update, modify, destroy}