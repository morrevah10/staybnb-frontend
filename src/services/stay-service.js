import Axios from "axios";

var axios = Axios.create({
  withCredentials: true
})

function _getUrl(id = "") {
  const BASE_URL =
    process.env.NODE_ENV !== "development"
      ? "/api/stay"
      : "//localhost:3030/api/stay";

  return `${BASE_URL}/${id}`;
}

export const stayService = {
  query,
  getById,
  getEmptyStay,
  saveStay,
  removeStay,
};

async function query(filterBy = null) {
  try {
    const res = await axios.get(_getUrl(), { params: filterBy });
    return res.data;
  } catch(err) {
    console.error("can not get stays", err);
  }
}

async function getById(stayId) {
  try {
    const res = await axios.get(_getUrl(stayId));
    return res.data;
  } catch {
    console.error("Failed to get by id");
  }
}

async function removeStay(stayId) {
  try {
    const res = await axios.delete(_getUrl(stayId));
    return res.data;
  } catch {
    console.error("failed to remove stay");
  }
}

async function saveStay(stay) {
  if (stay._id) {
    const res = await axios.put(_getUrl(stay._id), stay);
    return res.data;
  } else {
    const res = await axios.post(_getUrl(), stay);
    return res.data;
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
