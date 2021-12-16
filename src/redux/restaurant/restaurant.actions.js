export const setRestaurantWithItem = (payload) => {
  return {
    type: "SET_RESTAURANT_WITH_DISHES",
    payload,
  };
};

export const addRestaurantReview = (payload) => {
  return {
    type: "ADD_RESTAURANT_REVIEW",
    payload,
  };
};
