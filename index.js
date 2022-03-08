const fetchGithubRepo = require('./fetchGithubRepo');
const updateView = require('./updateView');

button = document.querySelector('#add-repo-btn')
input = document.querySelector('#repo-name-input');

button.addEventListener('click', () => {
  inputValue = input.value;
  fetchGithubRepo(inputValue, (repoData) => {
    updateView(repoData);
  });
});
