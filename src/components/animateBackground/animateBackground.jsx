import Image from "next/image";


export default function AnimateBackground() {
    return (
      <div style={{ top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh' }}>
        <svg width="100%" height="100%">
          <defs>
            <filter id="wave">
              <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="2" result="turbulence" />
              <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="25" xChannelSelector="R" yChannelSelector="G" />
              <animate
                xlinkHref="#wave feTurbulence"
                attributeName="baseFrequency"
                values="0.015; 0.02; 0.015"
                dur="10s"
                repeatCount="indefinite"
              />
            </filter>
          </defs>
  
          <image
            href="/lights.svg"
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            filter="url(#wave)"
          />
        </svg>
      </div>
    );
  }