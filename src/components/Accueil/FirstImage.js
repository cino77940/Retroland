import { Parallax } from 'react-parallax';
import Nintendo from "./img/Nintendo.jpg";

const FirstImage = () => (
    <Parallax className='image' bgImage={Nintendo} strength={400}>
        <div className='content'>
            <span className='img-text'>RETROLAND</span>
        </div>
    </Parallax>

);

export default FirstImage;

