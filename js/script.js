window.addEventListener('DOMContentLoaded', () => {
    // outdated method
    /*function req() {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/people');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.addEventListener('load', () => {
           if (request.status === 200) {
               let data = JSON.parse(request.response);
               console.log(data);

               data.forEach(item => {
                   let card = document.createElement('div');

                   card.classList.add('card');

                   let icon;
                   if (item.sex === 'male') {
                       icon = "icons/mars.png"
                   } else {
                       icon = "icons/female.png"
                   }

                   card.innerHTML = `
                        <img src="${item.photo}" alt="">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src=${icon} alt="male">
                        </div>
                   `;
                   document.querySelector('.app').append(card);
               })
           } else {
               console.error('Что-то пошло не так');
           }
        });

        this.remove(); // remove button
    }
    document.querySelector('button').addEventListener('click', req, {'once': true});*/


    // modern method
    /*function req() {
        getResource('http://localhost:3000/people')
            .then(data => createCards(data))
            .catch(err => console.error(err));

        this.remove(); // remove button
    }
    document.querySelector('button').addEventListener('click', req, {'once': true});

    async function getResource(url) {
        const res = await fetch(`${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('card');

            let icon;
            if (item.sex === 'male') {
                icon = "icons/mars.png"
            } else {
                icon = "icons/female.png"
            }

            card.innerHTML = `
                        <img src="${item.photo}" alt="">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src=${icon} alt="male">
                        </div>
                   `;
            document.querySelector('.app').append(card);
        })
    }*/

    // axios
   /* function req() {
        getResource('http://localhost:3000/people')
            .then(data => createCards(data.data))
            .catch(err => console.error(err));

        this.remove(); // remove button
    }
    document.querySelector('button').addEventListener('click', req, {'once': true});

    async function getResource(url) {
        const res = await axios(`${url}`);

        if (res.status !== 200) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return res;
    }

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('card');

            let icon;
            if (item.sex === 'male') {
                icon = "icons/mars.png"
            } else {
                icon = "icons/female.png"
            }

            card.innerHTML = `
                        <img src="${item.photo}" alt="">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src=${icon} alt="male">
                        </div>
                   `;
            document.querySelector('.app').append(card);
        })
    }*/

    //POST отправка FormData, XMLHttpRequest
    /*const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);
        formData.append("id", Math.random());

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        const request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/people');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(json);
    }
    form.addEventListener('submit', (e) => req(e), {'once': true});*/

    //POST отправка FormData, fetch
    /*const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);
        formData.append("id", Math.random());

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        getResource('http://localhost:3000/people', obj)
            .catch(err => console.error(err));
    }

    form.addEventListener('submit', (e) => req(e), {'once': true});

    async function getResource(url, data) {
        const res = await fetch(`${url}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }*/

    //POST AXIOS
    /*const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);
        formData.append("id", Math.random());

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        axios.post('http://localhost:3000/people', obj)
    }
    form.addEventListener('submit', (e) => req(e), {'once': true});
    */

    //POST not JSON XMLHttpRequest

    /*const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);

        const request = new XMLHttpRequest();
        request.open('POST', './api.php');
        request.send(formData);
        request.addEventListener('load', function () {
            console.log(request.response);
        })
    }

    form.addEventListener('submit', (e) => req(e), {'once': true});*/

    //POST not JSON Fetch
   /* const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);

        getResource('./api.php', formData)
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    async function getResource(url, data) {
        const res = await fetch(`${url}`, {
            method: "POST",
            body: data
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.text();
    }

    form.addEventListener('submit', (e) => req(e), {'once': true});*/

    //POST not JSON axios
    const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);

        axios({
            method: 'post',
            url: './api.php',
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(data => console.log(data.data));
    }

    async function getResource(url, data) {
        const res = await fetch(`${url}`, {
            method: "POST",
            body: data
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.text();
    }

    form.addEventListener('submit', (e) => req(e), {'once': true});
})