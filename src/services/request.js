import api from './index';


const getContacts = async () => {
    const response = await api.get('/getContact')
        .then(({ data }) => data)
        .catch(err => err);
    return response;
}


export { getContacts }

