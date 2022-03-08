const updateView = (repoData) => {
    document.querySelector('#repo-name').innerText = repoData.full_name;
    document.querySelector('#repo-image').src = repoData.organization.avatar_url;
    document.querySelector('#repo-description').innerText = repoData.description;
    document.querySelector('#repo-link').setAttribute('href', repoData.html_url);
    document.querySelector('#repo-language').innerText = repoData.language;
    document.querySelector('#repo-stargazers').innerText = repoData.stargazers_count;
    document.querySelector('#repo-forks').innerText = repoData.forks_count;
}

module.exports = updateView;
