document.addEventListener("DOMContentLoaded", function () {
    const exploreLink = document.querySelector('.explore-trigger');
    const exploreBox = document.getElementById('exploreBox');

    exploreLink.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.toggle('active-explore');
    });
});
