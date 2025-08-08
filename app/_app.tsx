// pages/_app.tsx
import { AppProps } from 'next/app'; // Import AppProps type
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) { // Use AppProps type
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true); // Show preloader when route change starts
    };
    const handleComplete = () => {
      setLoading(false); // Hide preloader when route change ends
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Clean up events when component unmounts
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
    
      <Component {...pageProps} /> {/* Render the main component */}
    </>
  );
}

export default MyApp;
