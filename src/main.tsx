import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Lenis from 'lenis';
import { App } from './App';
import './index.css';

function Root() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
