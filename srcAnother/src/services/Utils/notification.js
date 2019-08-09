import debounce from './debounce';

export default function showNotificate(notificationTimme) {
	const messageCss = document.querySelector(".notify")
    messageCss.classList.add("show");
    debounce(() => {
        messageCss.className = messageCss.className.replace("show", "");
      }, notificationTimme);
}