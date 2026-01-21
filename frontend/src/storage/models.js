export const emptyTodayGame = (date) => ({
  date: date,
  guesses: [],
  won: false,
});

export const emptyStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
};
