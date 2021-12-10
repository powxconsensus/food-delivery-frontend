const INITIAL_STATE = {
  restaurantWithItems: [],
};

const RestaurantReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case "SET_RESTAURANT_WITH_DISHES":
      return {
        ...state,
        restaurantWithItems: actions.payload,
      };
    default:
      return { ...state };
  }
};

export default RestaurantReducer;
