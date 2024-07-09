import { Store } from "react-notifications-component"

Store.addNotification({
  title: "You alredy voted",
  message: "",
  type: "danger",
  insert: "top",
  container: "top-left",
  dismiss: {
    duration: 5000,
    onScreen: true
  }
})
