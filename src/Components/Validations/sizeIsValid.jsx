export const sizeIsValid = (size) => {
    // Verificar que el campo no esté vacío
    if (!size.trim()) {
        return { valid: false, error: 'El tamaño de la empresa es obligatorio. Por favor, seleccione una opción.' };
    }
  
    // Si se selecciona alguna opción, es válido
    return { valid: true, error: '' };
}
