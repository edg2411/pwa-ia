function checkForUpdates() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          installingWorker.addEventListener('statechange', () => {
            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Se detectó una actualización, mostrar una notificación o mensaje al usuario
              // y solicitar la recarga de la página para que se apliquen los cambios.
              // Por ejemplo:
              alert('¡Hay una actualización disponible! Haz clic en OK para recargar la aplicación.');
              window.location.reload();
            }
          });
        });
      });
    }
  }
  