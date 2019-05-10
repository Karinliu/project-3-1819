(function() {
    const socket = io();
    socket.on('allTagsClient', function(data) {
        console.log('admin', data)
        const btnTag = document.querySelector('.tags-container');

        while (btnTag.firstChild) {
            btnTag.removeChild(btnTag.firstChild);
        }


        data.forEach(function(dataTag) {
            btnTag.insertAdjacentHTML('beforeend', `<button style="background-color:${dataTag.color};" data-id="${dataTag.id}" class="btn btn-primary my-1 mr-2 tag-btn">${dataTag.name}</button>`);
        })

        const addedContainer = document.querySelector('.tags-addedcontainer');

        console.log(addedContainer)
        // Add tag to list by client
        btnTag.addEventListener('click', function(e) {
            e.preventDefault();
            e = e || window.event;
            let target = e.target || e.srcElement;
            console.log("target", target)
            console.log("id", target.dataset.id);

            if (target.nodeName === 'BUTTON') {
                // addedContainer.appendChild(target)
                // socket.emit('log tags', target.dataset.id)
                target.classList.add('remove');
                setTimeout(function() {
                    target.classList.remove('remove');
                    addedContainer.appendChild(target)
                }, 500);
            }
        }, false);


        // Remove tag from list by client
        addedContainer.addEventListener('click', function(e) {
            e.preventDefault();
            e = e || window.event;
            let targetback = e.target || e.srcElement;
            console.log("target", targetback)
            console.log("id", targetback.dataset.id);

            if (targetback.nodeName === 'BUTTON') {

                //         // socket.emit('log tags', target.dataset.id)

                targetback.classList.add('remove');
                // Delay page out until the animation finishes
                setTimeout(function() {
                    targetback.classList.remove('remove');
                    btnTag.appendChild(targetback)
                }, 500);
            }
        }, false);
    })


    socket.on('addedToLogs', function(data) {
        console.log('dataa is dataaa', data)
        // const btnTag = document.querySelector('.tags-container');

        // while (btnTag.firstChild) {
        //     btnTag.removeChild(btnTag.firstChild);
        // }


        // data.forEach(function(dataTag) {
        //     btnTag.insertAdjacentHTML('beforeend', `<button style="background-color:${dataTag.color};" data-id="${dataTag.id}" class="btn btn-primary">${dataTag.name}</button>`);
        // })


    })
})();