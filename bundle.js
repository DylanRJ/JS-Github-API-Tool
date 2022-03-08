(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "fetchGithubRepo.js"(exports, module) {
      var fetchGithubRepo2 = (repoName, onDataFetched) => {
        fetch("https://api.github.com/repos/" + repoName).then((response) => response.json()).then((jsonData) => {
          onDataFetched(jsonData);
        });
      };
      module.exports = fetchGithubRepo2;
    }
  });

  // updateView.js
  var require_updateView = __commonJS({
    "updateView.js"(exports, module) {
      var updateView2 = (repoData) => {
        document.querySelector("#repo-name").innerText = repoData.full_name;
        document.querySelector("#repo-image").src = repoData.organization.avatar_url;
        document.querySelector("#repo-description").innerText = repoData.description;
        document.querySelector("#repo-link").setAttribute("href", repoData.html_url);
        document.querySelector("#repo-language").innerText = repoData.language;
        document.querySelector("#repo-stargazers").innerText = repoData.stargazers_count;
        document.querySelector("#repo-forks").innerText = repoData.forks_count;
      };
      module.exports = updateView2;
    }
  });

  // index.js
  var fetchGithubRepo = require_fetchGithubRepo();
  var updateView = require_updateView();
  button = document.querySelector("#add-repo-btn");
  input = document.querySelector("#repo-name-input");
  button.addEventListener("click", () => {
    inputValue = input.value;
    fetchGithubRepo(inputValue, (repoData) => {
      updateView(repoData);
    });
  });
})();
