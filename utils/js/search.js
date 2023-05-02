// https://api.github.com/users/{username}/repos

const btnEl = document.querySelector("#btn-user");

btnEl.addEventListener("click", function (e) {
  e.preventDefault();

  const user = document.querySelector("#users").value;

  getSearchApi(user);
});

const getSearchApi = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    setLocalStoreAvatar(data);
    getSearReposApi(data.repos_url);
  } catch (error) {
    console.log(error);
  }
};

const getSearReposApi = async (url_repos) => {
  try {
    const response = await fetch(url_repos);
    const data = await response.json();
    setLocalStoreRepos(data);
  } catch (error) {
    console.log(error);
  }
};

const setLocalStoreAvatar = (data) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

const setLocalStoreRepos = (data) => {
  localStorage.setItem("userRepoData", JSON.stringify(data));
  window.location.href = "../../homepage.html";
};
