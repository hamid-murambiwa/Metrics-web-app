import axios from 'axios';

const users = () => async (dispatch) => {
  const books = await axios.get('https://api.thedogapi.com/v1/breeds', {
    headers: {
      'x-api-key': 'c478d8f2-a659-4ef4-83b8-a0735ee45add',
      'Pagination-Count': 20,
    }
  });
    let arr = [];
    books.data.forEach((item) => arr.push({
      title: item.name,
      image: item.image.url,
      group: item.breed_group,
      id: item.id,
      origin: item.origin,
      life_span: item.life_span,
      bred_for: item.bred_for,
      height: `imperial: ${item.height.imperial} and metric: ${item.height.metric}`,
      weight: `imperial: ${item.weight.imperial} and metric: ${item.weight.metric}`,
      temperament: item.temperament,
    }));
    dispatch({
      type: "artStore/api/GET_RECORDS",
      arr,
    });
}

export default users;
