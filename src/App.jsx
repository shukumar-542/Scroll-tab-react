import  { useRef } from 'react';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const scrollableContainerRef = useRef(null);

  const [isRightArrowHidden, setIsRightArrowHidden] = useState(false);
  const [isLeftArrowHidden, setIsLeftArrowHidden] = useState(true);

  useEffect(() => {
    updateRightArrowVisibility();

    const handleScroll = () => {
      updateRightArrowVisibility();
    };

    scrollableContainerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      scrollableContainerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updateRightArrowVisibility = () => {
    const container = scrollableContainerRef.current;
    const isHidden = container.scrollLeft >= container.scrollWidth - container.clientWidth;
    const isLeftHidden = container.scrollLeft === 0;
    setIsRightArrowHidden(isHidden);
    setIsLeftArrowHidden(isLeftHidden);
  };

  const handleRightArrow = ()=>{
    console.log(scrollableContainerRef.current.scrollLeft);
    const currentScrollLeft = scrollableContainerRef.current.scrollLeft;
    scrollableContainerRef.current.scrollLeft = currentScrollLeft + 200;
  }
  // console.log(isRightArrowHidden);
  const handleLeftArrow = () => {
    const container = scrollableContainerRef.current;
    const currentScrollLeft = container.scrollLeft;

    // Set the new scroll position (adjust the value as needed)
    container.scrollLeft = currentScrollLeft - 100;
  };
  return (
    <>
      <div className='scrollable-tab-container' >
        <div  className={`left-arrow ${isLeftArrowHidden ? 'hidden' : 'active'}`} onClick={handleLeftArrow} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

        </div>
        <ul  ref={scrollableContainerRef} >
          <li>
            <a href="" className='active'>all</a>
          </li>
          <li>
            <a href="" >live</a>
          </li>
          <li>
            <a href="" >Gaming</a>
          </li>
          <li>
            <a href="" >Eating</a>
          </li>
          <li>
            <a href="" >mixin control</a>
          </li>
          <li>
            <a href="" >Sleeping</a>
          </li>
          <li>
            <a href="" >Watching</a>
          </li>
          <li>
            <a href="" >Eating</a>
          </li>
          <li>
            <a href="" >showing</a>
          </li>

        </ul> 
        <div className={`right-arrow ${isRightArrowHidden ? 'hidden' : 'active'}`} onClick={handleRightArrow}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
    </>
  )
}

export default App
