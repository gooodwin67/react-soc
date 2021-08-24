import React from 'react';
import './App.css'
import { Profile } from './components/profile/Profile';
import { Sidebar } from './components/sidebar/Sidebar';
import { Header } from './components/header/Header';
import MessagesContainer from './components/messages/MessagesContainer';
import UsersContainer from './components/users/UsersContainer';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    //console.log(this)
    return (
      <BrowserRouter>
        <div className='app-wrapper'>

          <header>
            <Header />
          </header>

          <main>

            {<Sidebar />}


            <div className='content'>
              <Route path='/profile' render={() => <Profile />} />
              <Route path='/messages' render={() => <MessagesContainer />} />
              <Route path='/users' component={UsersContainer} />
              <Route path='/news' component={News} />

              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' component={Settings} />


            </div>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;