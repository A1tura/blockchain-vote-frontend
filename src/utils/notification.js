import { Store } from "react-notifications-component";

export function notification(title, message, type) {
  return Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-left",
    animationIn: ["animate__animated", "animate__bounce"],
    animationOut: ["animate__animated", "animate__bounce"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
}
