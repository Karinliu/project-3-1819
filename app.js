const express = require('express');
const app = express()
    .set('views', 'view')
    .use(express.static('./src/css'))
    .use(express.static('./src/js'))
const http = require('http').Server(app);
const io = require('socket.io')(http);
const tags = [];
const port = 8080;


io.on('connection', function(socket) {
    const allTagsInArray = tags.map(function(tag) {
        return {
            name: tag.name,
            color: tag.color
        }
    })
    io.emit('allTags', allTagsInArray);
    io.emit('allTagsClient', allTagsInArray);

    socket.on('newTag', function(data) {
        const foundTag = tags.find(function(tag) {
            console.log("username is in use")
            return tag.name.toLowerCase() === data.name.toLowerCase();
        });

        if (!foundTag) {
            tags.push(data)
            console.log("not in use")
            io.emit('newTag', {
                color: data.color,
                name: data.name
            })
        } else {
            io.emit('errorMessage')
        }
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


http.listen(8080, () => console.log(`Example app listening on port ${port}!`))