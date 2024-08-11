export const whatsAppIsValid = (whatsapp) => {
    // Quitar espacios en blanco al principio y al final
    const trimmedValue = whatsapp.trim();

    // Verificar que el campo no esté vacío
    if (!trimmedValue) {
        return { valid: false, error: 'El campo de WhatsApp es obligatorio. Por favor, ingrese un número de teléfono.' };
    }

    // Verificar que el campo contenga solo números y un signo más opcional al inicio
    const regex = /^\+?\d+$/;
    if (!regex.test(trimmedValue)) {
        return { valid: false, error: 'El número de WhatsApp debe contener solo dígitos y opcionalmente un signo más al inicio. No se permiten letras ni caracteres especiales.' };
    }

    return { valid: true, error: '' };
}
