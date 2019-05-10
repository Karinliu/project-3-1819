const express = require('express');
const uuidv4 = require('uuidv4');
const app = express()
    .set('views', 'view')
    .use(express.static('./src/css'))
    .use(express.static('./src/js'))
    .use(express.static('./src/images'))
const http = require('http').Server(app);
const io = require('socket.io')(http);
const tags = [];
const port = 8080;


io.on('connection', function(socket) {
    // console.log(uuidv4())
    const allTagsInArray = tags.map(function(tag) {
        return {
            id: tag.id,
            name: tag.name,
            color: tag.color
        }
    })
    io.emit('allTags', allTagsInArray);
    io.emit('allTagsClient', allTagsInArray);

    // socket.on('log tags', function(logTag){
    //     console.log(logTag)

    //     const addedTagLog = tags
    //     .filter(function(tag){
    //         return logTag === tag.id;
    //     })
    //     .map(function(tag) {
    //         return {
    //             id: tag.id,
    //             name: tag.name,
    //             color: tag.color
    //         }
    //     })

    //     console.log("added", addedTagLog)
    //     io.emit('addedToLogs', addedTagLog);

    // })

    socket.on('newTag', function(data) {
        const foundTag = tags.find(function(tag) {
            console.log("username is in use")
            return tag.name.toLowerCase() === data.name.toLowerCase();
        });

        if (!foundTag) {
            data.id = uuidv4()
            tags.push(data)
            console.log("not in use")
            io.emit('newTag', {
                id: data.id,
                color: data.color,
                name: data.name
            })
        } else {
            io.emit('errorMessage')
        }
    })

    socket.on('updateTag', function(updatedTag){
        console.log("alldata", updatedTag)

        const updateTagLog = tags
        .filter(function(tag){
            return updatedTag.id === tag.id;
        })
        .map(function(tag) {
            return {
                id: tag.id,
                name: updatedTag.name,
                color: tag.color
            }
        })

        console.log(updateTagLog)
        io.emit('updated', updateTagLog)
    })
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/view/index.html');
});

app.get('/admin', function(req, res) {
    res.sendFile(__dirname + '/view/admin.html');
});


app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/view/test.html');
});


// http.listen(8080, () => console.log(`Example app listening on port ${port}!`))
http.listen(process.env.PORT || 8080)