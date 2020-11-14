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