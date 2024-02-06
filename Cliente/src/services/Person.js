import axios from 'axios';

const API_URL = 'http://localhost:8081/api/personas/page';

const obtenerPersonasPaginadas = async (page, size, filter) => {
  try {
    const response = await axios.get(API_URL, {
      params: { filter, page, size, sort:'name' }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
obtenerPersonasPaginadas
};