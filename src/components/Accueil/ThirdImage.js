import { Parallax } from 'react-parallax';
import Roms from "./img/Roms.jpg";

const ThirdImage = () => (
    <Parallax className='image' bgImage={Roms} strength={400}>
        <div className='content'>
            <span className='img-text'>Roms</span>
        </div>
    </Parallax>

);

export default ThirdImage;