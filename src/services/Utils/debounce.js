let timmer;

export default function debonce(callback, time) {
  clearTimeout(timmer);
  timmer = setTimeout(callback, time);
}