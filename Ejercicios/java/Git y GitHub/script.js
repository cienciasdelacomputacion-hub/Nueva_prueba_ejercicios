// script.js

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // LÓGICA DEL ACORDEÓN (Ocultar/Mostrar Secciones)
    // ----------------------------------------------------
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.icon');
            
            // Cierra todos los demás acordeones
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = "0";
                    otherHeader.querySelector('.icon').textContent = '+';
                }
            });

            // Toggle del acordeón actual
            header.classList.toggle('active');
            
            if (header.classList.contains('active')) {
                // Abre el contenido
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = 'x';
            } else {
                // Cierra el contenido
                content.style.maxHeight = "0";
                icon.textContent = '+';
            }
        });
    });
    
    // Abrir el primer acordeón al cargar por defecto.
    if (accordionHeaders.length > 0) {
        accordionHeaders[0].click();
    }


    // ----------------------------------------------------
    // LÓGICA DEL GENERADOR DE COMANDOS
    // ----------------------------------------------------
    const repoUrlInput = document.getElementById('repoUrl');
    const userNameInput = document.getElementById('userName');
    const branchNameInput = document.getElementById('branchName');
    const outputArea = document.getElementById('commandOutput');
    const btnClone = document.getElementById('generateClone');
    const btnPush = document.getElementById('generatePush');

    /**
     * Función principal para generar los comandos Git.
     * @param {string} type - 'clone' o 'push'.
     */
    const generateCommands = (type) => {
        const url = repoUrlInput.value.trim();
        const user = userNameInput.value.trim();
        let branch = branchNameInput.value.trim() || 'main'; // Usa 'main' si no se especifica

        if (!url || !user) {
            outputArea.textContent = "⚠️ ERROR: Debes ingresar la URL del Repositorio y tu Nombre de Usuario de GitHub.";
            outputArea.style.color = '#e74c3c'; // Rojo para error
            return;
        }

        let commands = '';
        outputArea.style.color = '#00ffaa'; // Volver al color verde/neón

        if (type === 'clone') {
            const repoName = url.split('/').pop().replace('.git', '');
            commands = 
`# ---------------------------------------------------------------------------------
# COMANDOS DE CLONACIÓN (Ejecutar SOLO una vez en el directorio padre de tus proyectos)
# ---------------------------------------------------------------------------------

# Paso 1: Clona el repositorio remoto a tu máquina local
git clone ${url}

# Paso 2: Entra en la carpeta del proyecto recién clonado
cd ${repoName}

# ¡Listo! El proyecto está clonado. Abre la carpeta '${repoName}' en NetBeans.
`;
        } else if (type === 'push') {
            commands =
`# -------------------------------------------------------------------------
# 1. CONFIGURACIÓN (Ejecutar solo si es la PRIMERA VEZ en esta máquina)
# -------------------------------------------------------------------------
git config --global user.name "${user}"
git config --global user.email "tu@email.com"
# NOTA: Reemplaza "tu@email.com" por tu correo real de GitHub.

# ----------------------------------------------------
# 2. INICIAR TRABAJO EN UNA RAMA (Flujo Colaborativo)
# ----------------------------------------------------
# A. Asegúrate de estar en la rama estable (main)
git checkout main

# B. Descarga los últimos cambios del equipo
git pull origin main

# C. Crea y cambia a tu nueva rama de trabajo
git checkout -b ${branch}


# ----------------------------------------------------
# 3. GUARDAR Y ENVIAR CAMBIOS (PUSH)
# ----------------------------------------------------

# Paso A: Añade todos los archivos modificados
git add .

# Paso B: Confirma (commit) los cambios con un mensaje claro
git commit -m "Completada la funcionalidad: ${branch}"

# Paso C: Sube los commits a GitHub (El -u setea la conexión remota)
git push -u origin ${branch} 
# Usar -u previene el error 'fatal: No configured push destination' la primera vez.

# 4. PASO FINAL: Ve a GitHub y crea una PULL REQUEST (PR) para fusionar '${branch}' con 'main'.
`;
        }
        
        outputArea.textContent = commands;
    };

    // --- Asignación de Eventos a los Botones ---
    btnClone.addEventListener('click', () => generateCommands('clone'));
    btnPush.addEventListener('click', () => generateCommands('push'));

    // Placeholder
    outputArea.textContent = "Presiona un botón para generar los comandos...";
});