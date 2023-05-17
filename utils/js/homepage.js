const getLocalStorage = () => {
  const response = localStorage.getItem("userData");
  const reponse_repo = localStorage.getItem("userRepoData");
  const data = JSON.parse(response);
  createHtmlAvatar(data);
  createHtmlCards(reponse_repo);
};

const createHtmlAvatar = (data) => {
  console.log(data);
  const asideEl = document.querySelector(".avatar");

  let blog = "Sem blog";
  if (data.blog) {
    blog = data.blog;
  }
  const html = `
  <div class="image">
            <img src="${data.avatar_url}" alt="" />
          </div>
        </div>
        <div class="conteudo_pessoal">
          <h1>Olá, ${data.name}</h1>
          <h4 class="bio">
           ${data.bio}
          </h4>
          <div class="icons_avatar">
            <span>
              <a href="${data.html_url}" target="blank_">
                <img src="assets/img/icons8-github-24.png" alt="" />
                <h4>${data.name}</h4>
              </a>
            </span>
            <span>
              <img src="assets/img/icons8-email-24.png" alt="" />
              <h4>${blog}</h4>
            </span>
          </div>

          <div class="follows">
            <ul class="list">
              <li><strong>${data.followers}</strong> Seguidores</li>
              <li><strong>${data.following}</strong> Seguindo</li>
            </ul>
          </div>
        </div>
        <a href="#" class="off">
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="32.000000pt"
            height="32.000000pt"
            viewBox="0 0 32.000000 32.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M140 250 c0 -53 2 -60 20 -60 18 0 20 7 20 60 0 53 -2 60 -20 60 -18
              0 -20 -7 -20 -60z"
                        />
                        <path
                          d="M82 254 c-52 -36 -68 -123 -33 -180 13 -21 36 -38 65 -49 43 -17 48
              -17 91 -1 75 29 107 114 70 186 -14 27 -51 60 -67 60 -16 0 -7 -33 17 -62 44
              -53 28 -122 -35 -148 -24 -10 -36 -10 -60 0 -63 26 -79 95 -35 148 24 29 33
              62 17 62 -4 0 -18 -7 -30 -16z"
              />
            </g>
      </svg>
        </a>
  `;

  asideEl.insertAdjacentHTML("beforeend", html);
};

const createHtmlCards = (data_repos) => {
  const mainEl = document.querySelector(".wrapper");
  var data = JSON.parse(data_repos);
  let nomeLanguage = "";
  let cont = 1;

  data.forEach((element) => {
    if (element.language == null) {
      nomeLanguage = " --- ";
    } else {
      nomeLanguage = element.language;
    }
    html = `
    <div class="cards">
            <div class="card">
              <div class="title">
                <h5 class="user">${element.owner.login}</h5>
                <h5 class="language">${nomeLanguage}</h5>
              </div>
              <div class="name_repo">
                <p>${element.name}</p>
              </div>
              <div class="icons">
                <div class="count">${cont}</div>
                <div class="copy">
                  <img src="assets/img/icons8-copy-24.png" class="copy" alt="Icone copy" />
                </div>
                <div class="github">
                  <a href="${element.svn_url}" class="meulink" target = "blank_">
                    <img
                      src="assets/img/icons8-github-24.png"
                      alt="Icon gitHub"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
    `;
    cont++;
    mainEl.insertAdjacentHTML("beforeend", html);
  });
};

getLocalStorage();
const sairBtnEl = document.querySelector(".off");

const logout = () => {
  sairBtnEl.addEventListener("click", function () {
    Swal.fire({
      title: "Deseja realmente sair ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "../../index.html";
        localStorage.clear();
      }
    });
  });
};

// const copyBtn = document.querySelector(".copy");

// const copiarText = () => {
//   copyBtn.addEventListener("click", function () {
//     var linkElement = document.querySelector(".meulink");
//     var href = linkElement.href;
//     console.log(href);

//     // navigator.clipboard
//     //   .writeText(texto)
//     //   .then(function () {
//     //     console.log("Texto copiado para a área de transferência!");
//     //   })
//     //   .catch(function (err) {
//     //     console.error("Falha ao copiar texto: ", err);
//     //   });
//   });
// };

logout();
// copiarText();
