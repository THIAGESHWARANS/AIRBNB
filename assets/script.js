document.addEventListener("DOMContentLoaded", function () {
    const exploreLink = document.querySelector('.explore-trigger');
    const exploreBox = document.getElementById('exploreBox');

    exploreLink.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.toggle('active-explore');
    });
});
var icons = document.querySelectorAll(".icon-container")
var currentTranslate = 0;
var maxTranslate = 0;
var FilterLeftArrowButton = document.querySelector('.left-button-filter')
var FilterRightArrowButton = document.querySelector('.right-button-filter')

function calculateMaxTranslate() {
    var rightmostPosition = 0;

    icons.forEach(function (icon) {
        var iconRect = icon.getBoundingClientRect();
        var iconRight = iconRect.right;
        if (iconRight > rightmostPosition) {
            rightmostPosition = iconRight;
        }
    });

    var containerRect = icons[0].parentElement.getBoundingClientRect();
    maxTranslate = containerRect.right - rightmostPosition;
}
function scrollToRight() {
    currentTranslate -= 500;

    // Limit the translation to the maximum value
    currentTranslate = Math.max(currentTranslate, maxTranslate);

    icons.forEach(function (icon) {
        icon.style.transitionTimingFunction = "ease-in-out"
        icon.style.transform = "translate(" + currentTranslate + "px)"
    })
    FilterLeftArrowButton.style.display = 'block';

    if (currentTranslate == maxTranslate) {
        FilterRightArrowButton.style.display = 'none';
    }

}
