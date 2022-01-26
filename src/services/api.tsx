import axios from 'axios'

const EXPO_SERVICE_URL = 'https://api.expo.dev/v2/push/send'
export const sendPushNotifications = async (token: string, title: string, body: string) => {
  const message = {
    to: token,
    sound: 'default',
    title,
    body,
  }
  await axios.post(EXPO_SERVICE_URL, message).catch(err => console.error(err))
}
