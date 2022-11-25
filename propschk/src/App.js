// import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

import Me from '../src/profile/img/me.jpg'

function App() {
  return (
    <div className="App">
      <Profile  fullName="Okonta Chukwuebuka" profession="Seeking for a job" bio="FRESH NIGGA">
    <img src={Me} width={250} height={250} alt=''/>
    </Profile>
    </div>
  );
}

export default App;
