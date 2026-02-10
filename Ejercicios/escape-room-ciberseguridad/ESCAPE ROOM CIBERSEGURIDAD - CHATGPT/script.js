// ===============================================================
// OPERACIÓN FIREWALL: AMENAZA INTERNA — Thriller de espionaje digital
// ===============================================================
//
// 🎯 Dónde editar textos fácilmente:
//   - Bloque BRIEF[...]  -> narrativa del BRIEFING inicial de cada misión
//   - Bloque POST[...]   -> narrativa de CIERRE tras desbloquear cada firewall
//   - Bloque DEFINICIONES -> definiciones conceptuales breves
//
// Marca de búsqueda:  // 🔧 EDITAR NARRATIVA AQUÍ
//
// ===============================================================


// ---------- CONFIG VISUAL / RECURSOS ----------
const SUSPECTS = ["Agente Vega","Agente Leo","Agente Kael"];
const SUSPECT_IMAGES = {
  "Agente Vega": "vega.png",
  "Agente Leo": "leo.png",
  "Agente Kael": "kael.png"
};

// IDs de YouTube (solo la parte final). Puedes cambiarlos.
const BOSS_VIDEOS = {
  "Dra. Vega": "ZbT5b0vhKEU",
  "Kai Byte": "9enczDlsgAU",
  "Dra. Cipher": "7kuHR6ecctI",
  "Agente Phish": "BvYvB1Y1cUM",
  "Ing. Nodea": "ct_5oRsCrdE"
};

// Recursos externos (enlace "Ver video/explicación")
const RESOURCES = {
  intro: "https://youtu.be/nKYJR3gh1AI?si=1X4brTe50OXzYMif",
  hackers: "https://youtu.be/Puk3JZ5R_Ic?si=yA4DSyxBEQcpa8Oa",
  credenciales: "https://view.genial.ly/XXXXXXXXXXXX/embed", // 🔧 EDITAR: Genially de la habitación oscura (código 4 cifras)
  ing_social: "https://view.genial.ly/YYYYYYYYYYYY/embed",     // 🔧 EDITAR: Genially del chatbot de buenas prácticas
  iot: "https://youtu.be/IxgtaqnpSJQ?si=HJg_aFOHlj3Xli9X"
};

// Genially por misión
const GENIALLY_EMBEDS = {
  credenciales: RESOURCES.credenciales, // habitación oscura (código 4 cifras)
  ing_social: RESOURCES.ing_social      // chatbot de buenas prácticas
};


// ---------- ESTADO DEL JUEGO ----------
let score = 0;
const KEYS = { intro:false, hackers:false, credenciales:false, ing_social:false, iot:false };
const ORDER = ["intro","hackers","credenciales","ing_social","iot"];
let finalSuspect = null;

// Claves de firewall
const CLAVES = {
  intro: "CONFIDENCIALIDAD",
  credenciales: "4321",  // Se deduce tras explorar la "habitación oscura" (Genially)
  ing_social: "URGENCIA",
  iot: "NODE"
};


// ---------- NARRATIVA Y DEFINICIONES ----------

// 🔧 EDITAR NARRATIVA AQUÍ — definiciones breves que se citan en los briefings
const DEFINICIONES = {
  cia: "C.I.D. — Confidencialidad, Integridad y Disponibilidad: tres pilares que mantienen la verdad a salvo del ruido.",
  cred: "MFA: algo que sabés + algo que tenés (+ algo que sos). Cerrar puertas no basta; hay que atrancarlas.",
  soc: "Ingeniería Social: no hackea máquinas, hackea decisiones. Su herramienta favorita: la urgencia."
};

// 🔧 EDITAR NARRATIVA AQUÍ — BRIEFING (inicio de misión: entorno + concepto + tono thriller)
const BRIEF = {
  intro: {
    avatar: "V",
    title: "Oficina 1: Dirección — Triada C.I.D.",
    role: "Dra. Vega, Directora General",
    text: `
      <b>[Acceso concedido: Despacho de Dirección]</b><br>
      La <b>Dra. Vega</b> te cita por actividad anómala en los accesos al repositorio de Becas. 
      “Atlas no sangra por golpes, sangra por silencios.” Te pide confirmar que entendés <b>C.I.D.</b>:<br/>
      • <i>Confidencialidad</i>: lo que no debe verse.<br/>
      • <i>Integridad</i>: lo que no debe alterarse.<br/>
      • <i>Disponibilidad</i>: lo que no debe apagarse.<br/>
      <small>${DEFINICIONES.cia}</small>
    `,
    puzzleDesc: "Clasificá los activos con C/I/D y desbloqueá el primer firewall."
  },
  hackers: {
    avatar: "K",
    title: "Oficina 2: Reclutamiento — Código Fantasma",
    role: "Kai Byte, Analista Forense",
    text: `
      <b>[Acceso concedido: Sala de Reclutamiento]</b><br>
      Kai te muestra tres expedientes recientes. “No todos los hackers son villanos, pero tampoco héroes.
      <i>Sombrero Blanco</i> ayuda; <i>Gris</i> camina en la línea; <i>Negro</i> cruza la frontera.”<br/>
      Clasificá a cada perfil y elegí un <b>Sospechoso Principal</b>. Los registros de acceso sugieren manos internas...
    `,
    puzzleDesc: "Clasificá a los 3 agentes y elegí el sospechoso. (Sin clave: tu elección desbloquea.)"
  },
  credenciales: {
    avatar: "C",
    title: "Oficina 3: Identidad Digital — El Código de Acceso",
    role: "Dra. Cipher, Criptógrafa",
    text: `
      <b>[Acceso concedido: Cámara de Servidores]</b><br>
      La <b>Dra. Cipher</b> luce preocupada: “El atacante probó combinaciones masivas de contraseñas (Credential Stuffing),
      pero <b>MFA</b> frenó varios intentos. <br/>
      <small>${DEFINICIONES.cred}</small><br/><br/>
      <b>Explorá esta habitación oscura</b> (Genially) y <b>descifrá el enigma</b>: hallarás un <b>código de 4 cifras</b>
      que fortalece nuestro sistema de restauración.
    `,
    puzzleDesc: "Entrá al Genially de la 'habitación oscura' y encontrá el código de 4 cifras. Ingrésalo para desbloquear."
  },
  ing_social: {
    avatar: "P",
    title: "Oficina 4: Seguridad Interna — El Cuento del Tío",
    role: "Agente Phish, Comportamiento Digital",
    text: `
      <b>[Acceso concedido: Centro de Monitoreo]</b><br>
      El <b>Agente Phish</b> está inquieto: “Llegan mensajes que imitan a bancos, RR.HH., y Soporte. 
      Maniobras vistas: <i>pretexting</i>, <i>phishing</i>, <i>quishing</i>, y sobre todo <b>urgencia</b>.”<br/>
      Conversá con el <b>chatbot de buenas prácticas</b> (Genially) y confirmá la emoción detonante más explotada.
      <small>${DEFINICIONES.soc}</small>
    `,
    puzzleDesc: "Usá el Genially (chatbot) y escribí la emoción detonante (p. ej. URGENCIA)."
  },
  iot: {
    avatar: "N",
    title: "Oficina 5: Innovación — Hogar Conectado",
    role: "Ing. Nodea, Sistemas Conectados",
    text: `
      <b>[Acceso concedido: Laboratorio Domótico]</b><br>
      El Instituto adoptó IoT para <b>medir consumo</b>, <b>automatizar seguridad</b> y <b>optimizar mantenimiento</b>. 
      “Es brillante si se <i>configura bien</i>. Si no, es una ventana abierta.”, dice la <b>Ing. Nodea</b>.<br/>
      Asegurá la cámara con credenciales por defecto. <b>Sobre la clave ‘NODE’</b>: nuestro incidente involucra un
      “<i>nodo</i>” de cámara cuyo usuario/etiqueta por defecto era <b>NODE</b> en el panel; quedó expuesto y se usó como vector.
    `,
    puzzleDesc: "Elegí la mitigación crítica y usá la clave <b>NODE</b> para restaurar."
  }
};

// 🔧 EDITAR NARRATIVA AQUÍ — POST-MISIÓN (cierre tras clave correcta: deja pista hacia la próxima)
const POST = {
  intro: `
    <b>[Firewall 1 desactivado]</b><br>
    En el panel, una nota: “Acceso a registros SIN permiso”. La derivación apunta a <b>Reclutamiento</b>.
    Alguien reciente presionó más de la cuenta.
  `,
  hackers: `
    <b>[Firewall 2 desactivado]</b><br>
    Un rastro indica que el acceso fantasma no buscaba datos, sino <i>patrones de contraseñas</i>.
    La ruta técnica lleva a <b>Identidad Digital</b>. (Kai susurra: “Ojo con los disfrazados de héroes”.)
  `,
  credenciales: `
    <b>[Firewall 3 desactivado]</b><br>
    Una alerta muestra un correo que no debió circular. Asunto: “<b>URGENTE</b>: verifique su identidad”.
    El camino lógico: <b>Seguridad Interna</b>.<br/>
    <i>Pista (posible distracción)</i>: registros muestran que <b>Agente Leo</b> revisó horarios de Soporte fuera de turno. 
    ¿Ayuda… o coartada?
  `,
  ing_social: `
    <b>[Firewall 4 desactivado]</b><br>
    El mapa de red late sobre dispositivos IoT. Una cámara antigua con panel expuesto aparece etiquetada como <b>NODE</b>.
    Tu próximo paso: <b>Innovación IoT</b>.<br/>
    <i>Pista (posible distracción)</i>: un alias “vega_dev” probó acceso a una red de invitados. ¿Clon o coincidencia?
  `,
  iot: `
    <b>[Firewall 5 desactivado]</b><br>
    El tablero respira. El Firewall Central requiere tu veredicto. 
    Tenés una última oportunidad de <b>cambiar el sospechoso</b> antes del cierre en la Terminal.
  `
};


// ---------- UTILIDADES DOM ----------
const $ = (q)=>document.querySelector(q);
const $$ = (q)=>document.querySelectorAll(q);

function setScreen(id) {
  $$(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

function updateHUD() {
  $("#hud-score") && ($("#hud-score").textContent = score);
  const total = Object.values(KEYS).filter(Boolean).length;
  $("#hud-keys") && ($("#hud-keys").textContent = `${total}/5`);
  if ($("#current-suspect-display")) {
    $("#current-suspect-display").textContent = finalSuspect || "PENDIENTE";
  }
  $("#btn-terminal") && ($("#btn-terminal").disabled = total !== 5);

  // Mostrar botón para cambiar sospechoso tras completar Reclutamiento
  if (KEYS.hackers && !$("#btn-change-suspect")) {
    const hud = $(".hud");
    const btn = document.createElement("button");
    btn.id = "btn-change-suspect";
    btn.className = "btn secondary";
    btn.textContent = "Cambiar sospechoso";
    btn.addEventListener("click", ()=>{
      loadBriefing('hackers');
      startChallenge('hackers');
    });
    hud.appendChild(btn);
  }
}

function enableNextFolder(currentKey){
  const idx = ORDER.indexOf(currentKey);
  const next = ORDER[idx+1];
  if(!next) return;
  const btn = document.querySelector(`.folder[data-mission="${next}"]`);
  if (btn) btn.setAttribute("aria-disabled","false");
}

function play(id){
  const el = $(id);
  if(el){ el.currentTime=0; el.play().catch(()=>{}); }
}


// ---------- EFECTO FONDO (canvas cuadrícula) ----------
(function bg(){
  const c = $("#gridbg"); if(!c) return;
  const ctx = c.getContext("2d");
  function resize(){ c.width = innerWidth; c.height = innerHeight; }
  addEventListener("resize", resize); resize();
  let t=0;
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.strokeStyle = "rgba(0,234,255,0.15)";
    const step = 40;
    for(let x=0; x<c.width; x+=step){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,c.height); ctx.stroke(); }
    for(let y=0; y<c.height; y+=step){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(c.width,y); ctx.stroke(); }
    const r = 120 + 20*Math.sin(t/20);
    ctx.beginPath(); ctx.arc(c.width-140, 120, r, 0, Math.PI*2);
    ctx.strokeStyle = "rgba(0,255,136,0.25)"; ctx.stroke();
    t++; requestAnimationFrame(draw);
  }
  draw();
})();


// ---------- INICIO ----------
$("#btn-start") && $("#btn-start").addEventListener("click", ()=>{
  setScreen("#screen-game");
  updateHUD();
  $("#room-1") && $("#room-1").setAttribute("aria-disabled","false");
  $("#map-hint") && ($("#map-hint").textContent = "Accedé a Dirección para el primer briefing.");
  play("#sfx-open");
});

$$(".folder").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    if(btn.getAttribute("aria-disabled")==="true") return;
    const missionId = btn.dataset.mission;
    loadBriefing(missionId);
    play("#sfx-open");
  });
});


// ---------- BRIEFING (YouTube + enlace + Genially on-demand) ----------
function loadBriefing(id){
  const b = BRIEF[id]; if(!b) return;
  const videoIframe = $("#brief-video-iframe");
  const geniallyWrap = $("#genially-container-wrapper");

  // Títulos y texto
  $("#brief-title").textContent = b.title;
  $("#brief-role").textContent = b.role;
  $("#brief-text").innerHTML = b.text;

  // YouTube en briefing si la misión aún no fue completada
  const bossName = b.role.split(",")[0].trim();
  const youtubeId = BOSS_VIDEOS[bossName];
  if (youtubeId && !KEYS[id]) {
    videoIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}`;
    videoIframe.style.display = "block";
    requestAnimationFrame(()=> videoIframe.classList.add("active"));
  } else {
    videoIframe.classList.remove("active");
    videoIframe.src = "";
    videoIframe.style.display = "none";
  }

  // Enlace “Ver video/explicación”
  const link = $("#brief-video");
  if (RESOURCES[id]) {
    link.href = RESOURCES[id];
    link.style.display = "inline-block";
  } else {
    link.style.display = "none";
  }

  // Genially se muestra solo en el challenge
  if (geniallyWrap) geniallyWrap.style.display = "none";

  // Botón Comenzar — limpiar listeners y habilitar
  let btn = $("#btn-begin");
  btn.style.display = "inline-block";
  btn.disabled = false;
  const clone = btn.cloneNode(true);
  btn.parentNode.replaceChild(clone, btn);
  btn = $("#btn-begin");
  btn.addEventListener("click", ()=> startChallenge(id));

  // Alternar paneles
  $("#challenge").classList.add("hidden");
  $("#briefing").classList.remove("hidden");
}


// ---------- CHALLENGE ----------
function startChallenge(id){
  $("#briefing").classList.add("hidden");
  $("#challenge").classList.remove("hidden");
  $("#feedback").style.display = "none";
  $("#challenge-key").value = "";

  renderChallengeUI(id);

  $("#btn-submit").onclick = ()=> submitKey(id);
  $("#btn-backmap").onclick = ()=>{
    $("#challenge").classList.add("hidden");
    $("#briefing").classList.remove("hidden");
  };
}


// Render específico por misión
function renderChallengeUI(id){
  const ui = $("#challenge-ui");
  ui.innerHTML = "";
  $("#challenge-title").textContent = BRIEF[id].title;
  $("#challenge-desc").textContent = BRIEF[id].puzzleDesc;

  const geniallyWrap = $("#genially-container-wrapper");
  const geniallyDiv = geniallyWrap ? geniallyWrap.querySelector(".genially-embed") : null;

  // ocultos por defecto
  if (geniallyWrap) geniallyWrap.style.display = "none";
  $(".unlock").classList.remove("hidden"); // campo clave visible salvo M2

  if(id==="intro"){
    ui.appendChild(makePairRow("Archivos de Becas (datos sensibles)", ["Confidencialidad","Integridad","Disponibilidad"], "Confidencialidad"));
    ui.appendChild(makePairRow("Servidor de correo (si se cae, se apaga la comunicación)", ["Confidencialidad","Integridad","Disponibilidad"], "Disponibilidad"));
    ui.appendChild(makePairRow("Registros de Auditoría (no deben alterarse)", ["Confidencialidad","Integridad","Disponibilidad"], "Integridad"));
  }

  if(id==="hackers"){
    ui.appendChild(makePairRow("Agente Vega: solicita logs sin permiso; usa Wi-Fi pública; reportes incompletos.", ["Blanco","Gris","Negro"], "Gris"));
    ui.appendChild(makePairRow("Agente Leo: reporta fallos; bloquea IPs sospechosas; da charlas de seguridad.", ["Blanco","Gris","Negro"], "Blanco"));
    ui.appendChild(makePairRow("Agente Kael: rehúsa MFA; ‘password123’ en pruebas; rastros de venta de datos.", ["Blanco","Gris","Negro"], "Negro"));
    ui.appendChild(renderSuspectPicker());
    $(".unlock").classList.add("hidden"); // M2 sin clave
  }

  if(id==="credenciales"){
    // Mostrar Genially de la habitación oscura
    if (geniallyWrap && geniallyDiv) {
      const url = GENIALLY_EMBEDS.credenciales;
      geniallyDiv.innerHTML = `
        <iframe src="${url}" width="100%" height="480" frameborder="0" allowfullscreen
          style="border:1px solid var(--cyan); border-radius:8px;"></iframe>
      `;
      geniallyWrap.style.display = "block";
    }
    $("#challenge-key").placeholder = "Ingresá el código de 4 cifras encontrado en la habitación";
  }

  if(id==="ing_social"){
    // Mostrar Genially del chatbot
    if (geniallyWrap && geniallyDiv) {
      const url = GENIALLY_EMBEDS.ing_social;
      geniallyDiv.innerHTML = `
        <iframe src="${url}" width="100%" height="480" frameborder="0" allowfullscreen
          style="border:1px solid var(--cyan); border-radius:8px;"></iframe>
      `;
      geniallyWrap.style.display = "block";
    }
    $("#challenge-key").placeholder = "Escribí la emoción detonante (p. ej. URGENCIA)";
  }

  if(id==="iot"){
    ui.appendChild(makePairRow(
      "Medida crítica para cámara con ‘admin/admin’",
      ["Aislarla en red invitados","Cambiar credenciales y actualizar firmware","Pegar un post-it que diga 'NO TOCAR'"],
      "Cambiar credenciales y actualizar firmware"
    ));
    ui.appendChild(makeInfo("Recordá: el ‘nodo’ de cámara quedó rotulado como <b>NODE</b> en el panel por defecto."));
  }
}


// ---------- UI helpers ----------
function makePairRow(prompt, options, correct){
  const row = document.createElement("div");
  row.className = "challenge-item";
  const label = document.createElement("div");
  label.innerHTML = prompt;
  const box = document.createElement("div");
  options.forEach(op=>{
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = op;
    b.addEventListener("click", ()=>{
      // deseleccionar previas
      [...box.children].forEach(x=>x.classList.remove("picked"));
      b.classList.add("picked");
      // scoring: suma si es correcta, resta si es incorrecta (nuevo requisito)
      if(op===correct){
        if(!b.dataset.scored){
          score += 25; b.dataset.scored = "1"; updateHUD();
        }
      } else {
        // penalización por intento erróneo
        score = Math.max(0, score - 10);
        updateHUD();
      }
    });
    box.appendChild(b);
  });
  row.appendChild(label);
  row.appendChild(box);
  return row;
}

function makeInfo(html){
  const row = document.createElement("div");
  row.className = "challenge-item";
  row.style.justifyContent = 'flex-start';
  row.innerHTML = html;
  return row;
}

function renderSuspectPicker(){
  const wrap = document.createElement("div");
  wrap.className = "challenge-item";
  wrap.style.flexDirection = "column";
  wrap.innerHTML = `<div style="margin-bottom:8px;"><b>Sospechoso Principal</b> ${finalSuspect?`(Actual: ${finalSuspect})`:''}</div>`;

  const row = document.createElement("div");
  row.style.display = "flex"; row.style.gap = "16px"; row.style.flexWrap = "wrap";
  SUSPECTS.forEach(name=>{
    const card = document.createElement("button");
    card.className = "choice suspect-card";
    card.style.display="grid"; card.style.placeItems="center";
    card.style.width="180px"; card.style.height="130px";
    card.innerHTML = `
      <div style="font-weight:700; margin-bottom:6px;">${name}</div>
      <img src="${SUSPECT_IMAGES[name]||'https://via.placeholder.com/80?text=IMG'}" alt="${name}"
           style="width:68px;height:68px;border-radius:50%;object-fit:cover;border:1px solid var(--line)">
    `;
    if (name===finalSuspect) card.classList.add("picked");
    card.addEventListener("click", ()=>{
      finalSuspect = name;
      score += 100; updateHUD();
      if(!KEYS.hackers){
        KEYS.hackers = true;
        document.querySelector(`.folder[data-mission="hackers"]`).setAttribute("aria-disabled","true");
        enableNextFolder("hackers");
        toast(`✅ Sospechoso **${name}** registrado. ¡Misión 2 completada! +500 pts`);
        score += 500; updateHUD();
      } else {
        toast(`🔄 Sospechoso actualizado a **${name}**.`);
      }
      [...row.children].forEach(x=>x.classList.remove("picked"));
      card.classList.add("picked");
    });
    row.appendChild(card);
  });

  wrap.appendChild(row);
  return wrap;
}

function toast(msg){
  const fb = $("#feedback");
  fb.style.display = "block";
  fb.className = "feedback ok";
  fb.innerHTML = msg;
}


// ---------- VALIDACIÓN DE CLAVE + CIERRE NARRATIVO ----------
function submitKey(id){
  if (id==="hackers") return; // sin clave en M2

  const val = $("#challenge-key").value.trim().toUpperCase();
  const expect = (CLAVES[id]||"").toUpperCase();
  const fb = $("#feedback");
  fb.style.display = "block"; fb.className = "feedback";

  if(!val){
    fb.classList.add("err");
    fb.textContent = "❌ Ingresá la clave de restauración para desbloquear el Firewall.";
    play("#sfx-error");
    return;
  }

  if(val===expect){
    score += 500; KEYS[id]=true;
    fb.classList.add("ok");
    fb.innerHTML = `✅ Firewall desactivado. Clave correcta: <b>${expect}</b>. +500 pts`;
    play("#sfx-ok");

    // Post-misión: texto con pistas hacia la siguiente oficina (incluye falsos indicios donde corresponde)
    const post = POST[id] || "";
    setTimeout(()=>{
      $("#challenge").classList.add("hidden");
      $("#briefing").classList.remove("hidden");
      $("#brief-title").textContent = "Sistema de Respuesta Cibernética";
      $("#brief-role").textContent = "Transición de misión";
      $("#brief-text").innerHTML = post;    // 🔧 EDITAR NARRATIVA AQUÍ (POST si lo deseas)
      $("#btn-begin").style.display = 'none';
    }, 650);

    document.querySelector(`.folder[data-mission="${id}"]`).setAttribute("aria-disabled","true");
    enableNextFolder(id); updateHUD();

  } else {
    // penalización por clave incorrecta
    score = Math.max(0, score-50);
    fb.classList.add("err");
    fb.textContent = "❌ Clave incorrecta. -50 pts. Revisá pistas y probá de nuevo.";
    play("#sfx-error"); updateHUD();
  }
}


// ---------- TERMINAL Y FINALES (Alpha/Beta) ----------
$("#btn-terminal") && $("#btn-terminal").addEventListener("click", ()=>{
  if (Object.values(KEYS).filter(Boolean).length !== 5) return;

  // Última oportunidad para cambiar sospechoso
  if (confirm("¿Querés cambiar tu sospechoso antes del veredicto final?")) {
    loadBriefing('hackers');
    startChallenge('hackers');
    return;
  }

  const WINNER = "Agente Kael"; // si elegís Kael → Final Alpha (trampa)
  let finalMsg = "";

  if (!finalSuspect) {
    finalMsg = `
      <b>[Protocolo incompleto]</b><br>
      No asignaste sospechoso. El Firewall te observa en silencio. 
      Hydra calla… por ahora.
    `;
  } else if (finalSuspect === WINNER) {
    finalMsg = `
      <b>[FINAL ALPHA — Infiltración de Sesgo]</b><br>
      Apostaste por Kael. El sistema sonrió. El vector real —IoT comprometido— ya está en cuarentena,
      pero tu criterio queda en revisión.<br>
      <small>(Aprendizaje: no todo lo que reluce es culpable.)</small>
    `;
    score = Math.max(0, score - 500);
  } else {
    finalMsg = `
      <b>[FINAL BETA — Restablecimiento de Confianza]</b><br>
      Dudaste con método. La puerta era IoT, no ego. Atlas respira. 
      La IA del Firewall te asigna acceso ampliado y café sin fila.<br>
      <small>(Aprendizaje: investigar ≠ adivinar.)</small>
    `;
    score += 1000;
  }

  const video = `
    <div class="final-video-wrap">
      <iframe class="final-video" src="https://www.youtube.com/embed/uI_Hx99ekBo"
        title="Cierre" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>`;

  setScreen("#screen-end");
  $("#final-score").innerHTML = `Puntuación final: <b>${score}</b><br><br>${finalMsg}${video}`;
  play("#sfx-open");
});

$("#btn-replay") && $("#btn-replay").addEventListener("click", ()=>{
  score = 0; finalSuspect = null;
  for (const k in KEYS) KEYS[k]=false;
  $$(".folder").forEach((f,i)=> f.setAttribute("aria-disabled", i===0?"false":"true"));
  $("#btn-terminal").disabled = true;
  setScreen("#screen-start");
  const vid = $("#brief-video-iframe"); if(vid){ vid.src=""; vid.style.display="none"; }
  const gen = $("#genially-container-wrapper"); if(gen){ gen.style.display="none"; }
  // eliminar botón cambiar sospechoso si estaba
  const btnChange = $("#btn-change-suspect"); if(btnChange) btnChange.remove();
  updateHUD();
});
