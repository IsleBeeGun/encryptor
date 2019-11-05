import React from 'react';
import './App.scss';
import MainHeader from '../MainHeader/MainHeader';
import Encryptor from '../Encryptor/Encryptor';
import MainFooter from '../MainFooter/MainFooter';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <MainHeader />
        <Encryptor />
        <MainFooter />
      </div>
    );
  }
}
export default App;
