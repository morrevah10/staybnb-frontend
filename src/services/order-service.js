import { storageService } from "./storage-service.js";
import { httpService } from "./http.service";

export const ordersService = {
  query,
  getOrder,
  getOrders,
  makeOrder,
  getDays,
  getTotal,
  getdate,
  addOrder,
};

const order_key = "orderDB";

function query() {
  return storageService.query(order_key);
}

function getOrders() {
  return httpService.get("order");
}

async function addOrder(order) {
  console.log("add orderrrrrrrrrrrrr", order);
  const addedOreder = await httpService.post("order", order);
  return addedOreder;
}

function getOrder() {
  let orders = JSON.parse(localStorage.getItem(order_key));
  if (!orders || !orders.length) {
    orders = [
      {
        action: "",
        checkIn: "29.7.2022",
        checkOut: "30.7.2022",
        date: "29.7.2022",
        guestName: "David",
        nights: 1,
        price: "$63",
        status: "Pending",
        stay: "Private Room with perfect location in Bostanci",
        total: "$63",
      },
    ];
    localStorage.setItem(order_key, JSON.stringify(orders));
  }
  return orders;
}

<<<<<<< HEAD
function makeOrder(stay, reservation, user) {
  let order = {
    date: getdate(new Date(), "mm/dd/yy"),
    guestName: JSON.parse(JSON.stringify(user)),
    stay: stay,
    stayPlace: stay.address.street,
=======
<<<<<<< HEAD
function makeOrder(stay, reservation,user) {
  console.log("makeOrder ",stay, reservation,user)
=======
function makeOrder(stay, reservation, user) {
  console.log('user', user)
>>>>>>> c93ad073897d10969ae19c93c6b9841e65501218
  let order = {
    date: getdate(new Date(), "mm/dd/yy"),
    guestName: user,
    stay: stay.name,
    stayPlace:stay.address.street,
>>>>>>> 38a715e2c347aec23d97ac16c965c137d1c961ab
    checkIn: reservation.date.start.toLocaleDateString(),
    checkOut: reservation.date.end.toLocaleDateString(),
    nights: getDays(reservation.date.start, reservation.date.end),
    guests: reservation.guests.total,
    price: "$" + stay.price,
    total:
      "$" +
      getTotal(
        getDays(reservation.date.start, reservation.date.end),
        stay.price
      ),
    status: "Pending",
    action: "Cancel",
    host: JSON.parse(JSON.stringify(stay.host)),
    type: stay.roomType,
  };
<<<<<<< HEAD

  console.log(order);
=======
  
// console.log(order)
>>>>>>> 38a715e2c347aec23d97ac16c965c137d1c961ab

  return order;
}

function getDays(d1, d2) {
  var t2 = d2.getTime();
  var t1 = d1.getTime();
  let total = Math.floor((t2 - t1) / (24 * 3600 * 1000));
  return total 
}

function getTotal(nights, price) {
  return nights * price;
}

function getdate(date, formated) {
  return date.toLocaleDateString();
}

<<<<<<< HEAD
=======
// async function addOrder(order) {
//   try{
//   console.log("user from service",JSON.parse(JSON.stringify(order)) )
//   const addedOrder = await httpService.post('/order', order)
//   return addedOrder
//   } catch {
//     console.log("failed to add a new order")
//   }
// }

>>>>>>> 38a715e2c347aec23d97ac16c965c137d1c961ab
// async function addOrder(order) {
//   console.log("user from service",JSON.parse(JSON.stringify(order)) )
//   order = await httpService.post('order', order)
//   return order
// }

// reviewChannel.postMessage({type: 'addReview', review: addedReview})
// }

// function getOrders(){
//   return httpService.get('order')

// }
