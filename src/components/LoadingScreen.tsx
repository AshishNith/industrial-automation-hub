import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  // Simulate a fluid progress bar loading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Add random increments for a realistic loading feel
        const increment = Math.floor(Math.random() * 5) + 2;
        if (prev + increment >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      {/* Premium Tech Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Animated Core Rings */}
      <div className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 mb-10">
        {/* Outer track */}
        <div className="absolute inset-0 rounded-full border-[3px] border-border/50" />
        {/* Outer spinning dash */}
        <div
          className="absolute inset-0 rounded-full border-[3px] border-primary border-l-transparent border-b-transparent animate-spin shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          style={{ animationDuration: '2s' }}
        />

        {/* Inner track */}
        <div className="absolute inset-3 md:inset-4 rounded-full border-[2px] border-border/50" />
        {/* Inner reverse spinning dash */}
        <div
          className="absolute inset-3 md:inset-4 rounded-full border-[2px] border-accent border-r-transparent border-t-transparent animate-[spin_3s_linear_infinite_reverse]"
        />

        {/* Center glowing brand icon */}
        <div className="absolute inset-6 md:inset-8 bg-primary/5 rounded-full flex flex-col items-center justify-center border border-primary/20 backdrop-blur-sm">
          <span className="font-heading font-bold text-2xl md:text-3xl text-primary tracking-tighter">A-R</span>
        </div>
      </div>

      {/* Loading Typography & Progress */}
      <div className="text-center z-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-heading font-black text-foreground tracking-widest uppercase mb-4">
          A-Robotics
        </h1>

        <div className="flex items-center gap-3 text-muted-foreground font-mono text-xs uppercase tracking-[0.2em] mb-6">
          <span className="w-8 md:w-12 h-[1px] bg-muted-foreground/30" />
          Initializing Systems
          <span className="w-8 md:w-12 h-[1px] bg-muted-foreground/30" />
        </div>

        {/* Sleek Progress Bar */}
        <div className="flex flex-col items-center w-48 md:w-64">
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-wider">
            {progress}% LOADED
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
