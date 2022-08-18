import React, { Component } from 'react'
import ImgFooter from './ImgFooter/FooterLogo.png'

class Footer extends Component {
  render() {
    return (

<footer>
<div>
<p><img src={ImgFooter} className="footerLogo" alt="footerLogo" /> Cüneyt <img src={ImgFooter} className="footerLogo" alt="footerLogo" /></p>
</div>
</footer>
    );
}
}
export default Footer; 

