import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
      <div className="relative flex flex-col items-center">
        {/* Main loading animation */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div 
            className="w-24 h-24 border-4 border-slate-600 rounded-full"
            style={{
              animation: 'spin 3s linear infinite'
            }}
          >
            <div className="absolute inset-2 border-2 border-blue-500 rounded-full animate-pulse" />
          </div>
          
          {/* Inner gear */}
          <div className="absolute inset-3 w-18 h-18 animate-spin">
            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400">
              <path
                fill="currentColor"
                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
              />
            </svg>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center flex gap-4">
          <h2 className="text-2xl font-light text-white mb-2 tracking-wide">
            INITIALIZING
          </h2>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75" />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150" />
          </div>
        </div>

        {/* Circuit lines decoration */}
        <div className="absolute -top-20 -left-20 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
            <path
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              d="M20,20 L80,20 L80,40 L60,40 M40,40 L40,80 M60,60 L80,60"
            />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="80" cy="60" r="2" fill="currentColor" />
            <circle cx="40" cy="80" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
