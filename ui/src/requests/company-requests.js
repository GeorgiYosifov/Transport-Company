const BASE_URL = 'http://localhost:8080/api/companies';

const getCompanies = async () => {
  return await fetch(`${BASE_URL}`).then((response) => response.json());
};

const getCompany = async (id) => {
  return await fetch(`${BASE_URL}/${id}`).then((response) => response.json());
};

const createCompany = async (data) => {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.text();
};

const deleteCompany = async (id) => {
  return await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const updateCompany = async (data) => {
  const response = await fetch(`${BASE_URL}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.text();
};

export {
  getCompanies,
  getCompany,
  createCompany,
  deleteCompany,
  updateCompany,
};
