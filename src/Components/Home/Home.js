import React, {useState} from 'react';
import './Home.css';
import video from '../../Assets/background.mp4';
import { IntersectionObserver } from 'react-intersection-observer';

function Home() {
  const [inView, setInView] = useState(false);
  // useEffect(() => {
  //   document.body.style.backgroundAttachment = 'fixed';
  // }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const video = document.querySelector('.background');
//       const scrollPosition = window.pageYOffset;
//       video.style.top = `${scrollPosition}px`;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

  return (
    <div className="App">
       <IntersectionObserver onChange={setInView}>
        <video className={inView ? 'videoTag fixed' : 'videoTag'} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </IntersectionObserver>
      <div className="content">
        <p>hai this is achappan </p>
      </div>
    </div>
  );
}

export default Home;


