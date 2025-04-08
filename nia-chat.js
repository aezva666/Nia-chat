(function() {
  const currentScript = document.currentScript;
  const clientId = currentScript.getAttribute('data-client-id') || 'default';

  // Crear contenedor del widget
  const niaWidget = document.createElement('div');
  niaWidget.id = 'nia-chat-widget';
  niaWidget.style.position = 'fixed';
  niaWidget.style.bottom = '20px';
  niaWidget.style.right = '20px';
  niaWidget.style.width = '360px';
  niaWidget.style.height = '540px';
  niaWidget.style.zIndex = '9999';
  niaWidget.style.border = 'none';
  niaWidget.style.borderRadius = '16px';
  niaWidget.style.overflow = 'hidden';
  niaWidget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
  niaWidget.style.background = '#fff';

  // Crear iframe (esto se conectará al frontend de NIA más adelante)
  const iframe = document.createElement('iframe');
  iframe.src = `https://nia-backend.com/chat?client_id=${clientId}`; // ⚠️ CAMBIA ESTA URL cuando tengas el frontend desplegado
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.setAttribute('allow', 'microphone');

  // Insertar el iframe
  niaWidget.appendChild(iframe);
  document.body.appendChild(niaWidget);
})();
