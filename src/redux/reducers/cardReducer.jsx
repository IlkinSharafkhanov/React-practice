const initialStateCard = {
  card: [],
};

export function cardReducer(state = initialStateCard, action) {
  switch (action.type) {
    case "ADD_CARD":
      return {
        card: [...state.card, action.payload],
      };

    case "DELETE_CARD":
      const filteredData = state.card.filter(
        (item) => item.id !== action.payload
      );
      return {
        card: [...filteredData],
      };

    default:
      return state;
  }
}
