

export default function dateStartOfDay(date) {
  const startOfDay = new Date(date);

  startOfDay.setHours(0, 0, 0);

  return startOfDay;
}
