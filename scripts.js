document.addEventListener("DOMContentLoaded", function() {
    const isMobile = /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    if (isMobile && !isLandscape) {
        document.body.classList.add("mobile");
    } else {
        document.body.classList.add("desktop");
    }
});

window.addEventListener("orientationchange", () => {
    document.body.classList.remove("mobile", "desktop");
    const isMobile = /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    if (isMobile && !isLandscape) {
        document.body.classList.add("mobile");
    } else {
        document.body.classList.add("desktop");
    }
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menuToggle").checked = false;
    });
});
