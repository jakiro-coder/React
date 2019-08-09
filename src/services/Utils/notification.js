import debounce from './debounce';

export default function showNotificate(time = 8000) {
  const messageCss = document.querySelector(".notify")
  messageCss.classList.add("show");
  debounce(() => {
    messageCss.className = messageCss.className.replace("show", "");
  }, time);
}