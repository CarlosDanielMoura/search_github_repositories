// https://api.github.com/users/{username}/repos

const getSearchApi = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    getSearReposApi(data.repos_url);
  } catch (error) {
    console.log(error);
  }
};

const getSearReposApi = async (url_repos) => {
  try {
    const response = await fetch(url_repos);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getSearchApi("maykbrito");
