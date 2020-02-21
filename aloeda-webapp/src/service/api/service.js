import axios from 'axios';

export const getCharacters = () => {
    return axios
        .get('http://localhost:80/app-service-1/api/v1/welcome/characters')
        // .then(res => characters = res.data)
        // .catch(err =>
        //     console.log(err)
        // );
};