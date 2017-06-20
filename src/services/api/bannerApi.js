import axios from 'axios';

let apiFetchData = 'http://localhost:5000/api/Banners/findOne';

export default {
    fetch: () => (
        axios({
            method: 'get',
            url: apiFetchData
        })
    ),
};