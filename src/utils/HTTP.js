const BASE_URL = "https://botw-compendium.herokuapp.com/api/v2/category/";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = res.json();
  return data;
};
