const getLocalStorage = () => {
  const response = localStorage.getItem("userData");
  const data = JSON.parse(response);
  createHtmlAvatar(data);
};

const createHtmlAvatar = (data) => {
  const asideEl = document.querySelector(".aside_user");

  const html = `
  <div class="avatar">
    <img src="${data.avatar_url}" />
  </div>
  <div class="conteudo_pessoal">
    <h1>Olá, ${data.name}</h1>
    <div class="icons"></div>
  </div>`;

  asideEl.insertAdjacentHTML("beforeend", html);
};

getLocalStorage();
