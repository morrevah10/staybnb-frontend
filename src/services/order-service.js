import { storageService } from "./storage-service.js";

export const ordersService = {
  query,
  getOrders,
  makeOrder,
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
            _id: "1",
            imgUrl: "img",
            guestName: "yossi chen",
            checkIn: "2016-05-01",
            checkOut: "2016-05-03",
            status: "panding",
            revenue: "$100",
            action: "aprove/decline",
          },
          {
            _id: "2",
            imgUrl: "img",
            guestName: "mor revah",
            checkIn: "2016-05-01",
            checkOut: "2016-05-03",
            status: "panding",
            revenue: "$150",
            action: "approve/decline",
          },
          {
            _id: "3",
            imgUrl: "img",
            guestName: "mor revah",
            checkIn: "2016-05-01",
            checkOut: "2016-05-03",
            status: "panding",
            revenue: "$150",
            action: "approve/decline",
          },
      ];
      localStorage.setItem(order_key, JSON.stringify(orders));
    }
    return orders;
  }

function makeOrder(stay,reservation){
  let order={
    date: Date.now(),
    guestName: 'Mor Revah',
    stay: stay.name,
    


  }

}