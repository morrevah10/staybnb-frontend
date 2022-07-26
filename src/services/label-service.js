import { storageService } from "./storage-service.js"
// import { utilService } from "./util-service.js"

export const labelService = {
  query,
  getLabel,
}


const Label_key = "labelDB"

getLabel()

function query() {
  return storageService.query(Label_key)
}

function getLabel() {
  let labels = JSON.parse(localStorage.getItem(Label_key))
  if (!labels || !labels.length) {
    labels = [
      {
        name: "beach",
        imgUrl: "beach.jpg",
      },
      {
        name: "castles",
        imgUrl: "castles.jpg",
      },
      {
        name: "caves",
        imgUrl: "caves.jpg",
      },
      {
        name: "containers",
        imgUrl: "containers.jpg",
      },
      {
        name: "creativ-spaces",
        imgUrl: "creativ-spaces.jpg",
      },
    ]
    localStorage.setItem(Label_key, JSON.stringify(labels))
  }
  return labels
}
