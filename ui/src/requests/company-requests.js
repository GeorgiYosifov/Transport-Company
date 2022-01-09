const getCompanies = () => {
  return Promise.resolve([
    { id: 1, name: 'Union Ivkoni', createdOn: '2022-01-01' },
    { id: 2, name: 'Econt', createdOn: '2022-01-01' },
    { id: 3, name: 'Discordia', createdOn: '2022-01-01' },
  ]);
};

const getCompany = (id) => {
  return Promise.resolve({
    id,
    name: 'Union Ivkoni',
    customers: [{ id: 1, name: 'Ivan' }],
  });
};

export { getCompanies, getCompany };
