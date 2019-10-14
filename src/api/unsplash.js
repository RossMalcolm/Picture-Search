import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',

    headers:{
        Authorization: 
            'Client-ID 66c633ba130eed93696be0e197afc8fe1fac5ac2dc039aa37eb8bc9ec4f0aab4'
    }
});