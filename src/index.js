const axios = require('axios').default;
const baseURL = 'http://localhost:3000';

axios.get(`${baseURL}/users`)
    .then(({data}) =>{
        let app =  document.getElementById('app');

        data.forEach(item => {
            let ul = document.createElement('ul');
            ul.innerHTML = `
                <li>ID: ${item.userID}</li>
                <li>Name: ${item.name}</li>
                <li>Surname: ${item.surname}</li>
           `;
            app.appendChild(ul);

        });


});