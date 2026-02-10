// =========================================================
// 0. DEFINICIONES GLOBALES (sin cambios en la lógica)
// =========================================================

const CLAVES = {
    intro: "CONFIDENCIALIDAD",
    hackers: "NINGUNA",
    credenciales: "4321",
    ing_social: "URGENCIA",
    iot: "NODE"
};

const SUSPECT_IMAGES = {
    'Agente Vega': 'vega.png',
    'Agente Leo': 'leo.png',
    'Agente Kael': 'kael.png'
};

const BOSS_VIDEOS = {
    "Dra. Vega": "ZbT5b0vhKEU",
    "Kai Byte": "9enczDlsgAU",
    "Dra. Cipher": "7kuHR6ecctI",
    "Agente Phish": "BvYvB1Y1cUM",
    "Ing. Nodea": "ct_5oRsCrdE"
};

const MISSION_BRIEFERS = {
    "intro": { name: "Dra. Vega", avatar: "vega.png" },
    "hackers": { name: "Kai Byte", avatar: "kai.png" },
    "credenciales": { name: "Dra. Cipher", avatar: "Cipher.png" },
    "ing_social": { name: "Agente Phish", avatar: "phish.png" },
    "iot": { name: "Ing. Nodea", avatar: "nodea.png" }
};

const BRIEF = {
    intro: {
        post_mission_concern: "Excelente trabajo, Agente. Has restaurado la Confidencialidad. Pero la brecha original es más profunda. La Dra. Vega cree que hay un 'Código Fantasma' operando dentro de ATLAS, alguien que conoce bien los sistemas y que podría estar corrompiendo a otros. Debemos analizar al personal. Ve a la **Oficina de Reclutamiento** para investigar a las nuevas incorporaciones. 🤔 Aguarda! un rastro sospechoso letra ** C **, ¿será relevante?     ",
        description: "Agente. Me presento, soy la Dra. Vega, Directora General. Mi principal preocupación en este momento es una anomalía detectada en el flujo de información de ATLAS. Para comprender la gravedad, es vital que entiendas los cimientos de nuestra seguridad: la **Tríada C.I.D.** Esta tríada es el modelo fundamental que rige cómo protegemos nuestros activos más valiosos. Se compone de tres pilares: **Confidencialidad**, que asegura que solo quienes deben ver la información puedan hacerlo; **Integridad**, que garantiza que la información es exacta e inalterable, y **Disponibilidad**, que asegura que nuestros sistemas y datos estén accesibles cuando los necesitamos. Tu primera tarea es demostrar que comprendes estos principios vitales, no solo para ATLAS, sino también para tu propia vida digital.",
        // NUEVO CAMPO:
        diaryClue: "Misión 1: Detecté un rastro anómalo en el sector dirección. Una letra solitaria: **C**."
    },
    hackers: {
       post_mission_concern: "Has identificado a un sospechoso. Bien. Pero la historia no termina ahí. Recientes intentos de 'Credential Stuffing' han sido detectados, alguien está probando contraseñas robadas. Necesitamos entender cómo se protegen las identidades digitales. Hay una habitación de pruebas con fallos de autenticación que debes explorar. Ve a la **Oficina de Identidad Digital**. 🤔 Recibes otra letra: ** O **, ¿casualidad?  ",
        description: "Agente, el problema se complica. Hay un 'Código Fantasma' operando dentro de ATLAS, alguien con acceso y conocimientos internos. Mi preocupación es que podría ser una de nuestras nuevas incorporaciones. Debemos entender que no todos los 'hackers' son iguales; hay quienes buscan proteger (Sombreros Blancos), quienes operan en la ambigüedad (Sombreros Grises) y quienes buscan el daño (Sombreros Negros). Es vital discernir sus intenciones para proteger nuestra red. Analiza estos perfiles y clasifica a cada agente. Luego, y esto es crucial, elige a tu Sospechoso Principal. Tu elección activará la siguiente fase de nuestra investigación.",
        // NUEVO CAMPO:
        diaryClue: "Misión 2: Tras analizar los perfiles de los hackers, apareció otro fragmento: **O**."
    },
    credenciales: {
        pistaIntriga: "** 🚨** Se halló un borrador de correo con terminología de **rescate de datos** en la cuenta del Agente Leo. / Un acceso remoto inesperado fue detectado desde una **dirección MAC estática** en la red de invitados. 🤔 una nota que te llama la atención ** RR **",
        post_mission_concern: "Has fortalecido las defensas de identidad, Agente. Pero la amenaza es más sutil. El Agente Phish está alarmado por una serie de sucesos extraños en Seguridad Interna, incidentes donde parece que la gente 'simplemente entregó' información. Debemos aprender a protegernos de la manipulación. Ve a la **Oficina de Seguridad Interna**. ",
        description: "Agente, hemos contenido un intento masivo de 'Credential Stuffing' gracias a nuestra Autenticación Multifactor (MFA). Pero la realidad es que no todas tus cuentas personales tienen esta protección. La MFA es una capa de seguridad vital que exige dos o más pruebas para verificar tu identidad: algo que sabes (tu contraseña), algo que tienes (un código de tu móvil) o algo que eres (tu huella dactilar). Mi preocupación es que sin ella, tus cuentas son vulnerables. Para continuar, deberás explorar una 'habitación oscura' de nuestro sistema de pruebas. Deberás descifrarlo para obtener la clave numérica de 4 cifras que restaurará el acceso a un sistema de credenciales crítico.",
        // NUEVO CAMPO:
        diaryClue: "Misión 3: Encontré una nota extraña durante la crisis de credenciales. Dice: **RR**."
    },
    ing_social: {
        pistaIntriga: "** 🚨** El malware usa un protocolo diseñado para dispositivos de **bajo consumo y simple procesamiento**. / La Agente Vega ha accedido a la base de datos de Becas (M1) más de 12 veces esta semana. ¡Demasiadas veces! ¿no? 🤔 Alguien quiere decirnos algo: ** E **",
        post_mission_concern: "La ingeniería social es una debilidad crítica, Agente. Pero hay algo más que me preocupa... La empresa ha estado invirtiendo mucho en tecnología IoT para mejorar la eficiencia, pero dudo que estén implementando las medidas de seguridad correctas. El 'Código Fantasma' podría explotar esto. Ve a la **Oficina de Innovación (IoT)** para una auditoría de seguridad. ",
        description: "Agente, estoy seriamente preocupado por una serie de incidentes que no encajan con los patrones de ataques habituales. No son fallas de software o contraseñas débiles. Es como si a la gente... simplemente se la hubiera manipulado para que hiciera cosas que no debía. Esto es Ingeniería Social, el arte oscuro de la persuasión. Los atacantes explotan nuestra confianza, nuestra curiosidad, nuestro miedo, o sobre todo, nuestra **urgencia**, para que les demos información o hagamos clic donde no debemos. Necesito que converses con nuestro chatbot de simulación de buenas prácticas. Aprende a identificar las maniobras y, al finalizar el entrenamiento, obtendrás la clave.",
        // NUEVO CAMPO:
        diaryClue: "Misión 4: Entre los intentos de manipulación social, aislé un carácter más: **E**."
    },
    iot: {
       post_mission_concern: "Has neutralizado las vulnerabilidades del IoT, Agente. La red está más segura, pero el rastro del 'Código Fantasma' nos ha llevado a un punto crítico. Ahora, con toda la información, debes tomar la decisión final. ¿Quién es el verdadero Código Fantasma? ¿El factor humano o el sistémico? Tu elección sellará el destino de ATLAS. 🤔 ** A ** ??? ¿Qué significa??",
        description: "Agente, hemos llegado al último punto. En ATLAS, hemos abrazado la tecnología IoT (Internet de las Cosas) para optimizar procesos, desde el control ambiental hasta la seguridad perimetral con cámaras inteligentes. Esto nos permite una eficiencia sin precedentes. Pero mi gran preocupación es que, si no se usan correctamente, estas tecnologías nos exponen a nuevos riesgos. Recuerdo que, durante la instalación de una de las cámaras en un sector remoto, el técnico a cargo me comentó algo inquietante: —“Por defecto, la clave inicial de ese modelo es NODE.“ ¿La habrá cambiado? ¿O seguimos expuestos, sin saberlo? 🧩 El Código Fantasma logró infiltrarse. Algo falló, agente... y necesitamos descubrir qué fue. ",
        // NUEVO CAMPO:
        diaryClue: "Misión 5: La vulnerabilidad IoT escondía la pieza final: **A**."
    }
};

const ORDER = ["intro", "hackers", "credenciales", "ing_social", "iot"];

const M1_SCORE_LOSS_KEY = 50;
const M3_SCORE_LOSS_KEY = 75;
const M4_SCORE_LOSS_KEY = 75;
const M5_SCORE_LOSS_KEY = 100;
const M2_SCORE_SELECT_SUSPECT = 500;
const COMPLETION_POINTS = 1000;

// =========================================================
// 1. LOCAL STORAGE: carga/guardado de estado
// =========================================================

function loadState() {
    const defaultState = {
        score: 0,
        keys: { intro: false, hackers: false, credenciales: false, ing_social: false, iot: false },
        suspect: null,
        final_suspect_choice: null
    };
    try {
        const stored = localStorage.getItem('atlas_firewall_state');
        return stored ? Object.assign(defaultState, JSON.parse(stored)) : defaultState;
    } catch (e) {
        console.error("Error cargando estado:", e);
        return defaultState;
    }
}

function saveState(state) {
    try {
        localStorage.setItem('atlas_firewall_state', JSON.stringify(state));
    } catch (e) {
        console.error("Error guardando estado:", e);
    }
}

// =========================================================
// 2. UTILIDADES DOM / RESILIENTES (arregla problema de IDs)
// =========================================================

// Devuelve el elemento submit (prueba varios patrones de id)
function getSubmitButton(missionId) {
    const candidates = [
        `${missionId}-btn-submit`,                 // ej: intro-btn-submit
        `${missionId}-btnsubmit`,
        `${MISSION_SCREENS?.[missionId] || missionId}-btn-submit`, // ej: mission1-btn-submit
        `${MISSION_SCREENS?.[missionId] || missionId}-btnsubmit`,
        `btn-confirm-suspect`,
        `mission${ORDER.indexOf(missionId)+1}-btn-submit`, // fallback antiguo
        `${missionId}-submit`,
        `${missionId}-btn`
    ];
    for (const id of candidates) {
        if (!id) continue;
        const el = document.getElementById(id);
        if (el) return el;
    }
    // última opción: buscar un botón dentro del panel de la misión
    const panel = document.getElementById(MISSION_SCREENS[missionId]);
    if (panel) {
        const btn = panel.querySelector('button.btn, button[type="button"], button[type="submit"]');
        if (btn) return btn;
    }
    return null;
}

// Devuelve el input de clave probando varios patrones
function getChallengeKeyInput(missionId) {
    const candidates = [
        `${missionId}-challenge-key`,
        `${MISSION_SCREENS?.[missionId] || missionId}-challenge-key`,
        `mission${ORDER.indexOf(missionId)+1}-challenge-key`,
        `${missionId}-key`,
        `${missionId}-challenge_key`,
        `${missionId}-input`
    ];
    for (const id of candidates) {
        if (!id) continue;
        const el = document.getElementById(id);
        if (el) return el;
    }
    // fallback: buscar un input dentro de la pantalla de la misión
    const panel = document.getElementById(MISSION_SCREENS[missionId]);
    if (panel) {
        const input = panel.querySelector('input[type="text"], input[type="search"], textarea');
        if (input) return input;
    }
    return null;
}

// Devuelve elemento feedback probando nombres
function getFeedbackElement(missionId) {
    const candidates = [
        `${missionId}-feedback`,
        `${MISSION_SCREENS?.[missionId] || missionId}-feedback`,
        `mission${ORDER.indexOf(missionId)+1}-feedback`,
        `${missionId}-msg`,
        `${missionId}-status`,
        `${missionId}-resultado`
    ];
    for (const id of candidates) {
        if (!id) continue;
        const el = document.getElementById(id);
        if (el) return el;
    }
    // fallback: buscar .feedback dentro de la pantalla de la misión
    const panel = document.getElementById(MISSION_SCREENS[missionId]);
    if (panel) {
        const fb = panel.querySelector('.feedback');
        if (fb) return fb;
    }
    return null;
}

// =========================================================
// 3. FUNCIONES UI Y PANTALLAS (sin cambios funcionales mayores)
// =========================================================

function setScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
}

function setSubScreen(id) {
    document.querySelectorAll('.sub-screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('active');
        const wrapper = el.querySelector('.content-wrapper');
        if (wrapper) wrapper.scrollTop = 0;
    }
}

function updateHUD() {
    const state = loadState();
    const collectedKeys = Object.values(state.keys).filter(Boolean).length;
    const hudScore = document.getElementById('hud-score');
    if (hudScore) hudScore.textContent = state.score;
    const hudKeys = document.getElementById('hud-keys');
    if (hudKeys) hudKeys.textContent = `${collectedKeys}/5`;
    const hudSuspect = document.getElementById('hud-suspect') || document.getElementById('hud-suspect-display');
    if (hudSuspect) hudSuspect.textContent = `🔎 Sospechoso: ${state.suspect ? state.suspect.replace('Agente ', '') : 'PENDIENTE'}`;

    updateMapFolders(state, collectedKeys);
}

function updateMapFolders(state, collectedKeys) {
    const folders = document.querySelectorAll('.folder[data-mission-id]');
    folders.forEach((folder, index) => {
        const missionId = ORDER[index];
        const statusText = folder.querySelector('.mission-status');
        let avatarContainer = folder.querySelector('.mission-avatar-container');
        if (!avatarContainer) {
            avatarContainer = document.createElement('div');
            avatarContainer.className = 'mission-avatar-container';
            folder.insertBefore(avatarContainer, folder.querySelector('h3') || folder.firstChild);
        }
        avatarContainer.innerHTML = '';

        if (state.keys[missionId]) {
            folder.classList.add('unlocked');
            if (statusText) statusText.textContent = '✅ COMPLETADA';
            const brieferInfo = MISSION_BRIEFERS[missionId];
            if (brieferInfo && brieferInfo.avatar) {
                const img = document.createElement('img');
                img.src = brieferInfo.avatar;
                img.alt = brieferInfo.name;
                img.className = 'briefer-avatar';
                avatarContainer.appendChild(img);
            }
        } else {
            folder.classList.remove('unlocked');
            if (statusText) statusText.textContent = 'Pendiente';
        }

        let isAvailable = false;
        if (index === 0) isAvailable = true;
        else {
            const prev = ORDER[index - 1];
            isAvailable = state.keys[prev];
        }

        const button = folder.querySelector('button');
        if (isAvailable || state.keys[missionId]) {
            folder.setAttribute('aria-disabled', 'false');
            if (button) { button.disabled = false; button.classList.remove('disabled-btn'); }
        } else {
            folder.setAttribute('aria-disabled', 'true');
            if (button) { button.disabled = true; button.classList.add('disabled-btn'); }
        }
    });

    const terminalBtn = document.getElementById('btn-terminal');
    if (terminalBtn) {
        terminalBtn.disabled = collectedKeys < 5;
        const terminalStatus = document.querySelector('.folder.terminal-folder .mission-status');
        if (collectedKeys < 5) {
            if (terminalStatus) terminalStatus.textContent = 'Bloqueado';
            terminalBtn.classList.add('disabled-btn');
        } else {
            if (terminalStatus) terminalStatus.textContent = 'Listo para la Decisión Final';
            terminalBtn.classList.remove('disabled-btn');
        }
    }
}

// =========================================================
// LÓGICA DEL DIARIO
// =========================================================

function toggleDiary() {
    const panel = document.getElementById('diary-panel');
    const notif = document.getElementById('diary-notification');
    panel.classList.toggle('hidden');
    // Al abrir, quitamos la notificación de "nuevo"
    if (!panel.classList.contains('hidden')) {
        notif.classList.add('hidden');
    }
}

function updateDiaryUI() {
    const state = loadState();
    const list = document.getElementById('diary-list');
    const notif = document.getElementById('diary-notification');
    
    // Limpiar lista
    list.innerHTML = '';

    // Si no hay pistas
    if (!state.collectedClues || state.collectedClues.length === 0) {
        list.innerHTML = '<li class="empty-msg">Sin datos recolectados.</li>';
        return;
    }

    // Renderizar pistas
    state.collectedClues.forEach(clue => {
        const li = document.createElement('li');
        li.innerHTML = clue; // Usamos innerHTML para permitir negritas
        list.appendChild(li);
    });
}

// Inicializar el botón del diario
document.addEventListener('DOMContentLoaded', () => {
    // ... tu código existente ...
    
    // Listener para el botón del diario
    document.getElementById('diary-toggle-btn')?.addEventListener('click', toggleDiary);
    
    // Cargar diario al inicio
    updateDiaryUI();
});

// =========================================================
// 4. LÓGICA DE PUNTAJE / GENIALLY / YOUTUBE (sin cambios)
// =========================================================

function updateScore(points) {
    let state = loadState();
    state.score = Math.max(0, state.score + points);
    saveState(state);
    updateHUD();
    if (points > 0) play("#sfx-ok");
    else if (points < 0) play("#sfx-error");
}

// =========================================================
// FUNCIÓN FINAL: Carga de Genially (Soporte Enlace Completo)
// =========================================================

function loadGeniallyIframe(containerId, resourceUrl) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Limpiar contenedor previo para asegurar recarga limpia
    container.innerHTML = ''; 
    
    const iframe = document.createElement('iframe');
    
    // LÓGICA INTELIGENTE:
    // Si el usuario puso un enlace completo (https://...), lo usa tal cual.
    // Si puso solo un ID (ej: 68f...), construye la URL genérica.
    if (resourceUrl.includes('http')) {
        iframe.src = resourceUrl;
    } else {
        iframe.src = `https://view.genially.com/${resourceUrl}`;
    }

    // AJUSTES VISUALES CRÍTICOS
    iframe.style.width = '100%';
    iframe.style.height = '500px'; // Forzamos altura fija para evitar colapso (pantalla negra pequeña)
    iframe.style.border = '0';
    iframe.allow = "fullscreen";
    
    container.appendChild(iframe);
}

// =========================================================
// FUNCIÓN MEJORADA: Carga de YouTube con Control de Audio
// =========================================================

function loadYoutubeVideo(containerId, videoId, audioOn = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Limpiar contenedor
    container.innerHTML = '';
    
    const iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "315";
    
    // LÓGICA DE AUDIO INDEPENDIENTE
    // Si audioOn es true -> mute=0 (Con sonido)
    // Si audioOn es false -> mute=1 (Silencio, para que el autoplay no se bloquee)
    const muteParam = audioOn ? "0" : "1";
    
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&mute=${muteParam}&modestbranding=1`;
    
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    
    container.appendChild(iframe);
}

function play(id) {
    const audio = document.querySelector(id);
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(()=>{});
    }
}

// MAPA de pantallas (posible dependencia con HTML)
const MISSION_SCREENS = {
    "intro": "mission1",
    "hackers": "mission2",
    "credenciales": "mission3",
    "ing_social": "mission4",
    "iot": "mission5",
};

// =========================================================
// 5. FLUJO DE FIN DE MISION: marcar como completada
// =========================================================

function handleMissionCompletion(missionId, isSuccess) {
    if (!isSuccess) return;
    let state = loadState();
    if (state.keys[missionId]) { setSubScreen('screen-map'); return; }
    state.keys[missionId] = true;
    saveState(state);
    updateScore(COMPLETION_POINTS);
    const missionBriefingContainer = document.getElementById(`${MISSION_SCREENS[missionId]}-briefing`);
    if (missionBriefingContainer) {
        const missionDescriptionElement = missionBriefingContainer.querySelector('.briefing-text');
        if (missionDescriptionElement && BRIEF[missionId] && BRIEF[missionId].post_mission_concern) {
            missionDescriptionElement.innerHTML = BRIEF[missionId].post_mission_concern;
        }
        const challengeUi = missionBriefingContainer.querySelector('.challenge-ui');
        if (challengeUi) challengeUi.style.display = 'none';
        const unlockSection = missionBriefingContainer.parentElement.querySelector('.unlock');
        if (unlockSection) unlockSection.style.display = 'none';
    }
    setSubScreen('screen-map');
    updateHUD();
}

// =========================================================
// 6. BOTÓN ÚNICO: manejo robusto del submit (reparado)
// =========================================================

// =========================================================
// NUEVA FUNCIÓN: Control del Modal
// =========================================================
function showModal(title, htmlContent, isSuccess) {
    const overlay = document.getElementById('modal-overlay');
    const box = overlay.querySelector('.modal-box');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');
    const closeBtn = document.getElementById('modal-close-btn');

    // Configurar contenido
    titleEl.textContent = title;
    bodyEl.innerHTML = htmlContent; // Usamos innerHTML para que se vean las negritas y saltos de línea

    // Configurar estilos (verde o rojo)
    box.classList.remove('success-mode', 'error-mode');
    box.classList.add(isSuccess ? 'success-mode' : 'error-mode');

    // Mostrar
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');

    // Sonido
    if(isSuccess) play("#sfx-ok");
    else play("#sfx-error");

    // Lógica de cierre única
    closeBtn.onclick = () => {
        overlay.classList.add('hidden');
        overlay.setAttribute('aria-hidden', 'true');
    };
}
// =========================================================
// FUNCIÓN RECUPERADA: resetSubmitButton
// =========================================================

function resetSubmitButton(missionId, submitButton, challengeKeyInput) {
    const fb = getFeedbackElement(missionId);
    
    // Limpiamos feedback visual antiguo
    if (fb) {
        fb.className = 'feedback';
        fb.textContent = '';
        fb.style.display = 'none'; // Lo ocultamos porque ahora usamos Modales
    }

    if (submitButton) {
        // Restaurar texto original o por defecto
        submitButton.textContent = submitButton.dataset.originalText || 'Desbloquear Firewall';
        
        // Restaurar colores (verde éxito, quitar gris continue)
        submitButton.classList.remove('primary', 'continue-btn', 'secondary');
        submitButton.classList.add('success');
        
        // Habilitar
        submitButton.disabled = false;
        
        // Asegurar que el evento onclick sea el del handleMissionSubmitClick
        // (Esto previene que se quede con la función de "Volver al mapa")
        submitButton.onclick = function() { handleMissionSubmitClick(missionId); };
    }

    if (challengeKeyInput) {
        challengeKeyInput.disabled = false;
        challengeKeyInput.value = ''; // Limpiar input para nuevo intento
    }
}
// =========================================================
// FUNCIÓN MAESTRA: handleMissionSubmitClick (INTEGRADA)
// =========================================================

function handleMissionSubmitClick(missionId) {
    const submitButton = getSubmitButton(missionId);
    const challengeKeyInput = getChallengeKeyInput(missionId);
    
    // Ocultar feedback antiguo si existe (limpieza visual)
    const feedbackElement = getFeedbackElement(missionId);
    if(feedbackElement) feedbackElement.style.display = 'none';

    // Verificar si el botón está en modo navegación ("Volver" o "Continuar")
    const isContinue = submitButton && (/Continuar/i.test(submitButton.textContent) || /Volver/i.test(submitButton.textContent));

    if (!submitButton) return;

    // 1) Si el botón ya es para salir, nos lleva al mapa directamente
    if (isContinue) {
        setSubScreen('screen-map');
        return;
    }

    // 2) Preparación de variables de lógica
    let isKeyCorrect = false;
    let feedbackMessage = "";
    let modalTitle = ""; 
    let state = loadState(); // Cargar estado actual

    // Si la misión ya estaba completada (seguridad), solo actualizamos la UI
    if (state.keys[missionId]) {
        // En este punto, el botón debería tener texto 'Volver al mapa'
        setSubScreen('screen-map');
        return; 
    }

    // 3) Switch de Validación por Misión
    switch (missionId) {
        case 'intro': {
            const input = (challengeKeyInput && challengeKeyInput.value) ? challengeKeyInput.value.toUpperCase().trim() : '';
            isKeyCorrect = input === CLAVES.intro;
            if (isKeyCorrect) {
                modalTitle = "✅ ACCESO CONCEDIDO";
                feedbackMessage = `Firewall Misión 1 Desbloqueado.<br><br>${BRIEF.intro?.post_mission_concern || ''}`;
            } else {
                updateScore(-M1_SCORE_LOSS_KEY); // Penalización
                modalTitle = "🚨 ACCESO DENEGADO";
                feedbackMessage = "Clave incorrecta.<br>Revisa el <strong>Principio C.I.D.</strong> y las pistas.";
            }
            break;
        }
        case 'hackers': {
            // Validación especial: requiere haber elegido un sospechoso en el state
            if (!state.suspect) {
                isKeyCorrect = false;
                modalTitle = "⚠️ ATENCIÓN";
                feedbackMessage = "Debes seleccionar un sospechoso principal antes de continuar.";
            } else {
                isKeyCorrect = true;
                updateScore(M2_SCORE_SELECT_SUSPECT); // Puntos por elegir sospechoso
                modalTitle = "✅ SOSPECHOSO REGISTRADO";
                feedbackMessage = `Misión 2 completada. Sospechoso: <strong>${state.suspect.replace('Agente ', '')}</strong>.<br><br>${BRIEF.hackers?.post_mission_concern || ''}`;
                
                // Bloquear la interfaz de selección de sospechosos
                document.querySelectorAll('.suspect-option').forEach(btn => btn.style.pointerEvents = 'none');
            }
            break;
        }
        case 'credenciales': {
            const input = (challengeKeyInput && challengeKeyInput.value) ? challengeKeyInput.value.trim() : '';
            isKeyCorrect = input === CLAVES.credenciales;
            if (isKeyCorrect) {
                modalTitle = "✅ SISTEMA RESTAURADO";
                feedbackMessage = `Firewall Misión 3 Desbloqueado.<br><br>${BRIEF.credenciales?.post_mission_concern || ''} <br><br> ${BRIEF.credenciales?.pistaIntriga || ''}`;
            } else {
                updateScore(-M3_SCORE_LOSS_KEY);
                modalTitle = "🚨 ERROR DE AUTENTICACIÓN";
                feedbackMessage = "Clave incorrecta. ¡Explora bien la habitación oscura y busca el código de 4 dígitos!";
            }
            break;
        }
        case 'ing_social': {
            const input = (challengeKeyInput && challengeKeyInput.value) ? challengeKeyInput.value.toUpperCase().trim() : '';
            isKeyCorrect = input === CLAVES.ing_social;
            if (isKeyCorrect) {
                modalTitle = "✅ ENTRENAMIENTO COMPLETADO";
                feedbackMessage = `Simulación de Ing. Social superada.<br><br>${BRIEF.ing_social?.post_mission_concern || ''} <br><br> ${BRIEF.ing_social?.pistaIntriga || ''}`;
            } else {
                updateScore(-M4_SCORE_LOSS_KEY);
                modalTitle = "🚨 RESPUESTA INCORRECTA";
                feedbackMessage = "Esa no es la emoción principal que usan los atacantes. ¡Revisa la conversación con el chatbot!";
            }
            break;
        }
        case 'iot': {
            const input = (challengeKeyInput && challengeKeyInput.value) ? challengeKeyInput.value.toUpperCase().trim() : '';
            isKeyCorrect = input === CLAVES.iot;
            if (isKeyCorrect) {
                modalTitle = "✅ RED IOT SEGURA";
                feedbackMessage = `Firewall Misión 5 Desbloqueado.<br><br>${BRIEF.iot?.post_mission_concern || ''}`;
                
                // Mostrar la sección final de elección de culpable
                const finalSection = document.getElementById('final-suspect-choice-section');
                if (finalSection) finalSection.style.display = 'block';
                renderFinalSuspectChoiceUI(loadState());
            } else {
                updateScore(-M5_SCORE_LOSS_KEY);
                modalTitle = "🚨 CREDENCIALES INVÁLIDAS";
                feedbackMessage = "Clave incorrecta. Revisa el nombre de usuario por defecto común en dispositivos IoT.";
            }
            break;
        }
    }

    // 4) Procesamiento de Éxito (Guardado + Diario + UI)
    if (isKeyCorrect) {
        // Recargar state para asegurar consistencia
        state = loadState(); 

        if (!state.keys[missionId]) {
            // A. Marcar como completada
            state.keys[missionId] = true;
            
            // B. Sumar puntos finales (excepto M2 que ya sumó arriba)
            if (missionId !== 'hackers') {
                state.score += COMPLETION_POINTS; 
            }
            
            // C. Lógica del DIARIO: Guardar pista si existe
            if (!state.collectedClues) state.collectedClues = [];
            const clueText = BRIEF[missionId]?.diaryClue; // Obtenemos la pista del objeto BRIEF
            
            if (clueText && !state.collectedClues.includes(clueText)) {
                state.collectedClues.push(clueText);
                // Mostrar notificación visual (!) en el botón del diario
                document.getElementById('diary-notification')?.classList.remove('hidden');
            }

            // D. Guardar todo en localStorage
            saveState(state);
        }
        
        // E. Actualizaciones Visuales Inmediatas
        updateHUD();       // Actualiza puntaje y firewalls (arriba)
        updateDiaryUI();   // Actualiza la lista del diario (abajo)

        // F. Transformar el botón a "Volver al Mapa"
        if (submitButton) {
            submitButton.textContent = "Volver al Mapa";
            submitButton.classList.remove('success', 'primary'); 
            submitButton.classList.add('secondary'); 
            submitButton.disabled = false;
            // Aseguramos que el click lo devuelva al mapa
            submitButton.onclick = function() { setSubScreen('screen-map'); };
        }
        if (challengeKeyInput) challengeKeyInput.disabled = true;

        // G. Desbloquear visualmente la siguiente carpeta en el mapa
        updateMapFolders(state, Object.values(state.keys).filter(Boolean).length);
    } else {
        // Si falló, aseguramos que el botón siga habilitado para reintentar
        submitButton.disabled = false;
    }

    // 5) Mostrar el resultado en el Modal Popup
    showModal(modalTitle, feedbackMessage, isKeyCorrect);
}

// =========================================================
// 7. LÓGICA DE INTERACCIÓN (listeners) - AUDIO CORREGIDO
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 0. REPORTES
    const INNOCENCE_REPORT = {
        'Agente Vega': { name: 'Dra. Vega', avatar: 'vega.png', justification: "Su actividad múltiple era por sobrecarga de trabajo." },
        'Agente Leo': { name: 'Agente Leo', avatar: 'leo.png', justification: "Investigaba vulnerabilidades proactivamente (Hacker Gris)." },
        'Agente Kael': { name: 'Agente Kael', avatar: 'kael.png', justification: "Sus credenciales fueron robadas antes de entrar. Es víctima." },
        'Sistema IoT (NODE)': { name: 'Vulnerabilidad IoT (NODE)', avatar: 'iot.png', justification: "El fallo fue una cámara con clave por defecto. Error de sistema, no humano." }
    };

    let state = loadState();

    // Botón Start
    document.getElementById('btn-start')?.addEventListener('click', () => {
        setScreen('screen-game'); setSubScreen('screen-map'); updateHUD();
    });

    // --- LÓGICA DE CARPETAS Y MISIONES ---
    document.querySelectorAll('.folder button[data-target-screen], .folder button[data-targetscreen]').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetSubScreenId = e.target.dataset.targetScreen || e.target.dataset.targetscreen;
            const folderElement = e.target.closest('.folder');
            if (!folderElement) return;
            
            const missionId = folderElement.dataset.missionId || folderElement.getAttribute('data-mission-id');
            const index = ORDER.indexOf(missionId);
            state = loadState(); 

            if (index > 0 && !state.keys[ORDER[index - 1]] && !state.keys[missionId]) {
                if (typeof showModal === 'function') showModal("⛔ ACCESO DENEGADO", "Completa la misión anterior.", false);
                else alert('Misión Bloqueada.');
                e.preventDefault(); return;
            }

            if (targetSubScreenId) {
                setSubScreen(targetSubScreenId);
                const brieferInfo = MISSION_BRIEFERS[missionId];
                if (brieferInfo) {
                    const container = document.getElementById(`${targetSubScreenId}-briefing`);
                    if (container) {
                        // Carga de info básica
                        const vidId = BOSS_VIDEOS[brieferInfo.name];
                        const vidWrap = container.querySelector('.video-wrapper');
                        
                        // CONFIGURACIÓN 1: Briefings normales -> SIN SONIDO (false) para que no se bloqueen
                        if (vidId && vidWrap) loadYoutubeVideo(vidWrap.id, vidId, false); 

                        container.querySelector('.briefer-name').textContent = `Informe de: ${brieferInfo.name}`;
                        container.querySelector('img.avatar').src = brieferInfo.avatar;

                        const descEl = container.querySelector('.briefing-text');
                        if (descEl) descEl.innerHTML = state.keys[missionId] ? BRIEF[missionId].post_mission_concern : BRIEF[missionId].description;

                        // UI
                        const ui = container.querySelector('.challenge-ui');
                        const unlock = container.parentElement.querySelector('.unlock');
                        const btn = getSubmitButton(missionId);
                        const inp = getChallengeKeyInput(missionId);

                        if (typeof resetSubmitButton === 'function') resetSubmitButton(missionId, btn, inp);

                        if (state.keys[missionId]) {
                            if (ui) ui.style.display = 'none';
                            if (unlock) unlock.style.display = 'none';
                            if (btn) {
                                btn.textContent = 'Volver al Mapa';
                                btn.className = 'btn secondary';
                                btn.onclick = () => setSubScreen('screen-map');
                            }
                            if (inp) inp.disabled = true;
                        } else {
                            if (ui) ui.style.display = 'block';
                            if (unlock) unlock.style.display = 'block';
                        }
                    }
                }

                // Cargas específicas
                if (targetSubScreenId === 'mission2') renderSuspectChoiceUI(state);
                if (targetSubScreenId === 'mission3') loadGeniallyIframe('genially-container-wrapper-m3', 'https://view.genially.com/68f7f6a5e20bb1a9756973c5/interactive-content-3m-cuarto-oscuro'); 
                if (targetSubScreenId === 'mission4') loadGeniallyIframe('genially-container-wrapper-m4', 'https://view.genially.com/68f39f77532d1fe72f657dac'); 
                if (targetSubScreenId === 'mission5') {
                    const finalSection = document.getElementById('final-suspect-choice-section');
                    if (finalSection) finalSection.style.display = state.keys[missionId] ? 'block' : 'none';
                    renderFinalSuspectChoiceUI(state);
                }
            }
        });
    });

    // Footer
    document.querySelectorAll('.footer-actions button[data-target-screen="screen-map"]').forEach(b => {
        b.addEventListener('click', () => { setSubScreen('screen-map'); updateHUD(); });
    });

    // Eventos Submit
    const tryAttach = (ids, fn) => { ids.forEach(id => { const el = document.getElementById(id); if (el) { const n = el.cloneNode(true); el.parentNode.replaceChild(n, el); n.addEventListener('click', fn); }}); };
    tryAttach(['mission1-btn-submit', 'intro-btn-submit'], () => handleMissionSubmitClick('intro'));
    tryAttach(['btn-confirm-suspect', 'hackers-btn-confirm'], () => handleMissionSubmitClick('hackers'));
    tryAttach(['mission3-btn-submit', 'credenciales-btn-submit'], () => handleMissionSubmitClick('credenciales'));
    tryAttach(['mission4-btn-submit', 'ing_social-btn-submit'], () => handleMissionSubmitClick('ing_social'));
    tryAttach(['mission5-btn-submit', 'iot-btn-submit'], () => handleMissionSubmitClick('iot'));

    // Puzzles (CID, Hackers, IoT)
    document.querySelectorAll('#challenge-cid .choice').forEach(b => b.addEventListener('click', (e) => {
        const p = e.target.closest('.challenge-item');
        p.querySelectorAll('.choice').forEach(x => x.classList.remove('picked','correct','incorrect'));
        e.target.classList.add('picked');
        if (e.target.dataset.key === p.dataset.cidCorrect) { 
            if (!p.dataset.scored) {
                updateScore(166);
                p.dataset.scored = 'true';
            }
            e.target.classList.add('correct'); 
        }
        else { updateScore(-25); e.target.classList.add('incorrect'); }
    }));
    
    // =========================================================
    // CORRECCIÓN CRÍTICA DE LA MISIÓN 2
    // =========================================================
    document.querySelectorAll('#challenge-hackers .choice').forEach(b => b.addEventListener('click', (e) => {
        const p = e.target.closest('.challenge-item');
        p.querySelectorAll('.choice').forEach(x => x.classList.remove('picked','correct','incorrect'));
        e.target.classList.add('picked');
        if (e.target.dataset.hackerType === p.dataset.hackerCorrect) { 
            if (!p.dataset.scored) { // Verifica si no ha sido puntuado antes
                updateScore(50);
                p.dataset.scored = 'true'; // <--- LA LÍNEA CRÍTICA AÑADIDA
            } 
            e.target.classList.add('correct'); 
        }
        else { updateScore(-25); e.target.classList.add('incorrect'); }
        renderSuspectChoiceUI(loadState()); // Llama a la función para re-renderizar y comprobar si habilita
    }));
    // =========================================================

    document.querySelectorAll('#challenge-iot .choice').forEach(b => b.addEventListener('click', (e) => {
        const p = e.target.closest('.challenge-item');
        p.querySelectorAll('.choice').forEach(x => x.classList.remove('picked','correct','incorrect'));
        e.target.classList.add('picked');
        if (e.target.dataset.iotOption === p.dataset.iotCorrect) { 
            if (!p.dataset.scored) {
                updateScore(166);
                p.dataset.scored = 'true';
            }
            e.target.classList.add('correct'); 
        }
        else { updateScore(-50); e.target.classList.add('incorrect'); }
    }));

    // =========================================================
    // 7. EVENTO FINAL (CONFIGURACIÓN INDEPENDIENTE)
    // =========================================================
    document.getElementById('btn-confirm-final-suspect')?.addEventListener('click', () => {
        let cur = loadState();
        if (!cur.final_suspect_choice) { 
            if (typeof showModal === 'function') showModal("⚠️ ATENCIÓN", "Por favor, selecciona al Código Fantasma.", false);
            else alert('Selecciona al culpable.'); 
            return; 
        }
        
        const REAL_CULPRIT_KEY = 'Sistema IoT (NODE)';
        let finalMessage = ""; 
        let finalScoreAdjustment = 0;
        let isVictory = (cur.final_suspect_choice === REAL_CULPRIT_KEY);

        if (isVictory) {
            // VICTORIA
            finalMessage = `
                <h3 style="color: var(--success); margin-bottom: 15px;">✅ ¡HAS DESENMASCARADO AL CÓDIGO FANTASMA!</h3>
                <p>La infiltración se originó en el **Sistema IoT (NODE)**. No era un empleado, sino un **error de diseño**.</p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 15px;">
                    ${['Agente Vega', 'Agente Leo', 'Agente Kael'].map(agentKey => `
                        <div style="text-align: center; width: 120px;">
                            <img src="${INNOCENCE_REPORT[agentKey].avatar}" style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid var(--accent);">
                            <p style="font-size: 0.8em; margin:0;"><strong>${INNOCENCE_REPORT[agentKey].name}</strong></p>
                        </div>
                    `).join('')}
                </div>
            `;
            finalScoreAdjustment = 5000;
        } else {
            // DERROTA
            const chosen = INNOCENCE_REPORT[cur.final_suspect_choice];
            finalMessage = `
                <h3 style="color: var(--error); margin-bottom: 15px;">⚠️ CULPABLE INCORRECTO</h3>
                <div style="text-align: center;">
                    <img src="${chosen.avatar}" style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid var(--error);">
                    <p>Acusaste a <strong>${chosen.name}</strong>.</p>
                </div>
                <p>${chosen.justification}</p>
                <p style="margin-top: 15px;">El verdadero culpable era: <strong>${INNOCENCE_REPORT[REAL_CULPRIT_KEY].name}</strong></p>
            `;
            finalScoreAdjustment = -2000;
        }

        // SECCIÓN COMÚN
        finalMessage += `
            <div style="margin-top: 30px; border-top: 1px dashed var(--line); padding-top: 20px; text-align: center;">
                <p style="color: var(--primary);"><strong>📩 INFORME FINAL DISPONIBLE:</strong></p>
                <button id="btn-show-ending-video" class="btn primary" style="width: 100%; max-width: 400px; margin-bottom: 15px;">▶ REPRODUCIR VIDEO FINAL</button>
                <div id="ending-video-container"></div>
                
                <br>
                <p style="color: var(--accent); margin-top: 20px;"><strong>⚠️ ALERTA DE SISTEMA:</strong></p>
                <p>Se ha detectado un sector corrupto (Sector 6). Se requiere intervención docente.</p>
                
                <button id="btn-open-mission6-modal" class="btn success" style="border: 2px solid var(--accent);">🔓 DESBLOQUEAR SECTOR 6</button>
            </div>
        `;
        
        let stateNow = loadState();
        stateNow.score = Math.round(Math.max(0, stateNow.score + finalScoreAdjustment)); 
        saveState(stateNow);
        
        const msgContainer = document.getElementById('final-message');
        if (msgContainer) msgContainer.innerHTML = finalMessage;
        
        document.getElementById('final-score') && (document.getElementById('final-score').textContent = stateNow.score);
        
        setTimeout(() => {
            // CONFIGURACIÓN 2: Video Final -> CON SONIDO (true)
            document.getElementById('btn-show-ending-video')?.addEventListener('click', (e) => {
                e.target.style.display = 'none';
                loadYoutubeVideo('ending-video-container', 'uI_Hx99ekBo', true); // <--- AQUÍ ACTIVAMOS EL SONIDO
            });

            // Modal Misión 6
            document.getElementById('btn-open-mission6-modal')?.addEventListener('click', () => {
                const modalContent = `
                    <div style="text-align:center;">
                        <h2 style="color:var(--accent);">⚠️ PROTOCOLO ARQUITECTO ACTIVADO</h2>
                        <img src="vega.png" style="width:100px; border-radius:50%; border:3px solid var(--primary); margin:10px auto;">
                        <p style="font-size:1.1em; text-align:justify;">
                            "Agente, ya sea que hayas acertado o fallado, ATLAS te necesita. 
                            Hemos encontrado un área vacía: el <strong>Sector 6</strong>.
                            Tu misión ahora no es jugar, sino <strong>CREAR</strong>."
                        </p>
                        <p><strong>Objetivo:</strong> Diseñar una experiencia gamificada.</p>
                        <br>
                        <a href="mission6.html" target="_blank" class="btn primary" style="font-size:1.2em; text-decoration:none;">🚀 IR AL HACKATHON</a>
                    </div>
                `;
                showModal("NUEVA MISIÓN DESBLOQUEADA", modalContent, true);
            });
        }, 100);

        setSubScreen('screen-end');
        updateHUD(); 
    });

    // Replay
    document.getElementById('btn-replay')?.addEventListener('click', () => {
        localStorage.removeItem('atlas_firewall_state');
        location.reload();
    });

    // Inicialización
    document.getElementById('diary-toggle-btn')?.addEventListener('click', toggleDiary);
    if(typeof updateDiaryUI === 'function') updateDiaryUI();
    updateHUD();
    setScreen('screen-start');

    // Terminal
    document.getElementById('btn-terminal')?.addEventListener('click', () => {
        setSubScreen('mission5'); 
        const finalSection = document.getElementById('final-suspect-choice-section');
        if (finalSection) {
            finalSection.style.display = 'block';
            setTimeout(() => finalSection.scrollIntoView({ behavior: 'smooth' }), 100);
        }
        renderFinalSuspectChoiceUI(loadState());
    });
});




// =========================================================
// FUNCIONES UI RECUPERADAS (Pegar al final de script.js)
// =========================================================

// 1. Interfaz de Sospechosos (Misión 2 - Reclutamiento)
function renderSuspectChoiceUI(currentState) {
    const choiceArea = document.getElementById('suspect-choice-area');
    if (!choiceArea) return;
    
    choiceArea.innerHTML = ''; // Limpiar área

    // Verificar si ya clasificó a todos para habilitar la elección
    const classifiedCount = document.querySelectorAll('#challenge-hackers .challenge-item[data-hacker-correct][data-scored="true"]').length;
    const totalToClassify = document.querySelectorAll('#challenge-hackers .challenge-item[data-hacker-correct]').length;
    const canChooseSuspect = classifiedCount >= totalToClassify || currentState.keys['hackers'];

    const suspectSelectionMessage = document.getElementById('suspect-selection-message');
    const confirmButton = document.getElementById('btn-confirm-suspect') || document.getElementById('hackers-btn-confirm');

    // Actualizar mensaje y botón
    if (canChooseSuspect) {
        if (suspectSelectionMessage) suspectSelectionMessage.textContent = `Puedes elegir tu sospechoso. (Actual: ${currentState.suspect ? currentState.suspect.replace('Agente ', '') : 'NINGUNO'})`;
        if (confirmButton) { 
            confirmButton.style.display = 'inline-block'; 
            confirmButton.disabled = currentState.keys['hackers']; 
        }
    } else {
        if (suspectSelectionMessage) suspectSelectionMessage.textContent = "Clasifica a los tres agentes arriba para habilitar la selección.";
        if (confirmButton) confirmButton.style.display = 'none';
    }

    // Generar las tarjetas de los agentes
    ['Agente Vega', 'Agente Leo', 'Agente Kael'].forEach(sName => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'suspect-option';
        optionDiv.dataset.suspect = sName;
        
        // Crear imagen y texto
        const img = document.createElement('img'); 
        img.src = SUSPECT_IMAGES[sName]; 
        img.alt = sName;
        
        const span = document.createElement('span'); 
        span.textContent = sName.replace('Agente ', '');
        
        optionDiv.appendChild(img); 
        optionDiv.appendChild(span);

        // Estilo activo si ya está seleccionado
        if (currentState.suspect === sName) optionDiv.classList.add('active-choice');

        // Lógica de clic
        if (!canChooseSuspect || currentState.keys['hackers']) {
            optionDiv.style.opacity = '0.5'; 
            optionDiv.style.pointerEvents = 'none';
        } else {
            optionDiv.style.opacity = '1'; 
            optionDiv.style.pointerEvents = 'auto';
            optionDiv.addEventListener('click', () => {
                document.querySelectorAll('.suspect-option').forEach(opt => opt.classList.remove('active-choice'));
                optionDiv.classList.add('active-choice');
                let cur = loadState(); 
                cur.suspect = sName; 
                saveState(cur);
                // Actualizar texto del HUD o mensaje si es necesario
                if (suspectSelectionMessage) suspectSelectionMessage.textContent = `Seleccionado: ${sName.replace('Agente ', '')}`;
            });
        }
        choiceArea.appendChild(optionDiv);
    });
}

// 2. Interfaz Final (Misión 5 - IoT)
function renderFinalSuspectChoiceUI(currentState) {
    const choiceArea = document.getElementById('final-suspect-choice-area');
    if (!choiceArea) return;
    
    choiceArea.innerHTML = ''; // Limpiar área

    // Lista de sospechosos finales
    const suspects = ['Agente Vega', 'Agente Leo', 'Agente Kael', 'Sistema IoT (NODE)'];
    
    suspects.forEach(sName => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'btn secondary choice-final-suspect';
        optionBtn.textContent = sName.replace('Agente ', ''); // Quitar prefijo para el botón
        optionBtn.dataset.suspectFinal = sName;
        
        // Resaltar si es la elección guardada (o el sospechoso de la M2 si aún no ha elegido final)
        if (!currentState.final_suspect_choice && currentState.suspect === sName) optionBtn.classList.add('active-choice');
        if (currentState.final_suspect_choice === sName) optionBtn.classList.add('active-choice');
        
        // Deshabilitar si ya confirmó la decisión final (Misión 5 completada)
        // Nota: Si quieres permitir cambiar de opinión antes de confirmar, quita el disabled
        if (currentState.keys['iot'] && currentState.final_suspect_choice) {
             // Opcional: optionBtn.disabled = true; 
        }

        optionBtn.addEventListener('click', (e) => {
            // Permitir cambio solo si no se ha confirmado definitivamente el final del juego
            // O si prefieres permitir cambios siempre antes del clic en "Confirmar Decisión Final":
            document.querySelectorAll('.choice-final-suspect').forEach(btn => btn.classList.remove('active-choice'));
            e.target.classList.add('active-choice');
            
            let cur = loadState(); 
            cur.final_suspect_choice = sName; 
            saveState(cur);
        });
        
        choiceArea.appendChild(optionBtn);
    });
}

// =========================================================
// 8. FIN DEL ARCHIVO
// =========================================================