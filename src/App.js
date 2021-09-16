import React from 'react';
import './App.css'
import ProfileContainer from './components/profile/ProfileContainer';
import { Sidebar } from './components/sidebar/Sidebar';
import MessagesContainer from './components/messages/MessagesContainer';
import UsersContainer from './components/users/UsersContainer';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';

class App extends React.Component {
  render() {
    //console.log(this)
    return (
      <BrowserRouter>
        <div className='app-wrapper'>

          <header>
            <HeaderContainer />
          </header>

          <main>

            {<Sidebar />}


            <div className='content'>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
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