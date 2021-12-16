const INITIAL_STATE = {
  restaurantWithItems: [],
};

const RestaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_RESTAURANT_WITH_DISHES":
      return {
        ...state,
        restaurantWithItems: action.payload,
      };
    case "ADD_RESTAURANT_REVIEW": {
      return {
        ...state,
        restaurantWithItems: state.restaurantWithItems.map((res) => {
          if (res.id == action.payload.restaurant_id) {
            return {
              ...res,
              review: [...res.review, action.payload],
            };
          } else return res;
        }),
      };
    }
    default:
      return { ...state };
  }
};

export default RestaurantReducer;
