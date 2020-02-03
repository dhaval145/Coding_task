import React from 'react';
import './App.css';
import RewardsPoints from './componenets/RewardsPoints';
import { UserInfo } from './componenets/UserInfo';

function App() {
  return (
    <div className="App">
      <RewardsPoints UserInfo={UserInfo}/>
    </div>
  );
}

export default App;
