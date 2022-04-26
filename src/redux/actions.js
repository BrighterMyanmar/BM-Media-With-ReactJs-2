export const addUser = (payload) => {
   return {
      type: "userAdd",
      payload: payload
   }
}
export const removeUser = (payload) => {
   return {
      type: "userRemove",
      payload: payload
   }
}
export const setPage = (payload) => {
   return {
      type: "setPage",
      payload: payload
   }
}

const actions = {
   addUser, removeUser,setPage
}
export default actions;