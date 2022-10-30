import firebase from 'firebase'

class Fire {
  constructor() {
    this.init()
    this.checkAuth()
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBPeEXxqagF08WXYMPBAq3ctwXw_lHd1_g',
        authDomain: 'chat-airbnpets.firebaseapp.com',
        projectId: 'chat-airbnpets',
        storageBucket: 'chat-airbnpets.appspot.com',
        messagingSenderId: '620457344',
        appId: '1:620457344:web:245404bfa6a54ec2166565'
      })
    }
  }

  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        firebase.auth().signInAnonymously()
      }
    })
  }

  send = messahes => {
    messages.forEach(item => {
      const message = {
        text: item,
        text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      }

      this.db.push(message)
    })
  }

  parse = message => {
    const { user, text, timestamp } = message.val()
    const { key: _id } = message
    const createdAt = new Date(timestamp)

    return {
      _id,
      createdAt,
      text,
      user
    }
  }

  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
  }

  off() {
    this.db.off()
  }

  get db() {
    return firebase.database().ref('messages')
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid
  }
}

export default new Fire()
