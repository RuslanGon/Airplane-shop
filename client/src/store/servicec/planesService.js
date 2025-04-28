import axios from 'axios';

const getPlanes = async () => {
    const planes = await axios.get('http://localhost:3001/api/planes');
    return planes.data;
};

const planesService = {
    getPlanes,
};

export default planesService;