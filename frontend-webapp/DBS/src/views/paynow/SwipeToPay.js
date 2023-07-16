import React, { useState, useRef, useEffect } from 'react';
import '../../components/styles/paynow/SwipeToPayStyles.css';

const SwipeToPay = () => {
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0 });
  const [containerBounds, setContainerBounds] = useState({});
  const [maxbuttonWidth, setMaxButtonWidth] = useState({x:0})
  

  useEffect(() => {
    const buttonElement = buttonRef.current;
    const containerElement = containerRef.current;
    const windowWidth = window.innerWidth;

    const handleTouchStart = (event) => {
      event.preventDefault();
      setIsDragging(true);
      setDragStartPosition({ x:0});
    };

    const handleTouchMove = (event) => {
      if (!isDragging) return;
      const mouseX = event.touches[0].clientX;

      const containerRect = containerBounds;
      const containerWidth = containerRect.width - buttonElement.offsetWidth - windowWidth * 0.02;
      setMaxButtonWidth({x:containerWidth});
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
  }, [isDragging, dragStartPosition.x, containerBounds.width]);


  useEffect(() => {
    if (!isDragging && buttonPosition.x >0 && buttonPosition.x < maxbuttonWidth.x) {
      const animationDuration = 0.15;
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
    else if (buttonPosition.x == maxbuttonWidth.x) {
        console.log("swiped to pay")
    }
  }, [isDragging, buttonPosition.x]);


  const shouldHideText = buttonPosition.x > containerBounds.width / 3;

  
  return (
    <div className="BasedContainer" ref={containerRef}>
      <button className="SwiperButton" ref={buttonRef} style={{ left: `${buttonPosition.x}px` }}>
        <img src="/assets/expand.png" className="swipeimage" alt="Swipe Icon" />
      </button>
      <div className="SwiperButton2" style={{ width: `${buttonPosition.x}px` }}></div>
      <p className="swipertext" style={{ opacity: shouldHideText ? 0 : 1 }}>Swipe To Pay</p>
    </div>
  );
};

export default SwipeToPay;
