let downloadLink = document.querySelector("#downloadLink");
let download = document.querySelector("#download");

let featureLink = document.querySelector("#featuresLink");
let feature = document.querySelector("#features");

let privacyLink = document.querySelector("#privacyLink");
let privacy = document.querySelector("#privacy");


downloadLink.addEventListener("click", navigateDownload, false);

function navigateDownload(e) {
  download.scrollIntoView({
    behavior: "smooth"
  });
}

featuresLink.addEventListener("click", navigateFeatures, false);

function navigateFeatures(e) {
  features.scrollIntoView({
    behavior: "smooth"
  });
}

privacyLink.addEventListener("click", navigatePrivacy, false);

function navigatePrivacy(e) {
  privacy.scrollIntoView({
    behavior: "smooth"
  });
}


// for the navbar to be fixed and white on scroll

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};