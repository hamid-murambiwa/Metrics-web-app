import breeds from './fetch';

const fetchingData = () => breeds().then((data) => data);

export default fetchingData;
