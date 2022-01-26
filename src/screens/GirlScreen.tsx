import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'
import styled from 'styled-components'
import { Page, Heading } from '../components'
import { useState } from 'react'
import { sendPushNotifications } from '../services/api'
import Clipboard from 'expo-clipboard'

const SubmitButton = styled(TouchableOpacity)<{ color?: string }>`
  background-color: ${p => p.color || 'red'};
  flex: 48% 0 0;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  height: 150px;
  border-radius: 8px;
`
const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8px;
`
const SubmitButtonText = styled(Text)`
  color: white;
  font-size: 18px;
`

const GirlScreen: React.FC = () => {
  const [token, setToken] = useState(undefined)
  const [tokenInput, setTokenInput] = useState('')

  const handleCallBoy = (title: string, body: string) => {
    sendPushNotifications(token, title, body).then(r => console.log('hi'))
  }
  return (
    <View>
      <Header centerComponent={{ text: 'Cho Bạn Nữ', style: { color: '#fff' } }} />
      <Page>
        {token ? (
          <View>
            <Text>
              Mã số gấu của bạn là {'\n'}
              {token}
            </Text>
          </View>
        ) : (
          <View>
            <Input
              onChangeText={v => setTokenInput(v)}
              value={tokenInput}
              label={'Mã Số Gấu'}
              placeholder={'Nhập mã số gấu đực vào đây'}
            />
            <Button onPress={() => setToken(tokenInput)} title={'Xác Nhận Mã Số'} />
          </View>
        )}

        {token && (
          <View style={{ marginTop: 20 }}>
            <Heading>Triệu Hồi Gấu Đực</Heading>
            <ButtonContainer>
              <SubmitButton
                onPress={() => handleCallBoy('Gấu Gọi', 'Nhớ Anh Quá')}
                color={'#e74c3c'}>
                <SubmitButtonText>Nhớ Anh Quá</SubmitButtonText>
              </SubmitButton>
              <SubmitButton
                onPress={() => handleCallBoy('Gấu Gọi', 'Thèm Tà Từa')}
                color={'#2980b9'}>
                <SubmitButtonText>Thèm Tà Từa</SubmitButtonText>
              </SubmitButton>
              <SubmitButton
                onPress={() => handleCallBoy('Gấu Gọi', 'Em Lạnh Quá')}
                color={'#2ecc71'}>
                <SubmitButtonText>Em Lạnh Quá</SubmitButtonText>
              </SubmitButton>
              <SubmitButton
                onPress={() => handleCallBoy('Gấu Gọi', 'Em Đói Quá')}
                color={'#f1c40f'}>
                <SubmitButtonText>Em Đói Quá</SubmitButtonText>
              </SubmitButton>
            </ButtonContainer>
          </View>
        )}
      </Page>
    </View>
  )
}
export default GirlScreen
