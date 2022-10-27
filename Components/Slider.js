import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Carousel1 from './images/carousel1.png';
import Carousel2 from './images/carousel2.png';
import Carousel3 from './images/carousel3.png';

function Slider() {
  return (
    <Carousel variant="dark" interval={3000}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;