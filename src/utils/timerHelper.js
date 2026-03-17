export const getTimeLeftInSeconds = (time, durationMs) => {
  if (!time) return 0;
  const baseTime = new Date(time).getTime();
  const now = Date.now();
  const diff = (baseTime + durationMs) - now;
  return diff > 0 ? Math.floor(diff / 1000) : 0;
};

export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};