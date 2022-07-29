import { storageService } from "./storage-service.js"

export const userService = {
  query,
  getUsers,
}

const user_key = "userDB"

getUsers()

function query() {
  return storageService.query(user_key)
}
function getUsers() {
  let users = JSON.parse(localStorage.getItem(user_key))
  if (!users || !users.length) {
    users = [
      {
        isHost: true,
        fullName: "shlomi levi",
        userName: "shlomi levi",
        password: "s123456",
        email: "shloniLevi123@gmail.com",
        imgUrl: "",
      },
      {
        isHost: false,
        fullName: "mor revah",
        userName: "mor revah",
        password: "m123456",
        email: "morrevah123@gmail.com",
        imgUrl: "",
      },
    ]
    localStorage.setItem(user_key, JSON.stringify(users))
  }
  return users
}


