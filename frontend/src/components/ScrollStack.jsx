import React from 'react';

export const ScrollStackItem = ({ children, index, image }) => {
  const peekHeight = 60; 
  const headerHeight = 160; 
  
  return (
    <div 
      className="group w-full h-[320px] md:h-[380px] sticky top-5 rounded-[30px] p-8 md:p-10 shadow-2xl border border-white/5 transition-all duration-500 overflow-hidden cursor-pointer"
      style={{
        top: `${headerHeight + 20 + index * peekHeight}px`,
        zIndex: index + 10,
        transform: `scale(${1 - (index * 0.015)})`,
        backgroundColor: `rgb(${18 + index * 8}, ${18 + index * 8}, ${18 + index * 8})`,
      }}
    >
      
      {image && (
        <div 
          className="absolute inset-0 w-full h-full opacity-20 md:opacity-0 lg:opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)', // Niche ki taraf blur
          }}
        />
      )}

      
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};

const ScrollStack = ({ children }) => {
  return (
    <div className="relative w-full flex flex-col items-center mt-8">
      {React.Children.map(children, (child, index) => 
        React.cloneElement(child, { index })
      )}
      <div className="h-[20vh] w-full" />
    </div>
  );
};

export default ScrollStack;