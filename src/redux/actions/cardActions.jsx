

export const addToCard = (data) => ({
    type: "ADD_CARD",
    payload: data,
})

export const deleteItem = (id) => ({
    type: "DELETE_CARD",
    payload: id,
})