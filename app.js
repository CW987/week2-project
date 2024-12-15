console.log("test my update");

const images = [
  {
    src: "./SalvationArmy.jpg",
    alt: "Abandoned Salvation Army building in Sheffield, England with plants growing out of the facade",
    id: "salvationArmy",
  },
  {
    src: "./Palace.jpg",
    alt: "Abandoned Bishop's Palace, St. Davids, Wales",
    id: "Palace",
  },
  {
    src: "./Seminary.jpg",
    alt: "St. Peter's Seminary - An abandoned Brutalist building in the Scottish countryside, near Cardross",
    id: "seminary",
  },
  {
    src: "./Castle.jpg",
    alt: "Abandoned Castle, Girvan Scotland. Interior view looking up through the ruined keep, decorational timbers still visible on higher floors, no structural timer left",
    id: "Castle",
  },
  {
    src: "./Bunker.jpg",
    alt: "Abandoned World War 2 pillbox bunker that has slipped down onto the beach. Redcar England",
    id: "bunker",
  },
  // { src: "url", alt: "description" }
];

// This gets the containers for the main image and thumbnail.
const thumbnailCont = document.getElementById("thumbnailCont");
const mainImgCont = document.getElementById("mainImgCont");

// This creates and displays the first image in the array as the main image
let displayedImg = document.createElement("img");
displayedImg.src = images[0].src;
// the number after images is which image from the array will be displayed first when the website loads
displayedImg.alt = images[0].alt;
displayedImg.className = "displayedImg";
mainImgCont.appendChild(displayedImg);

// This updates the main image when a thumbnail is clicked
function updateMainImage(index) {
  console.log("Main image updated to:", images[index].alt);
  displayedImg.src = images[index].src;
  displayedImg.alt = images[index].alt;
}

// This creates the thumbnails
function createThumbnails(imageIndex) {
  console.log("createThumbnails used");
  const thumbnailCont = document.querySelector("#thumbnailCont");
  imageIndex.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    thumbnail.className = "thumbnail";
    thumbnail.addEventListener("click", () => updateMainImage(index));
    thumbnailCont.appendChild(thumbnail);
  });

}

createThumbnails(images)