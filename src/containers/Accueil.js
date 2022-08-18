import React, { Component } from 'react'
import FirstImage from '../components/Accueil/FirstImage';
import SecondImage from '../components/Accueil/SecondImage';
import TextBox1 from '../components/Accueil/TextBox1';
import TextBox2 from '../components/Accueil/TextBox2';
import ThirdImage from '../components/Accueil/ThirdImage';
import TextBox3 from '../components/Accueil/TextBox3';

class Accueil extends Component {
  render() {
    return (
      <div>
      <FirstImage/>
      <TextBox1/>
      <SecondImage/>
      <TextBox2/>
      <ThirdImage/>
      <TextBox3/>

      
      </div>
    )
  }
}

export default Accueil;

