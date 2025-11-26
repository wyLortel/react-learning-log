import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(); //dom을 건드려서 비디오 속도 변경해야함 아직 빈상자

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id='hero'>
      <div>
        <h1>MacBook Pro</h1>
        <img src='/title.png' alt='MacBook Title' />
      </div>

      <video
        ref={videoRef}
        src='/videos/hero.mp4'
        autoPlay
        muted
        playsInline
      ></video>

      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
}

export default Hero;
