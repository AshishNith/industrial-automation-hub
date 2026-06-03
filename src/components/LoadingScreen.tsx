import React, { useEffect, useState } from 'react';
import logo from "@/assets/Logo.png";

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing PLC core...');

  // Update diagnostic text based on loading progress
  useEffect(() => {
    if (progress < 25) {
      setStatusText('LOAD_SYS_DRIVERS: OK...');
    } else if (progress < 50) {
      setStatusText('CONNECTING_ETHERNET_IP_BUS...');
    } else if (progress < 75) {
      setStatusText('CALIBRATING_ROBOTIC_ARM_JOINTS...');
    } else if (progress < 95) {
      setStatusText('SYNCHRONIZING_SCADA_TELEMETRY...');
    } else {
      setStatusText('HMI_INTERFACE_READY. STARTING...');
    }
  }, [progress]);

  // Simulate progress bar loading
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.floor(Math.random() * 8) + 3;
        if (prev + increment >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070b12] text-white">
      {/* Laser scan animation stylesheet */}
      <style>{`
        @keyframes laser-scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .laser-line {
          animation: laser-scan 2.5s linear infinite;
        }
      `}</style>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Main Container */}
      <div className="w-[90%] max-w-lg flex flex-col items-center relative z-10">
        
        {/* HUD Frame containing the Logo */}
        <div className="relative w-full py-10 px-8 border border-white/5 bg-slate-950/60 backdrop-blur-md rounded-2xl flex justify-center items-center overflow-hidden mb-8 shadow-2xl">
          {/* Blueprint Corner Ticks */}
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-accent/40" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-accent/40" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-accent/40" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-accent/40" />
          
          {/* Moving Laser Scan Line */}
          <div className="laser-line absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent pointer-events-none shadow-[0_0_8px_rgba(249,115,22,0.8)]" />

          {/* Logo - using height w-auto to prevent squishing */}
          <img
            src={logo}
            alt="A Robotics Services Logo"
            className="h-16 sm:h-20 w-auto object-contain relative z-10"
          />
        </div>

        {/* Console Text Status */}
        <div className="w-full font-mono text-xs text-slate-400 mb-6 flex flex-col items-center gap-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">Diagnostic Console</span>
          <span className="text-accent animate-pulse font-bold tracking-wider">{statusText}</span>
        </div>

        {/* Progress bar wrapper */}
        <div className="w-full max-w-sm flex flex-col items-center">
          <div className="w-full h-1.5 bg-slate-900 border border-white/5 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150 ease-out shadow-[0_0_8px_rgba(249,115,22,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-xs text-slate-400 tracking-widest font-bold">
            [ {String(progress).padStart(3, '0')}% INITIALIZED ]
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
