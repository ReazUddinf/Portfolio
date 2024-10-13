var typed = new Typed(".text", {
    strings: ["Student","Business Analyst","Creative Writer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});


const lastModified = document.lastModified;
document.getElementById("lastmod").innerHTML = lastModified;
document.getElementById("pagelocation").innerHTML = location.pathname;
