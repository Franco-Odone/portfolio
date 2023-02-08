import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import BgLogo from '../../../assets/images/LogoUno.png';
import './logo.scss';

const Logo = () => {
  // background
  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1,
    });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.5,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={BgLogo}
        alt="JavaScript,  Developer"
      />
    </div>
  );
};

export { Logo };
