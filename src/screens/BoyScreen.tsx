import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Header } from 'react-native-elements'
import { Heading, Page } from '../components'
import * as Notifications from 'expo-notifications'
import Clipboard from 'expo-clipboard';
import { useState } from 'react'
async function getNotificationToken() {
  const { status } = await Notifications.getPresentedNotificationsAsync()
  if (status !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    if (status !== 'granted') {
      alert('failed to get notification token')
      return
    }
  }
  const tokenData = await Notifications.getExpoPushTokenAsync()
  const token = tokenData.data
  return token
}
const BoyScreen: React.FC = () => {
  const [token, setToken] = useState(undefined)

  const handleCopyToken = () => {
    if (token) {
      Clipboard.setString(token)
    }
  }
  return (
    <View>
      <Header centerComponent={{ text: 'Cho Bạn Nam', style: { color: '#fff' } }} />
      <Page>
        {token && (
          <View>
            <Text>Mã Số Gấu Của Bạn Là</Text>
            <Text onPress={handleCopyToken} style={styles.token}>
              {token}
            </Text>
          </View>
        )}
        {!token && (
          <View>
            <Heading>Bạn chưa có mã số gấu!</Heading>
            <Button
              onPress={async () => {
                const tk = await getNotificationToken()
                setToken(tk)
              }}
              title={'Bấm để lấy mã số'}
            />
          </View>
        )}
      </Page>
    </View>
  )
}
const styles = StyleSheet.create({
  token: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
})
export default BoyScreen
