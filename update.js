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
  
// Obtenemos la referencia al contador y a los botones
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');
const decrementButton = document.getElementById('decrementBtn');

// Verificamos si el contador está almacenado en el almacenamiento local
const storedCounter = localStorage.getItem('counter');
let counter = storedCounter ? parseInt(storedCounter) : 0;

// Mostramos el contador inicial
counterElement.textContent = counter;

// Función para actualizar el contador en el DOM y en el almacenamiento local
function updateCounter(value) {
  counter += value;
  counterElement.textContent = counter;
  localStorage.setItem('counter', counter);
}

// Manejadores de eventos para los botones
incrementButton.addEventListener('click', () => {
  updateCounter(1);
});

decrementButton.addEventListener('click', () => {
  updateCounter(-1);
});
