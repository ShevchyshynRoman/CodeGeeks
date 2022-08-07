import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/';

export const getImgFromServer = async () => {
  const response = await axios.get(`${baseUrl}randomimage`);

  return response.data;
};
