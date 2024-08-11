export const lastnameIsValid = (lastname) => {

    // Verificar que el apellido tenga al menos 3 caracteres
    if (lastname.trim().length < 3) {
      return { valid: false, error: 'El apellido debe tener al menos 3 caracteres.' };
    }
  
    // Verificar que el apellido no contenga caracteres especiales ni números
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!regex.test(lastname)) {
      return { valid: false, error: 'El apellido no puede contener caracteres especiales ni números.' };
    }
  
    return { valid: true, error: '' };
}
