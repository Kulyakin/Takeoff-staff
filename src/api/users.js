import axios from 'axios';

export async function getUsers() {
  try {
    const { data } = await axios.get('http://localhost:3001/users');
    console.log(data);
    return data;
  } catch {
    console.log('error');
  }
}

export const getUser = (id) => {
  axios
    .get(`http://localhost:3001/users/${id}`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((e) => console.log(e));
};
