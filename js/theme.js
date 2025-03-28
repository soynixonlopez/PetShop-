// Función para cambiar el tema
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-mode');
    
    // Cambiar clases en el body
    if (isDark) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
    
    // Actualizar el ícono
    const themeIcon = document.querySelector('#theme-toggle i');
    if (themeIcon) {
        themeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    }
    
    // Guardar preferencia
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Función para inicializar el tema
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const body = document.body;
    const themeIcon = document.querySelector('#theme-toggle i');
    
    // Aplicar tema
    if (savedTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun';
        }
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.className = 'fas fa-moon';
        }
    }
}

// Función para configurar el evento del botón de tema
function setupThemeToggle() {
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
        // Remover eventos anteriores si existen
        themeToggle.removeEventListener('click', toggleTheme);
        // Agregar nuevo evento
        themeToggle.addEventListener('click', toggleTheme);
        
        // Inicializar el tema inmediatamente
        initializeTheme();
    }
}

// Exportar funciones
window.themeManager = {
    toggle: toggleTheme,
    initialize: initializeTheme,
    setup: setupThemeToggle
};

// Inicializar tema cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Limpiar localStorage para forzar tema claro por defecto
    localStorage.removeItem('theme');
    initializeTheme();
}); 