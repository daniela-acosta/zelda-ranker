export const getUserReviews = (gameId) => {
  const key = `${gameId}_reviews`;
  const reviews = JSON.parse(localStorage.getItem(key))
  console.log("get user reviews", reviews);
  return reviews;
};

export const setReview = (gameId, review) => {
  const key = `${gameId}_reviews`;
  const value = JSON.stringify(review);
  localStorage.setItem(key, value);
  console.log("set review", value)
};

export const getInitialReviews = (gameId, gamesData) => {
  const foundGame = gamesData.find((game) => game.id.toString() === gameId.toString());
  const reviews = foundGame.reviews;
  return reviews;
};
