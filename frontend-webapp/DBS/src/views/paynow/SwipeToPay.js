import React, { useState, useRef, useEffect } from 'react';
import '../../components/styles/paynow/SwipeToPayStyles.css';

const SwipeToPay = ({ handleSubmit }) => {
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0 });
  const [containerBounds, setContainerBounds] = useState({});
  const [maxbuttonWidth, setMaxButtonWidth] = useState({x:1000})
  const [paymentTriggered, setPaymentTriggered] = useState(false)
  const [sliderinput, setSliderInput] = useState('')

  useEffect(() => {
    const buttonElement = buttonRef.current;
    const containerElement = containerRef.current;
    const windowWidth = window.innerWidth;
    const containerRect = containerBounds;
    const containerWidth = containerRect.width - buttonElement.offsetWidth - windowWidth * 0.02;
    setMaxButtonWidth({x:containerWidth});
  
    const handleTouchStart = (event) => {
      event.preventDefault();
      setIsDragging(true);
      setDragStartPosition({ x:0});
    };

    const handleTouchMove = (event) => {
      if (!isDragging) return;
      const mouseX = event.touches[0].clientX;
      const newButtonX = mouseX - containerRect.left - buttonElement.offsetWidth / 2;
      const constrainedX = Math.max(0, Math.min(newButtonX, containerWidth));
      setButtonPosition({ x: constrainedX });
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    buttonElement.addEventListener('touchstart', handleTouchStart);
    buttonElement.addEventListener('touchmove', handleTouchMove);
    buttonElement.addEventListener('touchend', handleTouchEnd);

    const updateContainerBounds = () => {
      setContainerBounds(containerElement.getBoundingClientRect());
    };

    window.addEventListener('resize', updateContainerBounds);
    updateContainerBounds();

    return () => {
      buttonElement.removeEventListener('touchstart', handleTouchStart);
      buttonElement.removeEventListener('touchmove', handleTouchMove);
      buttonElement.removeEventListener('touchend', handleTouchEnd);

      window.removeEventListener('resize', updateContainerBounds);
    };
  }, [sliderinput, isDragging, dragStartPosition.x, containerBounds.width]);


  useEffect(() => {
    console.log(buttonPosition, isDragging, maxbuttonWidth, paymentTriggered)
    if (!isDragging && buttonPosition.x >0 && buttonPosition.x < maxbuttonWidth.x) {
      const animationDuration = 0.3;
      const animationDelay = 10;

      const step = buttonPosition.x / (animationDuration * 1000 / animationDelay);

      const animateBackToStart = () => {
        setButtonPosition((prevPosition) => {
          const newX = Math.max(0, prevPosition.x - step);
          if (newX <= 0) {
            return { x: 0 };
          }
          return { x: newX };
        });
      };

      const animationInterval = setInterval(animateBackToStart, animationDelay);

        return () => {
          clearInterval(animationInterval);
        };
      } 
      else if (buttonPosition.x === maxbuttonWidth.x && !paymentTriggered) {
          console.log("swiped to pay");
          setPaymentTriggered(true)
          setTimeout(() => {
              handleSubmit();
            }, 500)
          }
    }, [isDragging, sliderinput]);


  const shouldHideText = buttonPosition.x > containerBounds.width / 3;

  const handleSliderInput = (event) => {
    const value = event.target.value
    if (value == 100){
      setButtonPosition(maxbuttonWidth)
    }
    setSliderInput(value)
  }
  
  return (
    <div>
      <div className="BasedContainer" ref={containerRef}>
        <button className="SwiperButton" id="swiperbutton" ref={buttonRef} style={{ left: `${buttonPosition.x}px` }} draggable='true'>
          <img src="/assets/expand.png" className="swipeimage" alt="Swipe Icon" />
        </button>
        <div className="SwiperButton2" style={{ width: `${buttonPosition.x}px` }}></div>
        <p className="swipertext" style={{ opacity: shouldHideText ? 0 : 1 }}>Swipe To Pay</p>
        <div className='endButton' id='endbutton'></div>
      </div>
      <div>
        <input type='numeric' id='inputslider' className='inputsliderprop' value={sliderinput} onInput={handleSliderInput}/>
      </div>
    </div>
  );
};

export const isDragging = 'drag';

export default SwipeToPay;
