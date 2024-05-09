import React, { useEffect } from 'react';
import '../../styles/ParallaxText.css'; // Создайте файл стилей ParallaxText.css и определите классы стилей

const Mrachneemrachnogo = () => {
  const parallaxScroll = () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.scroll-text span').forEach(span => {
      const speed = parseFloat(span.dataset.speed);
      span.style.transform = `translate3d(0, ${scrolled * -speed}px, 0)`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll);

    return () => {
      window.removeEventListener('scroll', parallaxScroll);
    };
  }, []);

  return (
      <span className="scroll-text">
        <span className="fl y3" data-speed="0.3">Т</span>
        <span className="fl y1" data-speed="0.15">ы&nbsp;</span>
        <span className="fl y4" data-speed="0.4">м</span>
        <span className="fl y2" data-speed="0.25">р</span>
        <span className="fl y4" data-speed="0.4">а</span>
        <span className="fl y3" data-speed="0.3">ч</span>
        <span className="fl y5" data-speed="0.5">н</span>
        <span className="fl y2" data-speed="0.25">е</span>
        <span className="fl y4" data-speed="0.4">е&nbsp;</span>
        <span className="fl y6" data-speed="0.6">м</span>
        <span className="fl y1" data-speed="0.15">р</span>
        <span className="fl y4" data-speed="0.4">а</span>
        <span className="fl y2" data-speed="0.25">ч</span>
        <span className="fl y5" data-speed="0.5">н</span>
        <span className="fl y2" data-speed="0.25">о</span>
        <span className="fl y3" data-speed="0.3">г</span>
        <span className="fl y1" data-speed="0.15">о&nbsp;</span>
        <span className="fl y4" data-speed="0.4">м</span>
        <span className="fl y2" data-speed="0.25">о</span>
        <span className="fl y4" data-speed="0.4">р</span>
        <span className="fl y3" data-speed="0.3">о</span>
        <span className="fl y5" data-speed="0.5">к</span>
        <span className="fl y2" data-speed="0.25">а</span>
        <br/>
        <span className="fl y2" data-speed="0.25">т</span>
        <span className="fl y4" data-speed="0.4">е</span>
        <span className="fl y3" data-speed="0.3">м</span>
        <span className="fl y5" data-speed="0.5">н</span>
        <span className="fl y2" data-speed="0.25">е</span>
        <span className="fl y4" data-speed="0.4">е&nbsp;</span>
        <span className="fl y6" data-speed="0.6">т</span>
        <span className="fl y1" data-speed="0.15">е</span>
        <span className="fl y4" data-speed="0.4">м</span>
        <span className="fl y2" data-speed="0.25">н</span>
        <span className="fl y5" data-speed="0.5">н</span>
        <span className="fl y2" data-speed="0.25">о</span>
        <span className="fl y3" data-speed="0.3">г</span>
        <span className="fl y1" data-speed="0.15">о&nbsp;</span>
        <span className="fl y4" data-speed="0.4">м</span>
        <span className="fl y2" data-speed="0.25">е</span>
        <span className="fl y4" data-speed="0.4">с</span>
        <span className="fl y3" data-speed="0.3">я</span>
        <span className="fl y5" data-speed="0.5">ц</span>
        <span className="fl y2" data-speed="0.25">а</span>
        <br/>
        <span className="fl y3" data-speed="0.3">Т</span>
        <span className="fl y1" data-speed="0.15">ы&nbsp;</span>
        <span className="fl y4" data-speed="0.4">ч</span>
        <span className="fl y2" data-speed="0.25">е</span>
        <span className="fl y4" data-speed="0.4">р</span>
        <span className="fl y5" data-speed="0.5">н</span>
        <span className="fl y2" data-speed="0.25">е</span>
        <span className="fl y4" data-speed="0.4">е&nbsp;</span>
        <span className="fl y6" data-speed="0.6">ч</span>
        <span className="fl y1" data-speed="0.15">е</span>
        <span className="fl y4" data-speed="0.4">р</span>
        <span className="fl y5" data-speed="0.5">н</span>
        <span className="fl y2" data-speed="0.25">о</span>
        <span className="fl y3" data-speed="0.3">г</span>
        <span className="fl y1" data-speed="0.15">о&nbsp;</span>
        <span className="fl y4" data-speed="0.4">в</span>
        <span className="fl y2" data-speed="0.25">о</span>
        <span className="fl y4" data-speed="0.4">р</span>
        <span className="fl y3" data-speed="0.3">о</span>
        <span className="fl y5" data-speed="0.5">н</span>
        <span className="fl y2" data-speed="0.25">а</span>
        <br/>
        <span className="fl y2" data-speed="0.25">с</span>
        <span className="fl y5" data-speed="0.5">т</span>
        <span className="fl y4" data-speed="0.4">р</span>
        <span className="fl y3" data-speed="0.3">а</span>
        <span className="fl y3" data-speed="0.3">ш</span>
        <span className="fl y5" data-speed="0.5">н</span>
        <span className="fl y2" data-speed="0.25">е</span>
        <span className="fl y4" data-speed="0.4">е&nbsp;</span>
        <span className="fl y6" data-speed="0.6">т</span>
        <span className="fl y1" data-speed="0.15">я</span>
        <span className="fl y4" data-speed="0.4">ж</span>
        <span className="fl y2" data-speed="0.25">к</span>
        <span className="fl y5" data-speed="0.5">о</span>
        <span className="fl y1" data-speed="0.15">й&nbsp;</span>
        <span className="fl y4" data-speed="0.4">д</span>
        <span className="fl y2" data-speed="0.25">е</span>
        <span className="fl y4" data-speed="0.4">п</span>
        <span className="fl y3" data-speed="0.3">р</span>
        <span className="fl y5" data-speed="0.5">е</span>
        <span className="fl y2" data-speed="0.25">с</span>
        <span className="fl y4" data-speed="0.4">с</span>
        <span className="fl y3" data-speed="0.3">и</span>
        <span className="fl y3" data-speed="0.3">и</span>
      </span>
  );
};

export default Mrachneemrachnogo;
