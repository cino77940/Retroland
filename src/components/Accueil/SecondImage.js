import { Parallax } from 'react-parallax';
import Consoles from "./img/Consoles.png";

const SecondImage = () => (
    <Parallax className='image' bgImage={Consoles} strength={400}>
        <div className='content'>
            <span className='img-text'>Emulateurs</span>
        </div>
    </Parallax>

);

export default SecondImage;