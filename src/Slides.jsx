import Carousel from 'react-bootstrap/Carousel';
import styles from './carousel.module.css'

function Slides() {
  return (
    <div>
     <Carousel controls={false} touch={true} slide={false} >
      <Carousel.Item interval={1500}>
          <div className={styles.swSlide}>
              <h2>Start your <br/>journey with us</h2>
              <p >Discover Your Ideal College and Course Now: Uncover the Perfect Match for Your Educational Journey!</p>
              <img  src='/assets/graduation.svg'/>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
          <div className={styles.swSlide}>
              <h2>Start your <br/>journey with us</h2>
              <p >Discover Your Ideal College and Course Now: Uncover the Perfect Match for Your Educational Journey!</p>
              <img  src='/assets/graduation.svg'/>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
          <div className={styles.swSlide}>
              <h2>Start your <br/>journey with us</h2>
              <p >Discover Your Ideal College and Course Now: Uncover the Perfect Match for Your Educational Journey!</p>
              <img  src='/assets/graduation.svg'/>
          </div>
      </Carousel.Item>
      
    
    </Carousel>
    </div>
  )
}

export default Slides