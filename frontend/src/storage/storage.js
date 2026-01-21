import { TODAY_KEY, STATS_KEY } from "./keys";
import { emptyTodayGame, emptyStats } from "./models";

export function getStats() {
  const raw = localStorage.getItem(STATS_KEY);

  if (!raw) {
    localStorage.setItem(STATS_KEY, JSON.stringify(emptyStats));
    return emptyStats;
  }

  try {
    return JSON.parse(raw);
  } catch {
    localStorage.setItem(STATS_KEY, JSON.stringify(emptyStats));
    return emptyStats;
  }
}

export function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function getTodayGame(serverDate) {
  const raw = localStorage.getItem(TODAY_KEY);

  if (!raw) {
    const fresh = emptyTodayGame(serverDate);
    localStorage.setItem(TODAY_KEY, JSON.stringify(fresh));
    return fresh;
  }

  try {
    const parsed = JSON.parse(raw);

    if (parsed.date !== serverDate) {
      const fresh = emptyTodayGame(serverDate);
      localStorage.setItem(TODAY_KEY, JSON.stringify(fresh));
      return fresh;
    }

    return parsed;
  } catch {
    const fresh = emptyTodayGame(serverDate);
    localStorage.setItem(TODAY_KEY, JSON.stringify(fresh));
    return fresh;
  }
}

export function saveTodayGame(game) {
  localStorage.setItem(TODAY_KEY, JSON.stringify(game));
}
