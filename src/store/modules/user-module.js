import { userService } from "../../services/user-service.js"
// import {
//   socketService,
//   SOCKET_EMIT_USER_WATCH,
//   SOCKET_EVENT_USER_UPDATED,
// } from "../services/socket.service"

// var localLoggedinUser = null
// if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user || null)

export default {
  state: {
    loggedinUser: null,
    // users: [],
    // watchedUser: null,
  },
  getters: {
    users({ users }) {
      return users
    },
    loggedinUser({ loggedinUser }) {
      return loggedinUser
    },
    getTrips({loggedinUser}){
      return loggedinUser.trips
    },
    watchedUser({ watchedUser }) {
      return watchedUser
    },
  },
  mutations: {
    addOrderToTrip(state ,{currOrder}) {
      console.log("from order store",currOrder);
      
      state.loggedinUser.trips.push(currOrder)
      console.log("order and user after clike from order stor",state.loggedinUser )
      // let user = state.loggedinUser
      userService.update(state.loggedinUser)
    },
    setLoggedinUser(state, { user }) {
      state.loggedinUser = user ? { ...user } : null
    },
    setWatchedUser(state, { user }) {
      state.watchedUser = user
    },
    setUsers(state, { users }) {
      state.users = users
    },
    removeUser(state, { userId }) {
      state.users = state.users.filter((user) => user._id !== userId)
    },
    // setUserScore(state, { score }) {
    //   state.loggedinUser.score = score
    // },
  },
  actions: {
    async login({ commit }, { userCred }) {
      try {
        console.log("from stor ",userCred)
        const user = await userService.login(userCred)
        commit({ type: "setLoggedinUser", user })
        return user
      } catch (err) {
        console.log("userStore: Error in login", err)
        throw err
      }
    },
    async signup({ commit }, { userCred }) {
      try {
        const user = await userService.signup(userCred)
        commit({ type: "setLoggedinUser", user })
        return user
      } catch (err) {
        console.log("userStore: Error in signup", err)
        throw err
      }
    },
    async logout({ commit }) {
      try {
        await userService.logout()
        commit({ type: "setLoggedinUser", user: null })
      } catch (err) {
        console.log("userStore: Error in logout", err)
        throw err
      }
    },
    async loadUsers({ commit }) {
      // TODO: loading
      try {
        const users = await userService.getUsers()
        commit({ type: "setUsers", users })
      } catch (err) {
        console.log("userStore: Error in loadUsers", err)
        throw err
      }
    },
    async loadAndWatchUser({ commit }, { userId }) {
      try {
        const user = await userService.getById(userId)
        commit({ type: "setWatchedUser", user })
      } catch (err) {
        console.log("userStore: Error in loadAndWatchUser", err)
        throw err
      }
    },
    async removeUser({ commit }, { userId }) {
      try {
        await userService.remove(userId)
        commit({ type: "removeUser", userId })
      } catch (err) {
        console.log("userStore: Error in removeUser", err)
        throw err
      }
    },
    async updateUser({ commit }, { user }) {
      try {
        console.log("user from action ",user)
        user = await userService.update(user)
        commit({ type: "setUser", user })
      } catch (err) {
        console.log("userStore: Error in updateUser", err)
        throw err
      }
    },
   
  },
}
