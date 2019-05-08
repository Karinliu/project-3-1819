(function() {
    const socket = io();
    socket.on('allTagsClient', function(data) {
        console.log('admin', data)
        const btnTag = document.querySelector('.tags-body');

        data.forEach(function(dataTag) {
            btnTag.insertAdjacentHTML('beforeend', `<button style="background-color:${dataTag.color};" class="btn btn-primary">${dataTag.name}</button>`);
        })
    })
})();