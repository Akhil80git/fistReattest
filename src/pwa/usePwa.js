import { useEffect, useState } from 'react';

export default function usePwa() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  function promptInstall() {
    if (!deferredPrompt) {
      alert('Install prompt not available! Make sure your PWA setup is correct.');
      return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
  }

  return { deferredPrompt, promptInstall };
}
