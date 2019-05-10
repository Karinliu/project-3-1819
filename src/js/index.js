(function() {
    //const tags {
    //     id: 1,
    //     name: 'Physics',
    //     value: 'physics',
    //     total: 1,
    //     color: 'red',
    //     createdAt: 1557215750,
    //     editedAt: false,
    //     createdBy: 'T. Marchand'
    // }
    console.log("log log")

    const hamburger = document.querySelector('.navbar-toggler')

    console.log(hamburger)

    hamburger.addEventListener('click', function(){
        let aside = document.querySelector('aside');

        console.log(aside)

        aside.classList.toggle('hidden')
    })

    const tagForm = document.querySelector('.admin-tags');
    const tagname = document.getElementById('tagname');
    const tagcolor = document.getElementById('tagcolor');
    const socket = io();

    tagForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const tag = {
            name: tagname.value,
            value: tagname.value,
            total: 1,
            color: tagcolor.value,
            createdBy: 'Admin'
        }

        console.log(tag)
        socket.emit('newTag', tag)
    })

    socket.on('newTag', function(dataTag) {
        console.log(dataTag)

        const btnTag = document.querySelector('.tags-container');

        // const btnTag = document.querySelector('.tags-body');
        // let newBtn = document.createElement("button"); 
        // let newContent = document.createTextNode(dataTag.name); 

        // newBtn.classList.add('btn', 'btn-primary', 'new-btn')
        // newBtn.setAttribute("style", "background-color:" + dataTag.color+";");
        // newBtn.appendChild(newContent);

        // btnTag.appendChild(newBtn);

        btnTag.insertAdjacentHTML('beforeend', `<button style="background-color:${dataTag.color};" data-id="${dataTag.id}" class="btn btn-primary new-btn tag-btn my-1 mr-2">${dataTag.name}</button>`);
    });

    socket.on('errorMessage', function() {
        console.log('errorrr')
    })

    socket.on('allTags', function(data) {
        console.log('admin', data)
        const btnTag = document.querySelector('.tags-container');

        while (btnTag.firstChild) {
            btnTag.removeChild(btnTag.firstChild);
        }

        data.forEach(function(dataTag) {
            btnTag.insertAdjacentHTML('beforeend', `<button style="background-color:${dataTag.color};" data-id="${dataTag.id}" class="btn btn-primary new-btn tag-btn my-1 mr-2">${dataTag.name}</button>`);
        })
    })

    // Edit button name
    const btnTag = document.querySelector('.tags-container');
    const newBtn = document.querySelector('.new-btn');

    btnTag.addEventListener('click', function(e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        let text = document.getElementById("btn-text").value

        console.log("target", target)
        console.log("secvalue", text)
        console.log("id", target.dataset.id);
        if (target.nodeName === 'BUTTON') {
            target.innerHTML = text
            socket.emit('updateTag', {id: target.dataset.id, name: text})
            console.log("thirdvalue", text)
        }

    }, false);

    socket.on('updated', function(data){
        console.log(data.id)

        const button = document.querySelectorAll('button');

        button.forEach(function(btn) {
          console.log("regel 92 id ", btn.dataset.id);

        if(data.id === btn.dataset.id){
            console.log(btn.dataset.id)
            console.log("founded")
        }else{
            console.log("button is undefined")
        }
        });

        
    })
})();