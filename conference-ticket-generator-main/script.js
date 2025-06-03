// Esperamos a que el formulario se envíe
document.getElementById('ticket-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitamos que se recargue la página

  // Obtenemos los valores ingresados por el usuario
  const nombre = document.getElementById('name').value.trim();
  const correo = document.getElementById('email').value.trim();
  const github = document.getElementById('github').value.trim();
  const avatarInput = document.getElementById('avatar');
  const avatarArchivo = avatarInput.files[0];

  // Validación simple
  if (!nombre || !correo || !github || !avatarArchivo) {
    alert('Por favor completa todos los campos y sube tu avatar.');
    return;
  }

  // Verificamos tipo de imagen
  const tiposPermitidos = ['image/jpeg', 'image/png'];
  if (!tiposPermitidos.includes(avatarArchivo.type)) {
    alert('El avatar debe ser una imagen JPEG o PNG.');
    return;
  }

  // Verificamos tamaño de imagen (máximo 2 MB)
  const maxTamaño = 2 * 1024 * 1024;
  if (avatarArchivo.size > maxTamaño) {
    alert('La imagen es demasiado grande. Máximo 2 MB.');
    return;
  }

  // Mostrar la entrada generada
  document.getElementById('ticket').style.display = 'block';
  document.getElementById('ticket-name').textContent = nombre;
  document.getElementById('ticket-name-2').textContent = nombre;
  document.getElementById('ticket-email').textContent = correo;
  document.getElementById('ticket-github').textContent = github;

  // Mostrar la imagen seleccionada como avatar
  const lector = new FileReader();
  lector.onload = function () {
    document.getElementById('ticket-avatar').src = lector.result;
  };
  lector.readAsDataURL(avatarArchivo);
});
