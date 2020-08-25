import React from 'react';
import liff from '@line/liff';
import logo from './logo.svg';
import './App.css';

function App() {
  const sendMessage = () => {
    liff.init({liffId: process.env.LIFF_ID as string})
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({})
        }
        liff.sendMessages([{
            'type': 'text',
            'text': "You've successfully sent a message! Hooray!"
        }]).then(function() {
            window.alert('Message sent');
        }).catch(function(error) {
            window.alert('Error sending message: ' + error);
        });
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className="button" onClick={sendMessage}>button</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
