let timmer;

export default function debounce(callback, timme = 500) {
  clearTimeout(timmer);
  timmer = setTimeout(callback, timme);
}