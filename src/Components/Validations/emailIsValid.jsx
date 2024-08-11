export const emailIsValid = (email) => {
    // Verificar si el campo está vacío
    if (!email) {
      return { valid: false, error: 'Por favor, ingresa tu dirección de correo electrónico.' };
    }
  
    // Expresión regular para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return { valid: false, error: 'La dirección de correo electrónico ingresada no es válida. Asegúrate de que tenga el formato correcto (ejemplo@dominio.com).' };
    }
  
    // Si pasa todas las validaciones, es válido
    return { valid: true, error: '' };
  };
  