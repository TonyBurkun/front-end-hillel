const axios = require('axios').default;
const baseURL = 'http://localhost:3000';

axios.get(`${baseURL}/users`)
    .then(function(data){
        let userDataArr = data.data;
        let app =  document.getElementById('app');

        userDataArr.forEach(item => {
            let ul = document.createElement('ul');
            ul.innerHTML = `
                <li>ID: ${item.userID}</li>
                <li>Name: ${item.name}</li>
                <li>Surname: ${item.surname}</li>
           `;
            app.appendChild(ul);

        });


});