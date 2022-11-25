import firebase from 'firebase'

import React, { useEffect, useState } from 'react'

import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import {
  NavigationContainer,
  DefaultTheme,
  useFocusEffect
} from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons, AntDesign } from '@expo/vector-icons'

import { defined } from 'react-native-reanimated'

function HomeScreen({ route, navigation }) {
  const [name, setName] = useState('')

  const [definedName, setDefinedName] = useState(false)

  if (!definedName) {
    return (
      <View
        style={{
          backgroundColor: 'rgb(30,30,30)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>
          Seja bem-vindo! Por favor escolha um nome:
        </Text>

        <TextInput
          onChangeText={text => setName(text)}
          style={{
            margin: 10,
            width: '90%',
            height: 40,
            backgroundColor: 'white',
            paddingLeft: 10
          }}
        ></TextInput>

        <TouchableOpacity onPress={() => setDefinedName(true)}>
          <View style={{ backgroundColor: '#069', padding: 10, width: '90%' }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Trocar meu nome!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View
        style={{
          backgroundColor: 'rgb(30,30,30)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white' }}>Seja Bem-vindo ao Chat {name}</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Chat', { userName: name })}
        >
          <View style={{ backgroundColor: '#069', padding: 10, width: '90%' }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Ir ao Chat
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

function ChatScreen({ route, navigation }) {
  const [rooms, setRooms] = useState([])
  const [nome, setNome] = useState('')

  useFocusEffect(() => {
    if (route.params && route.params.userName != undefined) {
      alert('Seja bem-vindo ao chat: ' + route.params.userName)
    } else {
      navigation.navigate('Home')
    }
  }, [])

  useEffect(() => {
    const unsub = db.collection('rooms').onSnapshot(function (snapshot) {
      setRooms(
        snapshot.docs.map(val => {
          return {
            id: val.id,
            data: val.data()
          }
        })
      )
    })

    return () => {
      unsub()
    }
  })
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(30,30,30)',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between'
        }}
      >
        <Text style={{ color: 'rgb(52,119,235)', fontSize: 17 }}>
          BroadCast List
        </Text>
        <Text style={{ color: 'rgb(52,119,235)', fontSize: 17 }}>
          Nova sala
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        {rooms.map(function (val) {
          return (
            <View
              style={{
                borderBottomColor: 'rgba(255,255,255,0.4)',
                borderBottomWidth: 1,
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'space-between'
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Room', { chatName: val.id })
                }
              >
                <Text style={{ color: 'white', fontSize: 22 }}>{val.id}</Text>
              </TouchableOpacity>
              <Text style={{ color: 'white' }}>
                <Ionicons size={18} name="ios-information-circle" />
                Disponível
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const HomeStack = createStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

const ChatStack = createStackNavigator()

function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <HomeStack.Screen name="Chat" component={ChatScreen} />
    </ChatStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const MyTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,

    background: 'rgb(255,255,255)',

    card: 'rgb(40,40,40)',

    text: 'rgb(255,255,255)'
  }
}

export default function App() {
  useEffect(() => {
    console.disableYellowBox = true
  }, [])

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        lazy={false}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Salas') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list'
            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-map' : 'ios-map'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: 'rgb(52, 119, 235)',

          inactiveTintColor: 'white'
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />

        <Tab.Screen name="Salas" component={ChatStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
