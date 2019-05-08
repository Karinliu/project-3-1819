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

        const tagForm = document.querySelector('.admin-tags');
        const tagname = document.getElementById('tagname');
        const tagcolor = document.getElementById('tagcolor');
        const socket = io();

        tagForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const tag = {
                id: 1,
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

            const btnTag = document.querySelector('.tags-body');

            btnTag.insertAdjacentHTML('beforeend', `<button style="background-color:${dataTag.color};" class="btn btn-primary new-btn">${dataTag.name}</button>`);
        });

        socket.on('errorMessage', function() {
            console.log('errorrr')
        })

        socket.on('allTags', function(data) {
        	console.log('admin', data)
            const btnTag = document.querySelector('.tags-body');

            data.forEach(function(dataTag) {
                btnTag.insertAdjacentHTML('beforeend', `<button style="background-color:${dataTag.color};" class="btn btn-primary new-btn">${dataTag.name}</button>`);
        	})
    	})

    	// Edit button name
    	const btnTag = document.querySelector('.tags-body > .new-btn');
		const newBtn = document.querySelector('.new-btn');
		// .addEventListener("click", myfunction);


		function myfunction() {
    		newBtn.innerHTML = document.getElementById("btn_text").value;
		}

		console.log(btnTag);
		console.log(newBtn);
})();