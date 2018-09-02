const uuid = require('uuid')


exports.getAdminRooms = (request, response) => {
    response.render('rooms', {
        title: 'Admin Rooms',
        rooms: rooms
    })
}

    , exports.getAddAdminRoom = (request, response) => response.render('room-add')


    , exports.postAddAdminRooms = (request, response) => {

        const room = {
            name: request.body.name,
            id: uuid.v4()
        }

        rooms.push(room)

        response.redirect('/admin/rooms')
    }


    , exports.getEditAdminRooms = (request, response) => {

        const roomId = request.params.id

        const room = rooms.find(r => r.id === roomId)
        if (!room) {
            response.sendStatus(404)
            return
        }

        response.render('room-edit', { room })
    }

    , exports.postEditAdminRooms = (request, response) => {

        const roomId = request.params.id

        const room = rooms.find(r => r.id === roomId)

        if (!room) {
            response.sendStatus(404)
            return
        }

        room.name = request.body.name

        response.redirect('/admin/rooms')
    }


    , exports.getDeleteAdminRooms = (request, response) => {

        const roomId = request.params.id

        rooms = rooms.filter(r => r.id !== roomId)

        response.redirect('/admin/rooms')
    }