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
const orders=getOrders();

getOrders();

function query() {
  return storageService.query(order_key);
}
function getOrders() {
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

function makeOrder(stay, reservation,user) {
  let order = {
    date: getdate(new Date(), "mm/dd/yy"),
    guestName: user.fullName,
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
    host:stay.host.fullname,
  };
  // user.trips.push(order)

  return order,user;
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
