const BASE_URL = 'http://localhost:8080/api/companies';

const getCompanies = async () => {
  const companies = await fetch(`${BASE_URL}`).then((response) =>
    response.json(),
  );

  return companies.map((company) => {
    return {
      id: company.id,
      name: 'Econt',
      createdOn: '2021-01-01',
    };
  });
};

const getCompany = async (id) => {
  return await fetch(`${BASE_URL}/${id}`).then((response) => response.json());
};

const createCompany = async (data) => {
  const response = await fetch(`${BASE_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export { getCompanies, getCompany, createCompany };
