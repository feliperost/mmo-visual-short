"use client"

import { useState, useEffect } from 'react';

export default function Void() {
  const [size, setSize] = useState(50); // shape starting size (in pixels)

  useEffect(() => {
    const handleScroll = (event: any) => {
      // sets the shape size based on scroll. adjust parameters to change speed
      setSize((prevSize) => Math.max(prevSize + event.deltaY * 0.5, 50)); 
    };

    window.addEventListener('wheel', handleScroll);

    // removes event listener when component is unmounted
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div
      className="cursor-void animate-gradient mx-auto transition-all duration-100"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}





// export default function Void() {
//     return (
//       <>
//         <div className="animate-gradient bg-red-500 text-white font-bold py-2 px-4 rounded">
//             {/* idea: scrolling gets you "closer" to the shape. when it fills the screen, something happens. */}
//         </div>
//       </>
//     )

//   }