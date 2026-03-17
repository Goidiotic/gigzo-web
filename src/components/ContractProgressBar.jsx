import React, { useEffect, useState } from 'react';

const ContractProgressBar = ({ startTime, endTime }) => {
  const [progress, setProgress] = useState(100);
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const created = new Date(startTime).getTime();
    const deadline = new Date(endTime).getTime();
    const totalDuration = deadline - created;

    const updateProgress = () => {
      const now = Date.now();
      const timeElapsed = now - created;
      const timeLeft = Math.max(0, deadline - now);

      // Calculate progress
      const newProgress = Math.max(0, 100 - (timeElapsed / totalDuration) * 100);
      setProgress(newProgress);

      // Format remaining time (mm:ss)
      const minutes = Math.floor(timeLeft / 60000);
      const seconds = Math.floor((timeLeft % 60000) / 1000);
      setRemainingTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    updateProgress(); // Initial call
    const interval = setInterval(updateProgress, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return (
    <div style={{
      width: '100%',
      height: '20px',
      background: '#eee',
      borderRadius: '8px',
      overflow: 'hidden',
      position: 'relative',
      marginTop: '20px'
    }}>
      <div style={{
        width: `${progress}%`,
        height: '100%',
        background: progress > 20 ? '#00C542' : '#f44336',
        transition: 'width 1s linear',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        top: '0',
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        fontWeight: 'bold',
        zIndex: 2,
        fontSize: '14px'
      }}>
        {remainingTime}
      </div>
    </div>
  );
};

export default ContractProgressBar;
