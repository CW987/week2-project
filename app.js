console.log("test my update")

const images = [
    { src: "./SalvationArmy.jpg", alt: "Abandoned Salvation Army building in Sheffield, England with plants growing out of the facade", id:"salvationArmy" },
    { src: "./Palace.jpg", alt: "Abandoned Bishop's Palace, St. Davids, Wales", id:"Palace"
    },
    { src: "./Seminary.jpg", alt: "St. Peter's Seminary - An abandoned Brutalist building in the Scottish countryside, near Cardross", id:"seminary" },
    { src: "./Castle.jpg", alt: "Abandoned Castle, Girvan Scotland. Interior view looking up through the ruined keep, decorational timbers still visible on higher floors, no floors left", id:"Castle" },
    { src: "./Bunker.jpg", alt: "Abandoned World War 2 pillbox bunker that has slipped down onto the beach. Redcar England", id:"bunker" },
    // { src: "url", alt: "description" }
]
const thumbnailCont = document.getElementById("thumbnailCont")
const mainImgCont = document.getElementById("mainImgCont")

// let thumbnailCont = document.getElementById('thumbnailCont')
let displayedImg = document.createElement("img")
displayedImg.src = images [0].src
displayedImg.alt = images [0].alt
displayedImg.className = "displayedImg"
mainImgCont.appendChild(displayedImg)


// for (let image of images) {
//     console.log(image)
//     // image = src
// }

// function createThumbnails(images){

// }

// function createMainImg(mainImage){
//     mainImgContainer.innerHTML = null
// }