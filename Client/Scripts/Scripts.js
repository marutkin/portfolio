document.addEventListener('DOMContentLoaded', function () {
    // Elements
    let skillsElement = document.getElementById("skills");
    hide(skillsElement);
    // Cache
    let lastScrollTop = 0;
    let scrollCache = 0;
    document.addEventListener("scroll", function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            /* scroll down */
            scrollCache = (scrollCache + 15) > 550 ? (scrollCache + 15) : 550;
            fadeIn(skillsElement, 2000);
        } else {
            /* scroll up */
            scrollCache = (scrollCache - 25) > 0 ? (scrollCache - 25) : 0;
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
});

function fadeIn(element, time) {
    let last = +new Date();
    let tick = function() {
        element.style.opacity = String(Number(element.style.opacity) + (new Date() - last) / time);
        last = +new Date();

        if (Number(element.style.opacity) < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}
function hide(element){
    element.style.opacity = '0';
}