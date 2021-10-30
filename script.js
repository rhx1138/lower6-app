let downloadLink = document.querySelector("#downloadLink");
let download = document.querySelector("#download");

downloadLink.addEventListener("click", navigateDownload, false);

function navigateDownload(e) {
  download.scrollIntoView({behavior: "smooth"});
}