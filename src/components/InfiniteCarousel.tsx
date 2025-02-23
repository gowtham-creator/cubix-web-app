"use client";

import Image from "next/image";

const InfiniteCarousel = () => {
  // Sample logos - replace with your actual logo URLs
  const logos = [
    "/atlassian.png",
    "/digital-ocean.png",
    "/google-devs.png",
    "/google-devs.png",
    "/google-devs.png",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white py-4">
      <div className="flex">
        {/* First set of logos */}
        <div className="flex animate-logo-scroll">
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="w-48 h-24 mx-8 flex items-center justify-center opacity-0 animate-logo-fade"
              style={{
                animationDelay: `${index * 0.5}s`,
                animationFillMode: "forwards",
              }}
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={200}
                height={100}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplicated set for seamless loop */}
        <div className="flex animate-logo-scroll">
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="w-48 h-24 mx-8 flex items-center justify-center opacity-0 animate-logo-fade"
              style={{
                animationDelay: `${index * 0.5}s`,
                animationFillMode: "forwards",
              }}
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={200}
                height={100}
                className="max-w-full max-h-full object-contain"
              />{" "}
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes logo-fade {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-logo-scroll {
          animation: logo-scroll 20s linear infinite;
        }

        .animate-logo-fade {
          animation: logo-fade 0.5s ease-out;
        }

        /* Add fade out effect when logos reach the end */
        .animate-logo-scroll:hover {
          animation-play-state: paused;
        }

        /* Fade edges */
        .relative::before,
        .relative::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          pointer-events: none;
          z-index: 2;
        }

        .relative::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .relative::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }
      `}</style>
    </div>
  );
};

export { InfiniteCarousel };
