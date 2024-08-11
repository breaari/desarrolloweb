export const nameIsValid = (name) => {
    // Verificar longitud mínima
    if (name.trim().length < 3) {
      return { valid: false, error:'El nombre debe tener al menos 3 caracteres para ser válido.' };
    }
  
    // Verificar caracteres permitidos
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!regex.test(name)) {
      return { valid: false, error: 'El nombre solo puede contener letras y espacios, sin caracteres especiales ni números.' };
    }
  
    return { valid: true, error: '' };
}
