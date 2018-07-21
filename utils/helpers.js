import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

export function clearLocalNotification() {
  return AsyncStorage.removeItem("mobile-flashcards").then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: "Review your flashcards today",
    body: "Don't forget to review your flashcards today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem("mobile-flashcards")
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            // Set the notification time for 5PM every day, starting tomorrow
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(17, 0, 0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem("mobile-flashcards", JSON.stringify(true));
          }
        });
      }
    });
}
