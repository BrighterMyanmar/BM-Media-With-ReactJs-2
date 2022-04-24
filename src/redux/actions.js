export const addUser = (payload) => {
   return {
      type:"userAdd",
      payload:payload
   }
}
export const removeUser = (payload) => {
   return {
      type:"userRemove",
      payload:payload
   }
}

const actions = {
   addUser,removeUser
}
export default actions;