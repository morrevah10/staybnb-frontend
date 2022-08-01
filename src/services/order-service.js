import { storageService } from "./storage-service.js";
import { httpService } from "./http.service";

export const ordersService = {
  query,
  getOrder,
  getOrders,
  makeOrder,
  getDays,
  getTotal,
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

function makeOrder(stay, reservation, user) {
  let order = {
    date: Date.now(),
    guestName: user.fullName,
    stay: stay,
    stayPlace: stay.address.street,

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

  return order;
}

function getDays(d1, d2) {
  var t2 = d2.getTime();
  var t1 = d1.getTime();
  let total = Math.floor((t2 - t1) / (24 * 3600 * 1000));
  return total;
}

function getTotal(nights, price) {
  return nights * price;
}

<<<<<<< HEAD
function getdate(date, formated) {
  return date.toLocaleDateString();
}
=======


>>>>>>> 1cdcc1eb9c4f5ed87eca55ee07efe9e4486f8dce
