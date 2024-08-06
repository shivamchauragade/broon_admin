import axios from 'axios';


const API_BASE_URL = 'https://stagingapi.brooon.com/v1';


export async function getUsers(
  page: number,
  pageLimit: number,
  country: string
) {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/user/get?page=${page}&limit=${pageLimit}` +
        (country ? `&search=${country}` : '')
    );
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function updateAssociationVerification(id, isVerified) {
  try {
    const res = await axios.put(
      `${API_BASE_URL}/association/verify/${id}`,
      { verified: isVerified }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getAssociation(
  page: number,
  pageLimit: number,
  country: string
) {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/association/get?page=${page}&limit=${pageLimit}` +
        (country ? `&search=${country}` : '')
    );
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function addAssociation(data: any) {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('code', data.code);
  formData.append('city', data.city);
  formData.append('state', data.state);

  if (data.image) {
    formData.append('picture', data.image);
  }

  try {
    const res = await axios.post(`${API_BASE_URL}/association/add`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Failed to add association:', error);
    throw error;
  }
}

export async function deleteAssociation(id: number) {
  try {
    const res = await axios.delete(`${API_BASE_URL}/association/delete/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Failed to delete association:', error);
    throw error;
  }
}
export async function updateAssociation(id, data: any) {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('code', data.code);
  formData.append('city', data.city);
  formData.append('state', data.state);
  
  if (data.image) {
    formData.append('picture', data.image);
  }

  try {
    const res = await axios.put(`${API_BASE_URL}/association/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Failed to update association:', error);
    throw error;
  }
}


export async function getAssociationByID(id) {
  try {
    const res = await axios.get(`${API_BASE_URL}/association/get/${id}`);
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.error('Failed to get association by ID:', error);
    throw error;
  }
}