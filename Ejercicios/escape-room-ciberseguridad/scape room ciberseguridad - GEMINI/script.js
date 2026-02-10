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
    },
    hackers: {
        post_mission_concern: "Has identificado a un sospechoso. Bien. Pero la historia no termina ahí. Recientes intentos de 'Credential Stuffing' han sido detectados, alguien está probando contraseñas robadas. Necesitamos entender cómo se protegen las identidades digitales. Hay una habitación de pruebas con fallos de autenticación que debes explorar. Ve a la **Oficina de Identidad Digital**. 🤔 Recibes otra letra: ** O **, ¿casualidad?  ",
        description: "Agente, el problema se complica. Hay un 'Código Fantasma' operando dentro de ATLAS, alguien con acceso y conocimientos internos. Mi preocupación es que podría ser una de nuestras nuevas incorporaciones. Debemos entender que no todos los 'hackers' son iguales; hay quienes buscan proteger (Sombreros Blancos), quienes operan en la ambigüedad (Sombreros Grises) y quienes buscan el daño (Sombreros Negros). Es vital discernir sus intenciones para proteger nuestra red. Analiza estos perfiles y clasifica a cada agente. Luego, y esto es crucial, elige a tu Sospechoso Principal. Tu elección activará la siguiente fase de nuestra investigación.",
    },
    credenciales: {
        pistaIntriga: "** 🚨** Se halló un borrador de correo con terminología de **rescate de datos** en la cuenta del Agente Leo. / Un acceso remoto inesperado fue detectado desde una **dirección MAC estática** en la red de invitados. 🤔 una nota que te llama la atención ** RR **",
        post_mission_concern: "Has fortalecido las defensas de identidad, Agente. Pero la amenaza es más sutil. El Agente Phish está alarmado por una serie de sucesos extraños en Seguridad Interna, incidentes donde parece que la gente 'simplemente entregó' información. Debemos aprender a protegernos de la manipulación. Ve a la **Oficina de Seguridad Interna**. ",
        description: "Agente, hemos contenido un intento masivo de 'Credential Stuffing' gracias a nuestra Autenticación Multifactor (MFA). Pero la realidad es que no todas tus cuentas personales tienen esta protección. La MFA es una capa de seguridad vital que exige dos o más pruebas para verificar tu identidad: algo que sabes (tu contraseña), algo que tienes (un código de tu móvil) o algo que eres (tu huella dactilar). Mi preocupación es que sin ella, tus cuentas son vulnerables. Para continuar, deberás explorar una 'habitación oscura' de nuestro sistema de pruebas. Deberás descifrarlo para obtener la clave numérica de 4 cifras que restaurará el acceso a un sistema de credenciales crítico.",
    },
    ing_social: {
        pistaIntriga: "** 🚨** El malware usa un protocolo diseñado para dispositivos de **bajo consumo y simple procesamiento**. / La Agente Vega ha accedido a la base de datos de Becas (M1) más de 12 veces esta semana. ¡Demasiadas veces! ¿no? 🤔 Alguien quiere decirnos algo: ** E **",
        post_mission_concern: "La ingeniería social es una debilidad crítica, Agente. Pero hay algo más que me preocupa... La empresa ha estado invirtiendo mucho en tecnología IoT para mejorar la eficiencia, pero dudo que estén implementando las medidas de seguridad correctas. El 'Código Fantasma' podría explotar esto. Ve a la **Oficina de Innovación (IoT)** para una auditoría de seguridad. ",
        description: "Agente, estoy seriamente preocupado por una serie de incidentes que no encajan con los patrones de ataques habituales. No son fallas de software o contraseñas débiles. Es como si a la gente... simplemente se la hubiera manipulado para que hiciera cosas que no debía. Esto es Ingeniería Social, el arte oscuro de la persuasión. Los atacantes explotan nuestra confianza, nuestra curiosidad, nuestro miedo, o sobre todo, nuestra **urgencia**, para que les demos información o hagamos clic donde no debemos. Necesito que converses con nuestro chatbot de simulación de buenas prácticas en este Genially. Aprende a identificar las maniobras y, al finalizar el entrenamiento, obtendrás la clave.",
    },
    iot: {
        post_mission_concern: "Has neutralizado las vulnerabilidades del IoT, Agente. La red está más segura, pero el rastro del 'Código Fantasma' nos ha llevado a un punto crítico. Ahora, con toda la información, debes tomar la decisión final. ¿Quién es el verdadero Código Fantasma? ¿El factor humano o el sistémico? Tu elección sellará el destino de ATLAS. 🤔 ** A ** ??? ¿Qué significa??",
        description: "Agente, hemos llegado al último punto. En ATLAS, hemos abrazado la tecnología IoT (Internet de las Cosas) para optimizar procesos, desde el control ambiental hasta la seguridad perimetral con cámaras inteligentes. Esto nos permite una eficiencia sin precedentes. Pero mi gran preocupación es que, si no se usan correctamente, estas tecnologías nos exponen a nuevos riesgos. Recuerdo que, durante la instalación de una de las cámaras en un sector remoto, el técnico a cargo me comentó algo inquietante: —“Por defecto, la clave inicial de ese modelo es NODE.“ ¿La habrá cambiado? ¿O seguimos expuestos, sin saberlo? 🧩 El Código Fantasma logró infiltrarse. Algo falló, agente... y necesitamos descubrir qué fue. ",
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

function loadGeniallyIframe(containerId, geniallyId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (container.querySelector(`iframe[src*="${geniallyId}"]`)) return;
    container.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.id = `genially-iframe-${geniallyId}`;
    iframe.src = `https://view.genially.com/${geniallyId}/interactive-image-ingenieria-social-ejemplo`;
    iframe.width = '100%';
    iframe.height = '500px';
    iframe.style.border = '0';
    iframe.allow = 'fullscreen';
    container.appendChild(iframe);
}

function loadYoutubeVideo(containerId, videoId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (container.querySelector(`iframe[src*="${videoId}"]`)) return;
    container.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
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

// Cambia el botón a "Continuar Operación" (segundo estado)
function setButtonToContinue(missionId, submitButton, challengeKeyInput) {
    if (submitButton) {
        submitButton.dataset.originalText = submitButton.dataset.originalText || submitButton.textContent;
        submitButton.textContent = 'Continuar próxima misión';
        submitButton.classList.remove('success', 'error');
        submitButton.classList.add('primary', 'continue-btn');
        submitButton.disabled = false;
    }
    if (challengeKeyInput) challengeKeyInput.disabled = true;
}

function resetSubmitButton(missionId, submitButton, challengeKeyInput) {
    const fb = getFeedbackElement(missionId);
    if (fb) {
        fb.className = 'feedback';
        fb.textContent = '';
    }
    if (submitButton) {
        submitButton.textContent = submitButton.dataset.originalText || 'Desbloquear Firewall';
        submitButton.classList.remove('primary', 'continue-btn');
        submitButton.classList.add('success');
        submitButton.disabled = false;
    }
    if (challengeKeyInput) challengeKeyInput.disabled = false;
}

// función principal: valida la clave y actualiza estado; ahora usa getters resilientes
function handleMissionSubmitClick(missionId) {
    const submitButton = getSubmitButton(missionId);
    const challengeKeyInput = getChallengeKeyInput(missionId);
    const feedbackElement = getFeedbackElement(missionId);

    // detectar si el botón está en modo 'Continuar Operación'
    const isContinue = submitButton && /Continuar próx/i.test(submitButton.textContent);

    if (!submitButton) {
        console.warn(`submitButton no encontrado para misión ${missionId}. Abortando acción.`);
        if (feedbackElement) {
            feedbackElement.textContent = 'Error interno: elemento botón no encontrado.';
            feedbackElement.className = 'feedback error active';
        }
        return;
    }

    // 1) Si botón "Continuar Operación": completar misión
    if (isContinue) {
        handleMissionCompletion(missionId, true);
        return;
    }

    // 2) Validación habitual (primer clic)
    let isKeyCorrect = false;
    let feedbackMessage = "";
    const state = loadState();

    if (state.keys[missionId]) {
        setButtonToContinue(missionId, submitButton, challengeKeyInput);
        return;
    }

    switch (missionId) {
        case 'intro': {
            const input = (challengeKeyInput && challengeKeyInput.value) ? challengeKeyInput.value.toUpperCase().trim() : '';
            isKeyCorrect = input === CLAVES.intro;
            if (isKeyCorrect) {
                feedbackMessage = `✅ Firewall Misión 1 Desbloqueado. Clave aceptada. ${BRIEF.intro?.post_mission_concern || ''}`;
            } else {
                updateScore(-M1_SCORE_LOSS_KEY);
                feedbackMessage = "🚨 ERROR: Clave incorrecta. Revisa el Principio C.I.D. y las pistas.";
            }
            break;
        }
        case 'hackers': {
            // M2: botón puede ser btn-confirm-suspect u otro; aquí verificamos state.suspect
            if (!state.suspect) {
                isKeyCorrect = false;
                feedbackMessage = "🚨 ERROR: Debes seleccionar un sospechoso principal.";
            } else {
                isKeyCorrect = true;
                updateScore(M2_SCORE_SELECT_SUSPECT);
                feedbackMessage = `✅ ¡Misión 2 completada! Sospechoso principal ${state.suspect.replace('Agente ', '')} confirmado. ${BRIEF.hackers?.post_mission_concern || ''}`;
                // deshabilitar selección visual (si existe)
                document.querySelectorAll('.suspect-option').forEach(btn => btn.style.pointerEvents = 'none');
                const confirmBtn = getSubmitButton('hackers');
                if (confirmBtn) confirmBtn.disabled = true;
            }
            break;
        }
        case 'credenciales': {
            const input = (challengeKeyInput && challengeKeyInput.value) ? challengeKeyInput.value.trim() : '';
            isKeyCorrect = input === CLAVES.credenciales;
            if (isKeyCorrect) {
                feedbackMessage = `✅ Firewall Misión 3 Desbloqueado. Clave aceptada. ${BRIEF.credenciales?.post_mission_concern || ''} ${BRIEF.credenciales?.pistaIntriga || ''}`;
            } else {
                updateScore(-M3_SCORE_LOSS_KEY);
                feedbackMessage = "🚨 ERROR: Clave incorrecta. ¡Explora bien la habitación oscura del Genially!";
            }
            break;
        }
        case 'ing_social': {
            const input = (challengeKeyInput && challengeKeyInput.value) ? challengeKeyInput.value.toUpperCase().trim() : '';
            isKeyCorrect = input === CLAVES.ing_social;
            if (isKeyCorrect) {
                feedbackMessage = `✅ Simulación de Ing. Social completada. Clave aceptada. ${BRIEF.ing_social?.post_mission_concern || ''} ${BRIEF.ing_social?.pistaIntriga || ''}`;
            } else {
                updateScore(-M4_SCORE_LOSS_KEY);
                feedbackMessage = "🚨 ERROR: Clave incorrecta. ¡Revisa la conversación con el chatbot!";
            }
            break;
        }
        case 'iot': {
            const input = (challengeKeyInput && challengeKeyInput.value) ? challengeKeyInput.value.toUpperCase().trim() : '';
            isKeyCorrect = input === CLAVES.iot;
            if (isKeyCorrect) {
                feedbackMessage = `✅ Firewall Misión 5 Desbloqueado. Clave aceptada. ${BRIEF.iot?.post_mission_concern || ''}`;
                // mostrar elección final si existe
                const finalSection = document.getElementById('final-suspect-choice-section');
                if (finalSection) finalSection.style.display = 'block';
                renderFinalSuspectChoiceUI(loadState());
            } else {
                updateScore(-M5_SCORE_LOSS_KEY);
                feedbackMessage = "🚨 ERROR: Clave incorrecta. Revisa el nombre de usuario por defecto en dispositivos IoT.";
            }
            break;
        }
        default:
            feedbackMessage = "Misión desconocida.";
    }

    if (feedbackElement) {
        feedbackElement.textContent = feedbackMessage;
        feedbackElement.className = `feedback ${isKeyCorrect ? 'success' : 'error'} active`;
    } else {
        console.warn("No se encontró elemento feedback para misión", missionId);
    }

    if (isKeyCorrect) {
        setButtonToContinue(missionId, submitButton, challengeKeyInput);
    } else {
        // asegurar que el botón no quede bloqueado
        submitButton.disabled = false;
    }
}

// =========================================================
// 7. LÓGICA DE INTERACCIÓN (listeners) - mantenemos la lógica
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    let state = loadState();

    document.getElementById('btn-start')?.addEventListener('click', () => {
        setScreen('screen-game');
        setSubScreen('screen-map');
        updateHUD();
    });

    // Carpetas -> abrir subpantalla. Soportamos botones que tengan data-target-screen o simplemente estén dentro de folder
    document.querySelectorAll('.folder button[data-target-screen], .folder button[data-targetscreen]').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetSubScreenId = e.target.dataset.targetScreen || e.target.dataset.targetscreen;
            const folderElement = e.target.closest('.folder');
            if (!folderElement) return;
            const missionId = folderElement.dataset.missionId || folderElement.getAttribute('data-mission-id') || folderElement.getAttribute('data-mission');
            const index = ORDER.indexOf(missionId);
            state = loadState();

            if (index > 0 && !state.keys[ORDER[index - 1]] && !state.keys[missionId]) {
                alert('Misión Bloqueada. Debes completar la anterior primero.');
                e.preventDefault();
                return;
            }

            if (targetSubScreenId) {
                setSubScreen(targetSubScreenId);
                const brieferInfo = MISSION_BRIEFERS[missionId];
                if (brieferInfo) {
                    const missionBriefingContainer = document.getElementById(`${targetSubScreenId}-briefing`);
                    if (missionBriefingContainer) {
                        const videoId = BOSS_VIDEOS[brieferInfo.name];
                        const videoWrapper = missionBriefingContainer.querySelector('.video-wrapper');
                        if (videoId && videoWrapper) loadYoutubeVideo(videoWrapper.id, videoId);

                        const missionDescriptionElement = missionBriefingContainer.querySelector('.briefing-text');
                        if (missionDescriptionElement && BRIEF[missionId]) missionDescriptionElement.innerHTML = BRIEF[missionId].description || '';

                        const brieferNameElement = missionBriefingContainer.querySelector('.briefer-name');
                        if (brieferNameElement) brieferNameElement.textContent = `Informe de la ${brieferInfo.name}`;

                        const brieferAvatarElement = missionBriefingContainer.querySelector('img.avatar');
                        if (brieferAvatarElement) brieferAvatarElement.src = brieferInfo.avatar;

                        const challengeUi = missionBriefingContainer.querySelector('.challenge-ui');
                        const unlockSection = missionBriefingContainer.parentElement.querySelector('.unlock');

                        // asegurarnos de que submit/challenge están sincronizados con estado
                        const submitButton = getSubmitButton(missionId);
                        const challengeKeyInput = getChallengeKeyInput(missionId);

                        if (state.keys[missionId]) {
                            if (missionDescriptionElement && BRIEF[missionId] && BRIEF[missionId].post_mission_concern) {
                                missionDescriptionElement.innerHTML = BRIEF[missionId].post_mission_concern;
                            }
                            if (challengeUi) challengeUi.style.display = 'none';
                            if (unlockSection) unlockSection.style.display = 'none';
                            if (submitButton) {
                                submitButton.textContent = 'Volver al Mapa';
                                submitButton.classList.remove('success');
                                submitButton.classList.add('primary');
                                submitButton.onclick = () => setSubScreen('screen-map');
                                submitButton.disabled = false;
                            }
                        } else {
                            if (challengeUi) challengeUi.style.display = 'block';
                            if (unlockSection) unlockSection.style.display = 'block';
                            resetSubmitButton(missionId, submitButton, challengeKeyInput);
                        }
                    }
                }

                // Cargar Genially si corresponde (IDs tal como antes)
                if (targetSubScreenId === 'mission3') loadGeniallyIframe('genially-container-wrapper-m3', '68f7f6a5e20bb1a9756973c5');
                if (targetSubScreenId === 'mission4') loadGeniallyIframe('genially-container-wrapper-m4', '68f39f77532d1fe72f657dac');
                if (targetSubScreenId === 'mission2') renderSuspectChoiceUI(loadState());
                if (targetSubScreenId === 'mission5') {
                    const finalSuspectSection = document.getElementById('final-suspect-choice-section');
                    if (finalSuspectSection) finalSuspectSection.style.display = state.keys[missionId] ? 'block' : 'none';
                    renderFinalSuspectChoiceUI(state);
                }
            }
        });
    });

    // Footer "volver al mapa"
    document.querySelectorAll('.footer-actions button[data-target-screen="screen-map"]').forEach(button => {
        button.addEventListener('click', () => {
            setSubScreen('screen-map');
            updateHUD();
        });
    });

    // --- ASIGNACIÓN DE HANDLERS DE SUBMIT: probamos múltiples IDs para robustez ---
    const tryAttach = (possibleIds, fn) => {
        possibleIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('click', fn);
        });
    };

    // M1 (intro) - múltiples patrones
    tryAttach(['mission1-btn-submit', 'intro-btn-submit', 'intro-btnsubmit', 'mission1-btnsubmit'], () => handleMissionSubmitClick('intro'));

    // M2 confirm suspect
    tryAttach(['btn-confirm-suspect', 'hackers-btn-confirm', 'mission2-btn-confirm', 'confirm-suspect'], () => handleMissionSubmitClick('hackers'));

    // M3 credenciales
    tryAttach(['mission3-btn-submit', 'credenciales-btn-submit', 'credenciales-btnsubmit', 'mission3-btnsubmit'], () => handleMissionSubmitClick('credenciales'));

    // M4 ing_social
    tryAttach(['mission4-btn-submit', 'ing_social-btn-submit', 'ing_social-btnsubmit', 'mission4-btnsubmit'], () => handleMissionSubmitClick('ing_social'));

    // M5 iot
    tryAttach(['mission5-btn-submit', 'iot-btn-submit', 'iot-btnsubmit', 'mission5-btnsubmit'], () => handleMissionSubmitClick('iot'));

    // --- LÓGICA M1: elecciones C/I/D (mantenida) ---
    const M1_SCORE_GAIN = 500;
    const M1_SCORE_LOSS_CHOICE = 25;
    document.querySelectorAll('#challenge-cid .challenge-item .choice').forEach(button => {
        button.addEventListener('click', (e) => {
            const parentItem = e.target.closest('.challenge-item');
            const correctCid = parentItem.dataset.cidCorrect;
            const selectedCid = e.target.dataset.key;
            parentItem.querySelectorAll('.choice').forEach(x => x.classList.remove('picked', 'correct', 'incorrect'));
            e.target.classList.add('picked');
            if (selectedCid === correctCid) {
                if (!parentItem.dataset.scored) { updateScore(M1_SCORE_GAIN / 3); parentItem.dataset.scored = 'true'; }
                e.target.classList.add('correct');
            } else {
                updateScore(-M1_SCORE_LOSS_CHOICE);
                e.target.classList.add('incorrect');
            }
        });
    });

    // --- LÓGICA M2: clasificación hackers + selección sospechoso ---
    const M2_SCORE_CLASSIFY_CORRECT = 50;
    const M2_SCORE_CLASSIFY_ERROR = 25;

    function renderSuspectChoiceUI(currentState) {
        const choiceArea = document.getElementById('suspect-choice-area');
        if (!choiceArea) return;
        choiceArea.innerHTML = '';
        const classifiedCount = document.querySelectorAll('#challenge-hackers .challenge-item[data-hacker-correct][data-scored="true"]').length;
        const totalToClassify = document.querySelectorAll('#challenge-hackers .challenge-item[data-hacker-correct]').length;
        const canChooseSuspect = classifiedCount >= totalToClassify || currentState.keys['hackers'];

        const suspectSelectionMessage = document.getElementById('suspect-selection-message');
        const confirmButton = getSubmitButton('hackers') || document.getElementById('btn-confirm-suspect');
        if (canChooseSuspect) {
            if (suspectSelectionMessage) suspectSelectionMessage.textContent = `Puedes elegir tu sospechoso. (Sospechoso actual: ${currentState.suspect ? currentState.suspect.replace('Agente ', '') : 'NINGUNO'})`;
            if (confirmButton) { confirmButton.style.display = 'inline-block'; confirmButton.disabled = currentState.keys['hackers']; }
        } else {
            if (suspectSelectionMessage) suspectSelectionMessage.textContent = "Clasifica a los tres agentes arriba para habilitar la selección.";
            if (confirmButton) confirmButton.style.display = 'none';
        }

        ['Agente Vega', 'Agente Leo', 'Agente Kael'].forEach(sName => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'suspect-option';
            optionDiv.dataset.suspect = sName;
            const img = document.createElement('img'); img.src = SUSPECT_IMAGES[sName]; img.alt = sName;
            const span = document.createElement('span'); span.textContent = sName.replace('Agente ', '');
            optionDiv.appendChild(img); optionDiv.appendChild(span);
            if (currentState.suspect === sName) optionDiv.classList.add('active-choice');
            if (!canChooseSuspect || currentState.keys['hackers']) {
                optionDiv.style.opacity = '0.5'; optionDiv.style.pointerEvents = 'none';
            } else {
                optionDiv.style.opacity = '1'; optionDiv.style.pointerEvents = 'auto';
                optionDiv.addEventListener('click', () => {
                    document.querySelectorAll('.suspect-option').forEach(opt => opt.classList.remove('active-choice'));
                    optionDiv.classList.add('active-choice');
                    let cur = loadState(); cur.suspect = sName; saveState(cur);
                });
            }
            choiceArea.appendChild(optionDiv);
        });
    }

    document.querySelectorAll('#challenge-hackers .challenge-item .choice').forEach(button => {
        button.addEventListener('click', (e) => {
            const parentItem = e.target.closest('.challenge-item');
            const correctType = parentItem.dataset.hackerCorrect;
            const selectedType = e.target.dataset.hackerType;
            parentItem.querySelectorAll('.choice').forEach(btn => btn.classList.remove('picked', 'correct', 'incorrect'));
            e.target.classList.add('picked');
            if (selectedType === correctType) {
                if (!parentItem.dataset.scored) { updateScore(M2_SCORE_CLASSIFY_CORRECT); parentItem.dataset.scored = 'true'; }
                e.target.classList.add('correct');
            } else {
                updateScore(-M2_SCORE_CLASSIFY_ERROR);
                e.target.classList.add('incorrect');
            }
            renderSuspectChoiceUI(loadState());
        });
    });

    // --- LÓGICA IOT (M5) ---
    const M5_SCORE_GAIN_CHOICE = 500;
    const M5_SCORE_LOSS_CHOICE = 50;
    document.querySelectorAll('#challenge-iot .challenge-item .choice').forEach(button => {
        button.addEventListener('click', (e) => {
            const parentItem = e.target.closest('.challenge-item');
            const correctIot = parentItem.dataset.iotCorrect;
            const selectedIot = e.target.dataset.iotOption;
            parentItem.querySelectorAll('.choice').forEach(x => x.classList.remove('picked', 'correct', 'incorrect'));
            e.target.classList.add('picked');
            if (selectedIot === correctIot) {
                if (!parentItem.dataset.scored) { updateScore(M5_SCORE_GAIN_CHOICE / 3); parentItem.dataset.scored = 'true'; }
                e.target.classList.add('correct');
            } else {
                updateScore(-M5_SCORE_LOSS_CHOICE);
                e.target.classList.add('incorrect');
            }
        });
    });

    // --- FINAL: elección culpable ---
    function renderFinalSuspectChoiceUI(currentState) {
        const choiceArea = document.getElementById('final-suspect-choice-area');
        if (!choiceArea) return;
        choiceArea.innerHTML = '';
        const suspects = ['Agente Vega', 'Agente Leo', 'Agente Kael', 'Sistema IoT (NODE)'];
        suspects.forEach(sName => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'btn secondary choice-final-suspect';
            optionBtn.textContent = sName.replace('Agente ', '');
            optionBtn.dataset.suspectFinal = sName;
            if (!currentState.final_suspect_choice && currentState.suspect === sName) optionBtn.classList.add('active-choice');
            if (currentState.final_suspect_choice === sName) optionBtn.classList.add('active-choice');
            if (currentState.keys['iot'] && currentState.final_suspect_choice) optionBtn.disabled = true;
            optionBtn.addEventListener('click', (e) => {
                if (currentState.keys['iot'] && currentState.final_suspect_choice) return;
                document.querySelectorAll('.choice-final-suspect').forEach(btn => btn.classList.remove('active-choice'));
                e.target.classList.add('active-choice');
                let cur = loadState(); cur.final_suspect_choice = sName; saveState(cur);
            });
            choiceArea.appendChild(optionBtn);
        });
    }
// =========================================================
// CÓDIGO A INSERTAR/REEMPLAZAR EN EL EVENT LISTENER
// =========================================================

const INNOCENCE_REPORT = {
    'Agente Vega': {
        name: 'Dra. Vega',
        avatar: 'vega.png', // <--- RUTA DE TU IMAGEN
        justification: "Su actividad de múltiples inicios de sesión era legítima, resultado de su **sobrecarga de trabajo** como Directora, supervisando remotamente múltiples paneles críticos."
    },
    'Agente Leo': {
        name: 'Agente Leo',
        avatar: 'leo.png', // <--- RUTA DE TU IMAGEN
        justification: "Sus rastros en la Deep Web no eran de ataque, sino de **investigación proactiva** (sombrero gris/blanco), buscando activamente las mismas vulnerabilidades que nos afectaron. Estaba ayudando a Kai Byte en secreto."
    },
    'Agente Kael': {
        name: 'Agente Kael',
        avatar: 'kael.png', // <--- RUTA DE TU IMAGEN
        justification: "Fue una víctima, no el atacante. Sus credenciales débiles se filtraron **antes** de ser contratado por ATLAS. Su vulnerabilidad nos alertó, pero su intención actual es limpia."
    },
    // Añade también un objeto para el verdadero culpable (Sistema IoT) si quieres un avatar para él
    'Sistema IoT (NODE)': {
        name: 'Vulnerabilidad IoT (NODE)',
        avatar: 'iot.png', // <--- RUTA DE TU IMAGEN (Ej: un icono de cámara, o un router)
        justification: "El Código Fantasma fue la explotación de una configuración por defecto en el sistema IoT, no un agente humano."
    }
};



// ... dentro del event listener de 'btn-confirm-final-suspect' ...

    document.getElementById('btn-confirm-final-suspect')?.addEventListener('click', () => {
        let cur = loadState();
        if (!cur.final_suspect_choice) { alert('Por favor, selecciona al Código Fantasma.'); return; }
        
        const REAL_CULPRIT_KEY = 'Sistema IoT (NODE)'; // Usamos una clave para el objeto INNOCENCE_REPORT
        let finalMessage = "";
        let finalScoreAdjustment = 0;

        if (cur.final_suspect_choice === REAL_CULPRIT_KEY) {
            // ✅ ESCENARIO DE ÉXITO: ELIGE LA VULNERABILIDAD
            finalMessage = `
                <h3 style="color: var(--success); margin-bottom: 15px;">✅ ¡HAS DESENMASCARADO AL CÓDIGO FANTASMA!</h3>
                <p>La infiltración se originó en el **${INNOCENCE_REPORT[REAL_CULPRIT_KEY].name}**. El 'Código Fantasma' no era un empleado, sino un **error de diseño y confianza en la tecnología**.</p>
                
                <h4 style="margin-top: 15px; border-bottom: 1px solid var(--line); padding-bottom: 5px;">📜 Reporte de Inocencia:</h4>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 15px;">
                    ${['Agente Vega', 'Agente Leo', 'Agente Kael'].map(agentKey => `
                        <div style="text-align: center; width: 150px; flex-shrink: 0;">
                            <img src="${INNOCENCE_REPORT[agentKey].avatar}" alt="${INNOCENCE_REPORT[agentKey].name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent); margin-bottom: 5px;">
                            <p><strong>${INNOCENCE_REPORT[agentKey].name}</strong></p>
                            <p style="font-size: 0.8em;">${INNOCENCE_REPORT[agentKey].justification}</p>
                        </div>
                    `).join('')}
                </div>
                
                <p style="margin-top: 20px;"><strong>🚨📢🔔⚠️</strong> El punto de entrada fue una **cámara IoT con la clave 'NODE' por defecto**. El mayor riesgo hoy reside en los sistemas y aparatos personales que introducimos en nuestra red. Tu móvil, tu casa inteligente... ¡siempre pueden ser una puerta trasera!</p>
                
                <p style="font-style: italic; font-size: 0.9em; margin-top: 15px;">**¿Pero el sospechoso humano?** La duda persiste: ¿fue la vulnerabilidad un *accidente* o un *cebo* para desviar la atención de otro agente que aún opera en las sombras? **¿Sospechas de alguién más?.**</p>
            `;
            finalScoreAdjustment = 5000;
        } else {
            // ⚠️ ESCENARIO DE FALLO: ELIGE A UN HUMANO
            const chosenSuspectData = INNOCENCE_REPORT[cur.final_suspect_choice];
            finalMessage = `
                <h3 style="color: var(--error); margin-bottom: 15px;">⚠️ VULNERABILIDAD CERRADA, PERO CULPABLE ERRADO.</h3>
                <div style="text-align: center; margin-bottom: 15px;">
                    <img src="${chosenSuspectData.avatar}" alt="${chosenSuspectData.name}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid var(--error);">
                    <p style="font-size: 1.1em; margin-top: 5px;">Has acusado a <strong>${chosenSuspectData.name}</strong>.</p>
                </div>
                
                <h4 style="margin-top: 15px; border-bottom: 1px solid var(--line); padding-bottom: 5px;">❌ Error de Juicio:</h4>
                <p>${chosenSuspectData.justification}</p>
                
                <p style="margin-top: 20px;">**LECCIÓN: ¡No todo es un hacker!** A menudo, el eslabón más débil no es un humano con malas intenciones, sino un dispositivo con una configuración por defecto. Tu foco fue el factor humano, pero el fallo real fue el **${INNOCENCE_REPORT[REAL_CULPRIT_KEY].name}**.</p>
                <div style="text-align: center; margin-top: 15px;">
                    <img src="${INNOCENCE_REPORT[REAL_CULPRIT_KEY].avatar}" alt="${INNOCENCE_REPORT[REAL_CULPRIT_KEY].name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--success);">
                    <p style="font-size: 0.9em; margin-top: 5px;">El verdadero culpable era: <strong>${INNOCENCE_REPORT[REAL_CULPRIT_KEY].name}</strong></p>
                </div>
            `;
            finalScoreAdjustment = -2000;
        }
        
        // ... (el resto del código para actualizar score, setSubScreen, etc.)
        let stateNow = loadState();
        stateNow.score = Math.round(Math.max(0, stateNow.score + finalScoreAdjustment)); 
        saveState(stateNow);
        
        document.getElementById('final-message') && (document.getElementById('final-message').innerHTML = finalMessage);
        document.getElementById('final-score') && (document.getElementById('final-score').textContent = loadState().score);
        setSubScreen('screen-end');
        document.getElementById('btn-confirm-final-suspect') && (document.getElementById('btn-confirm-final-suspect').disabled = true);
        // NO OLVIDAR: Llamar a updateHUD() si quieres que el HUD de arriba se actualice también
        updateHUD(); 
    });
    document.getElementById('btn-replay')?.addEventListener('click', () => {
        localStorage.removeItem('atlas_firewall_state');
        location.reload();
    });

    updateHUD();
    setScreen('screen-start');
});

// =========================================================
// 8. FIN DEL ARCHIVO
// =========================================================
