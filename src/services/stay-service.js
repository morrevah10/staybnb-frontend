// import { storageService } from "./storage-service.js";
// import { utilService } from "./util-service.js";
import axios from 'axios'


function _getUrl(id = '') {
  const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/stay'
    : '//localhost:3030/api/stay'

  return `${BASE_URL}/${id}`
}


export const stayService = {
  query,
  getById,
  getEmptyStay,
  saveStay,
  removeStay,
  // getLabel,
};


async function query(filterBy = null) {
  try {
    const res = await axios.get(_getUrl(), { params: filterBy })
    return res.data
  } catch {
    console.error('can not get stays')
  }
  
}

async function getById(stayId) {
  try {
    const res = await axios.get(_getUrl(stayId))
    console.log('res.data',res.data)
    return res.data
  } catch {
    console.error( 'Failed to get by id')
  }
}


async function removeStay(stayId) {
  try{
    const res = await axios.delete(_getUrl(stayId))
    return res.data
  } catch {
    console.error('failed to remove stay')
  }
}

async function saveStay(stay) {
  if (stay._id) {
    const res =  await axios.put(_getUrl(stay._id), stay)
    return  res.data
  } else {
    const res =  await axios.post(_getUrl(), stay)
    return  res.data
  }
}

function getEmptyStay() {
  return {
    name: "",
    type,
    imgUrls,
    price: utilService.getRandomIntInclusive(0, 300),
    amenities: ["TV", "Wifi", "Kitchen"],
  };
}



// function _createStays() {
//   let stays = JSON.parse(localStorage.getItem(STAY_KEY));
//   if (!stays || !stays.length) {
//     stays = [
//       {
//         _id: "10006546",
//         numOfBeds: 6,
//         name: "Ribeira Charming Duplex",
//         type: "House",
//         imgUrls: ["075.jpeg", "079.jpeg", "061.jpeg", "111.jpeg", "087.jpeg"],
//         price: 80,
//         summary:
//           "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
//         capacity: 8,
//         amenities: [
//           {
//             name: "Sea view",
//             imgUrl: "sea-view-icon.svg",
//           },
//           {
//             name: "Kitchen",
//             imgUrl: "kitchen-icon.svg",
//           },
//           {
//             name: "Beach access",
//             imgUrl: "beach-access-icon.svg",
//           },
//           {
//             name: "TV",
//             imgUrl: "tv-icon.svg",
//           },
//           {
//             name: "Backyard",
//             imgUrl: "backyard-icon.svg",
//           },
//           {
//             name: "Refrigerator",
//             imgUrl: "refrigerator-icon.svg",
//           },
//         ],
//         host: {
//           _id: "51399391",
//           fullname: "Davit Pok",
//           imgUrl: "39.jpg",
//         },
//         loc: {
//           country: "Portugal",
//           countryCode: "PT",
//           city: "Porto",
//           address: "17 Kombo st",
//           lat: -8.61308,
//           lng: 41.1413,
//         },
//         reviews: [
//           {
//             id: "madeId",
//             txt: "Very helpful hosts. Cooked traditional...",
//             rate: 4,
//             by: {
//               _id: "u102",
//               fullname: "user2",
//               imgUrl: "21.jpg",
//             },
//           },
//         ],
//       },
//       {
//         _id: "10006547",
//         numOfBeds: 5,
//         name: "Fresh and modern 1BR in Bed-Stuy",
//         type: "Apartment",
//         imgUrls: ["101.jpeg", "037.jpeg", "038.jpeg", "043.jpeg", "113.jpeg"],
//         price: 100,
//         summary:
//           "A spacious, art-filled one-bedroom apartment near the express train (28 minutes to Times Square) and a Citibike station. Sample Bed-Stuy life at a nearby French restaurant,  a sunny Haitian cafe, a boutique grocery and more. We do NOT discriminate based on race, religion or sexual orientation.",
//         capacity: 2,
//         amenities: [
//           {
//             name: "Sea view",
//             imgUrl: "sea-view-icon.svg",
//           },
//           {
//             name: "Kitchen",
//             imgUrl: "kitchen-icon.svg",
//           },
//           {
//             name: "Beach access",
//             imgUrl: "beach-access-icon.svg",
//           },
//           {
//             name: "TV",
//             imgUrl: "tv-icon.svg",
//           },
//           {
//             name: "Backyard",
//             imgUrl: "backyard-icon.svg",
//           },
//           {
//             name: "Refrigerator",
//             imgUrl: "refrigerator-icon.svg",
//           },
//         ],
//         host: {
//           _id: "622f3402e36c59e6164fac46",
//           numOfBeds: 4,
//           fullname: "Shaila & Alex",
//           imgUrl: "56.jpg",
//         },
//         loc: {
//           country: "US",
//           countryCode: "US",
//           city: "Brooklyn",
//           address: "Brooklyn, NY",
//           lat: -73.92922,
//           lan: 40.68683,
//         },
//         reviews: [
//           {
//             at: "June 2021",
//             txt: "Shaila's place is amazing! It's new, it's clean and it's big! And Shaila is very accommodating, we found everything we needed (cooking, coffee) and more. Given that we were the first guests she hosted through airbnb I can say that she did an amazing job! \r\n",
//             rate: 3.7,
//             by: {
//               _id: "622f3407e36c59e6164fbfd2",
//               fullname: "Nicolas",
//               imgUrl: "36.jpg",
//               id: "4523027",
//             },
//           },
//           {
//             at: "October 2021",
//             by: {
//               _id: "622f3403e36c59e6164fb048",
//               fullname: "Jeff",
//               imgUrl: "22.jpg",
//               id: "6443424",
//             },
//             txt: "Great, quiet place to stay. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. ",
//           },
//           {
//             at: "January 2022",
//             by: {
//               _id: "622f3406e36c59e6164fba55",
//               fullname: "Carla",
//               imgUrl: "36.jpg",
//               id: "6121036",
//             },
//             txt: "Shaila and Alex are wonderful hosts really, they helped us every time we needed with directions, the internet, the supermarket, the post office !!! (thank you guys !!!).The place and the neighbord are great, 8 blocks far from the apartment you have the subway and 30 min. later you are in the island, we moved early in the morning, late at night (sometimes we came back at 2am) and everything turned out great.Definetly I would come back to their apartment, It's bigger than ours in Argentina !!! I look forward to stay there again and, next time, go out with you guys and have a beer or anything.\r\nBye !!! - Guido and Carla - ",
//           },
//         ],
//       },
//       {
//         _id: "10006548",
//         numOfBeds: 8,
//         name: "Belle chambre à côté Metro Papineau",
//         type: "Apartment",
//         imgUrls: ["074.jpeg", "077.jpeg", "060.jpeg", "110.jpeg", "086.jpeg"],
//         price: 120,
//         summary:
//           "Chambre dans un bel appartement moderne avec balcon, ascenseur et terrasse. Private room in a beautiful modern apartment  with balcony, elevator and patio. La chambre est fermée avec une lit double. Vous aurez accès à une salle de bain avec une douche, terrasse. L'appartement est climatisé.  Votre chambre est équipé d'une connexion Wi-Fi illimité. Vous serez proche du centre ville, au pied du pont Jacques Cartier et à distance de marche de toutes les commodités (métro, supermarché, pharmacie",
//         capacity: 2,
//         amenities: [
//           {
//             name: "Sea view",
//             imgUrl: "sea-view-icon.svg",
//           },
//           {
//             name: "Kitchen",
//             imgUrl: "kitchen-icon.svg",
//           },
//           {
//             name: "Beach access",
//             imgUrl: "beach-access-icon.svg",
//           },
//           {
//             name: "TV",
//             imgUrl: "tv-icon.svg",
//           },
//           {
//             name: "Backyard",
//             imgUrl: "backyard-icon.svg",
//           },
//           {
//             name: "Refrigerator",
//             imgUrl: "refrigerator-icon.svg",
//           },
//         ],
//         host: {
//           _id: "622f3401e36c59e6164fabab",
//           fullname: "Angel",
//           imgUrl: "33.jpg",
//         },
//         loc: {
//           country: "Canada",
//           countryCode: "CD",
//           city: "Montréal",
//           address: "17 Kombo st",
//           lat: -73.54985,
//           lan: 45.52797,
//         },
//         reviews: [
//           {
//             at: "March 2022",
//             rate: 4.6,
//             by: {
//               _id: "622f3407e36c59e6164fc058",
//               fullname: "Rowan",
//               imgUrl: "31.jpg",
//               id: "81703602",
//             },
//             txt: "The place was great, as was the host! I would recommend staying here.",
//           },
//           {
//             at: "April 2022",
//             by: {
//               _id: "622f3403e36c59e6164fb274",
//               fullname: "Adriana",
//               imgUrl: "40.jpg",
//               id: "64310987",
//             },
//             txt: "J'ai adoré rester là. Très acceuillant.",
//           },
//           {
//             at: "April 2022",
//             by: {
//               _id: "622f3405e36c59e6164fb87c",
//               fullname: "Emma",
//               imgUrl: "21.jpg",
//               id: "23709900",
//             },
//             txt: "Angel est un hôte très sympa et arrangeant ! L'appartement est agréable à vivre et propre. Proche du métro et du centre ville. Nous avons passé un très bon séjour !",
//           },
//           {
//             at: "May 2022",
//             by: {
//               _id: "622f3408e36c59e6164fc082",
//               fullname: "Jeffery",
//               imgUrl: "19.jpg",
//               id: "44882622",
//             },
//             txt: "Angel was warm and welcoming and has a beautiful apartment. I'd recommend his place to anyone visiting downtown Montreal!",
//           },
//         ],
//       },
//       {
//         _id: "10006549",
//         numOfBeds: 2,
//         name: "Nice Cosy Room In Taksim",
//         type: "Apartment",
//         imgUrls: ["042.jpeg", "110.jpeg", "037.jpeg", "005.jpeg", "075.jpeg"],
//         price: 90,
//         summary:
//           "Welcome if you want to stay at a cozy flat with local experience.:) It is in the center of Istanbul.The neighborhood is safe and close to attractions.Transportation is easy. I will help you always.",
//         capacity: 2,
//         amenities: [
//           {
//             name: "Sea view",
//             imgUrl: "sea-view-icon.svg",
//           },
//           {
//             name: "Kitchen",
//             imgUrl: "kitchen-icon.svg",
//           },
//           {
//             name: "Beach access",
//             imgUrl: "beach-access-icon.svg",
//           },
//           {
//             name: "TV",
//             imgUrl: "tv-icon.svg",
//           },
//           {
//             name: "Backyard",
//             imgUrl: "backyard-icon.svg",
//           },
//           {
//             name: "Refrigerator",
//             imgUrl: "refrigerator-icon.svg",
//           },
//         ],
//         host: {
//           _id: "622f3402e36c59e6164fae4d",
//           fullname: "Nihat",
//           imgUrl: "11.jpg",
//         },
//         loc: {
//           country: "Turkey",
//           countryCode: "TR",
//           city: "Istanbul",
//           address: "Taksim, Cihangir",
//           lat: 28.98648,
//           lan: 41.03376,
//         },
//         reviews: [
//           {
//             at: "July 2022",
//             rate: 3.9,
//             by: {
//               _id: "622f3406e36c59e6164fbcc7",
//               fullname: "Quentin",
//               imgUrl: "07.jpg",
//               id: "12424603",
//             },
//             txt: "I greatly appreciated both the location of the place (very central) and the appartment per se (clean and comfortable, with a very cosy room and with Wi-Fi). \r\n\r\nNihat was perfect host, quite welcoming and helpful about places to go (or avoid) and things to do in town. \r\n\r\nHosça kal!\r\n\r\n\r\n",
//           },
//           {
//             at: "August 2022",
//             by: {
//               _id: "622f3405e36c59e6164fb7f6",
//               fullname: "Steve",
//               imgUrl: "01.jpg",
//               id: "10300292",
//             },
//             txt: "Nice room in a flat well located. Nihat is very nce and helpful. Good experience.",
//           },
//           {
//             at: "September 2022",
//             by: {
//               _id: "622f3404e36c59e6164fb624",
//               fullname: "Jess",
//               imgUrl: "05.jpg",
//               id: "8641944",
//             },
//             txt: "We had a fantastic stay in this charming apartment. The location was perfect and Nihat welcomed us even when we made a late reservation and arrived early. He works at a bar no far from there- a great place to have a drink after seeing the sites! I highly recommend this place!",
//           },
//         ],
//       },
//       {
//         _id: "10006546",
//         numOfBeds: 6,
//         name: "Ribeira Charming Duplex",
//         type: "House",
//         imgUrls: ["075.jpeg", "079.jpeg", "061.jpeg", "111.jpeg", "087.jpeg"],
//         price: 80,
//         summary:
//           "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
//         capacity: 8,
//         amenities: [
//           {
//             name: "Sea view",
//             imgUrl: "sea-view-icon.svg",
//           },
//           {
//             name: "Kitchen",
//             imgUrl: "kitchen-icon.svg",
//           },
//           {
//             name: "Beach access",
//             imgUrl: "beach-access-icon.svg",
//           },
//           {
//             name: "TV",
//             imgUrl: "tv-icon.svg",
//           },
//           {
//             name: "Backyard",
//             imgUrl: "backyard-icon.svg",
//           },
//           {
//             name: "Refrigerator",
//             imgUrl: "refrigerator-icon.svg",
//           },
//         ],
//         host: {
//           _id: "51399391",
//           fullname: "Davit Pok",
//           imgUrl: "55.jpg",
//         },
//         loc: {
//           country: "Portugal",
//           countryCode: "PT",
//           city: "Porto",
//           address: "17 Kombo st",
//           lat: -8.61308,
//           lng: 41.1413,
//         },
//         reviews: [
//           {
//             id: "madeId",
//             txt: "Very helpful hosts. Cooked traditional...",
//             rate: 4,
//             by: {
//               _id: "u102",
//               fullname: "user2",
//               imgUrl: "52.jpg",
//             },
//           },
//         ],
//       },
//       {
//         _id: "10006547",
//         numOfBeds: 5,
//         name: "Fresh and modern 1BR in Bed-Stuy",
//         type: "Apartment",
//         imgUrls: ["101.jpeg", "037.jpeg", "038.jpeg", "043.jpeg", "113.jpeg"],
//         price: 100,
//         summary:
//           "A spacious, art-filled one-bedroom apartment near the express train (28 minutes to Times Square) and a Citibike station. Sample Bed-Stuy life at a nearby French restaurant,  a sunny Haitian cafe, a boutique grocery and more. We do NOT discriminate based on race, religion or sexual orientation.",
//         capacity: 2,
//         amenities: [
//           {
//             name: "Sea view",
//             imgUrl: "sea-view-icon.svg",
//           },
//           {
//             name: "Kitchen",
//             imgUrl: "kitchen-icon.svg",
//           },
//           {
//             name: "Beach access",
//             imgUrl: "beach-access-icon.svg",
//           },
//           {
//             name: "TV",
//             imgUrl: "tv-icon.svg",
//           },
//           {
//             name: "Backyard",
//             imgUrl: "backyard-icon.svg",
//           },
//           {
//             name: "Refrigerator",
//             imgUrl: "refrigerator-icon.svg",
//           },
//         ],
//         host: {
//           _id: "622f3402e36c59e6164fac46",
//           numOfBeds: 4,
//           fullname: "Shaila & Alex",
//           imgUrl: "27.jpg",
//         },
//         loc: {
//           country: "US",
//           countryCode: "US",
//           city: "Brooklyn",
//           address: "Brooklyn, NY",
//           lat: -73.92922,
//           lan: 40.68683,
//         },
//         reviews: [
//           {
//             at: "October 2021",
//             by: {
//               _id: "622f3407e36c59e6164fbfd2",
//               fullname: "Nicolas",
//               imgUrl: "51.jpg",
//               id: "4523027",
//             },
//             txt: "Shaila's place is amazing! It's new, it's clean and it's big! And Shaila is very accommodating, we found everything we needed (cooking, coffee) and more. Given that we were the first guests she hosted through airbnb I can say that she did an amazing job! \r\n",
//           },
//           {
//             at: "December 2021",
//             by: {
//               _id: "622f3403e36c59e6164fb048",
//               fullname: "Jeff",
//               imgUrl: "47.jpg",
//               id: "6443424",
//             },
//             txt: "Great, quiet place to stay. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. ",
//           },
//           {
//             at: "June 2022",
//             by: {
//               _id: "622f3406e36c59e6164fba55",
//               fullname: "Carla",
//               imgUrl: "63.jpg",
//               id: "6121036",
//             },
//             txt: "Shaila and Alex are wonderful hosts really, they helped us every time we needed with directions, the internet, the supermarket, the post office !!! (thank you guys !!!).The place and the neighbord are great, 8 blocks far from the apartment you have the subway and 30 min. later you are in the island, we moved early in the morning, late at night (sometimes we came back at 2am) and everything turned out great.Definetly I would come back to their apartment, It's bigger than ours in Argentina !!! I look forward to stay there again and, next time, go out with you guys and have a beer or anything.\r\nBye !!! - Guido and Carla - ",
//           },
//         ],
//       },
//       {
//         _id: "10006548",
//         numOfBeds: 8,
//         name: "Belle chambre à côté Metro Papineau",
//         type: "Apartment",
//         imgUrls: ["074.jpeg", "077.jpeg", "060.jpeg", "110.jpeg", "086.jpeg"],
//         price: 120,
//         summary:
//           "Chambre dans un bel appartement moderne avec balcon, ascenseur et terrasse. Private room in a beautiful modern apartment  with balcony, elevator and patio. La chambre est fermée avec une lit double. Vous aurez accès à une salle de bain avec une douche, terrasse. L'appartement est climatisé.  Votre chambre est équipé d'une connexion Wi-Fi illimité. Vous serez proche du centre ville, au pied du pont Jacques Cartier et à distance de marche de toutes les commodités (métro, supermarché, pharmacie",
//         capacity: 2,
//         amenities: [
//           {
//             name: "Sea view",
//             imgUrl: "sea-view-icon.svg",
//           },
//           {
//             name: "Kitchen",
//             imgUrl: "kitchen-icon.svg",
//           },
//           {
//             name: "Beach access",
//             imgUrl: "beach-access-icon.svg",
//           },
//           {
//             name: "TV",
//             imgUrl: "tv-icon.svg",
//           },
//           {
//             name: "Backyard",
//             imgUrl: "backyard-icon.svg",
//           },
//           {
//             name: "Refrigerator",
//             imgUrl: "refrigerator-icon.svg",
//           },
//         ],
//         host: {
//           _id: "622f3401e36c59e6164fabab",
//           fullname: "Angel",
//           imgUrl: "64.jpg",
//         },
//         loc: {
//           country: "Canada",
//           countryCode: "CD",
//           city: "Montréal",
//           address: "17 Kombo st",
//           lat: -73.54985,
//           lan: 45.52797,
//         },
//         reviews: [
//           {
//             at: "November 2021",
//             by: {
//               _id: "622f3407e36c59e6164fc058",
//               fullname: "Rowan",
//               imgUrl: "03.jpg",
//               id: "81703602",
//             },
//             txt: "The place was great, as was the host! I would recommend staying here.",
//           },
//           {
//             at: "February 2022",
//             by: {
//               _id: "622f3403e36c59e6164fb274",
//               fullname: "Adriana",
//               imgUrl: "08.jpg",
//               id: "64310987",
//             },
//             txt: "J'ai adoré rester là. Très acceuillant.",
//           },
//           {
//             at: "March 2022",
//             by: {
//               _id: "622f3405e36c59e6164fb87c",
//               fullname: "Emma",
//               imgUrl: "05.jpg",
//               id: "23709900",
//             },
//             txt: "Angel est un hôte très sympa et arrangeant ! L'appartement est agréable à vivre et propre. Proche du métro et du centre ville. Nous avons passé un très bon séjour !",
//           },
//           {
//             at: "May 2022",
//             by: {
//               _id: "622f3408e36c59e6164fc082",
//               fullname: "Jeffery",
//               imgUrl: "13.jpg",
//               id: "44882622",
//             },
//             txt: "Angel was warm and welcoming and has a beautiful apartment. I'd recommend his place to anyone visiting downtown Montreal!",
//           },
//         ],
//       },
//       {
//         _id: "10006549",
//         numOfBeds: 2,
//         name: "Nice Cosy Room In Taksim",
//         type: "Apartment",
//         imgUrls: ["042.jpeg", "110.jpeg", "037.jpeg", "005.jpeg", "075.jpeg"],
//         price: 90,
//         summary:
//           "Welcome if you want to stay at a cozy flat with local experience.:) It is in the center of Istanbul.The neighborhood is safe and close to attractions.Transportation is easy. I will help you always.",
//         capacity: 2,
//         amenities: [
//           {
//             name: "Sea view",
//             imgUrl: "sea-view-icon.svg",
//           },
//           {
//             name: "Kitchen",
//             imgUrl: "kitchen-icon.svg",
//           },
//           {
//             name: "Beach access",
//             imgUrl: "beach-access-icon.svg",
//           },
//           {
//             name: "TV",
//             imgUrl: "tv-icon.svg",
//           },
//           {
//             name: "Backyard",
//             imgUrl: "backyard-icon.svg",
//           },
//           {
//             name: "Refrigerator",
//             imgUrl: "refrigerator-icon.svg",
//           },
//         ],
//         host: {
//           _id: "622f3402e36c59e6164fae4d",
//           fullname: "Nihat",
//           imgUrl: "16.jpg",
//         },
//         loc: {
//           country: "Turkey",
//           countryCode: "TR",
//           city: "Istanbul",
//           address: "Taksim, Cihangir",
//           lat: 28.98648,
//           lan: 41.03376,
//         },
//         reviews: [
//           {
//             at: "February 2022",
//             by: {
//               _id: "622f3406e36c59e6164fbcc7",
//               fullname: "Quentin",
//               imgUrl: "22.jpg",
//               id: "12424603",
//             },
//             txt: "I greatly appreciated both the location of the place (very central) and the appartment per se (clean and comfortable, with a very cosy room and with Wi-Fi). \r\n\r\nNihat was perfect host, quite welcoming and helpful about places to go (or avoid) and things to do in town. \r\n\r\nHosça kal!\r\n\r\n\r\n",
//           },
//           {
//             at: "April 2022",
//             by: {
//               _id: "622f3405e36c59e6164fb7f6",
//               fullname: "Steve",
//               imgUrl: "35.jpg",
//               id: "10300292",
//             },
//             txt: "Nice room in a flat well located. Nihat is very nce and helpful. Good experience.",
//           },
//           {
//             at: "June 2022",
//             by: {
//               _id: "622f3404e36c59e6164fb624",
//               fullname: "Jess",
//               imgUrl: "44.jpg",
//               id: "8641944",
//             },
//             txt: "We had a fantastic stay in this charming apartment. The location was perfect and Nihat welcomed us even when we made a late reservation and arrived early. He works at a bar no far from there- a great place to have a drink after seeing the sites! I highly recommend this place!",
//           },
//         ],
//       },
//     ];
//     localStorage.setItem(STAY_KEY, JSON.stringify(stays));
//   }
//   return stays;
// }

// function getLabel() {
//   let labels = JSON.parse(localStorage.getItem(Label_key))
//   if (!labels || !labels.length) {
//     labels = [
//       {
//         name: "beach",
//         imgUrl: "beach.jpg",
//       },
//       {
//         name: "castles",
//         imgUrl: "castles.jpg",
//       },
//       {
//         name: "caves",
//         imgUrl: "caves.jpg",
//       },
//       {
//         name: "containers",
//         imgUrl: "containers.jpg",
//       },
//       {
//         name: "creativ-spaces",
//         imgUrl: "creativ-spaces.jpg",
//       },
//     ]
//     localStorage.setItem(Label_key, JSON.stringify(labels))
//   }
//   return labels
// }
