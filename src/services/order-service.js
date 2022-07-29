import { storageService } from "./storage-service.js";

export const ordersService = {
  query,
  getOrders,
  makeOrder,
  getDays,
  getTotal,
  getdate,
};

const order_key = "orderDB";

getOrders();

function query() {
  return storageService.query(order_key);
}
function getOrders() {
  let orders = JSON.parse(localStorage.getItem(order_key));
  if (!orders || !orders.length) {
    orders = [
      {
        date: Date.now(),
        guestName: "hard coded",
        stay: "hard coded",
        checkIn: "hard coded",
        checkOut: "hard coded",
        nights: "hard coded",
        guests: "hard coded",
        price: "hard coded",
        total: "hard coded",
        status: "hard coded",
        action: "hard coded",
      },
    ];
    localStorage.setItem(order_key, JSON.stringify(orders));
  }
  return orders;
}

function makeOrder(stay, reservation) {
  let order = {
    date: getdate(new Date(), "mm/dd/yy"),
    guestName: "David",
    stay: stay.name,
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
    action: "",
  };
  localStorage.setItem(order_key, JSON.stringify(order));
  return order;
}

function getDays(d1, d2) {
  var t2 = d2.getTime();
  var t1 = d1.getTime();
  return Math.floor((t2 - t1) / (24 * 3600 * 1000));
}

function getTotal(nights, price) {
  return nights * price;
}

function getdate(date, formated) {
  return date.toLocaleDateString();
}
