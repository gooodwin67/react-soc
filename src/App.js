import React from 'react';
import './App.css'
import { Content } from './components/Content';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className = 'app-wrapper'>
        <header>
          <Header />
        </header>
        <main>
          <nav className = 'nav'>
            <Navigation />
          </nav>
          <div className = 'content'>
            <Content />
          </div>
        </main>
      </div>
    )
  }
}

export default App;