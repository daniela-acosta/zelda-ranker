export const getRankings = (games, likes, dislikes) => {
  let proportions = [];
  for (const i in games) {
    proportions[i] = likes[i] / (likes[i] + dislikes[i]);
  }
//   console.log(proportions);
  const sortedProportions = proportions.slice().sort((a, b) => b - a);
//   console.log(sortedProportions);
  const rankings = proportions.map(
    (value) => sortedProportions.indexOf(value) + 1
  );
//   console.log(rankings)
  return [rankings, proportions];
};

export const getUserVotes = (games) => {
  let userVotes = [];
  for (const i in games) {
    userVotes[i] = localStorage.getItem(games[i].id);
  }
  return userVotes;
};

export const getLikes = (games, userVotes) => {
  let likes = [];
  for (const i in games) {
    likes[i] = games[i].likes;
    if (userVotes[i] === "liked") {
      likes[i]++;
    }
  }
  return likes;
};

export const getDislikes = (games, userVotes) => {
  let dislikes = [];
  for (const i in games) {
    dislikes[i] = games[i].dislikes;
    if (userVotes[i] === "disliked") {
      dislikes[i]++;
    }
  }
  return dislikes;
};
