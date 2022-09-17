import * as Notifications from 'expo-notifications'

export async function getPushNotificationToken() {
  const { granted } = await Notifications.getPermissionsAsync()

  if (!granted) {
    await Notifications.requestPermissionsAsync()
  }

  const pushToken = await Notifications.getExpoPushTokenAsync()

  // eslint-disable-next-line no-console
  console.log('Notification token: ' + pushToken.data)

  return pushToken.data
}
