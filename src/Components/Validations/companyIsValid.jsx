export const companyIsValid = (company) => {
    // Verificar que el campo no esté vacío
    if (company.trim().length === 0) {
      return { valid: false, error: 'El nombre de la empresa no puede estar vacío.' };
    }
  
    // Verificar longitud máxima
    if (company.trim().length > 35) {
      return { valid: false, error:'El nombre de la empresa no puede tener más de 35 caracteres.' };
    }
  
    return { valid: true, error: '' };
}
