document.addEventListener('DOMContentLoaded', () => {
    // --- Datos Simulados (¡Aquí irían tus datos reales!) ---
    const tarjetas = [
        { tipo: 'amarilla', estudianteId: 'EST001', fecha: '2025-06-01', motivo: 'Interrupción en clase' },
        { tipo: 'roja', estudianteId: 'EST002', fecha: '2025-06-03', motivo: 'Uso de celular no permitido' },
        { tipo: 'amarilla', estudianteId: 'EST003', fecha: '2025-06-05', motivo: 'Charlas constantes' },
        { tipo: 'amarilla', estudianteId: 'EST001', fecha: '2025-06-07', motivo: 'Demora en empezar actividad' },
        { tipo: 'roja', estudianteId: 'EST001', fecha: '2025-06-09', motivo: 'Respuesta desafiante' },
        { tipo: 'amarilla', estudianteId: 'EST004', fecha: '2025-06-10', motivo: 'Desorden en el material' },
        { tipo: 'amarilla', estudianteId: 'EST005', fecha: '2025-06-12', motivo: 'Hablar sin pedir la palabra' },
    ];

    // Datos simulados de estudiantes con nombres (o identificadores)
    const estudiantesData = [
        { id: 'EST001', nombre: 'Ana G.', fairPlayPuntos: 80 },
        { id: 'EST002', nombre: 'Juan P.', fairPlayPuntos: 60 },
        { id: 'EST003', nombre: 'Pedro M.', fairPlayPuntos: 95 },
        { id: 'EST004', nombre: 'Sofía R.', fairPlayPuntos: 120 },
        { id: 'EST005', nombre: 'Martín L.', fairPlayPuntos: 105 },
        { id: 'EST006', nombre: 'Laura B.', fairPlayPuntos: 130 },
    ];

    // Calculamos las tarjetas por estudiante y el estado de conducta
    const obtenerEstadisticasEstudiantes = () => {
        return estudiantesData.map(est => {
            const amarillas = tarjetas.filter(t => t.estudianteId === est.id && t.tipo === 'amarilla').length;
            const rojas = tarjetas.filter(t => t.estudianteId === est.id && t.tipo === 'roja').length;
            let estado = 'excelente'; // Por defecto
            if (rojas > 0) {
                estado = 'atencion';
            } else if (amarillas >= 2) {
                estado = 'atencion';
            } else if (amarillas === 1) {
                estado = 'buena';
            }
            return { ...est, amarillas, rojas, estado };
        });
    };

    const estudiantesConEstadisticas = obtenerEstadisticasEstudiantes();

    // Ordenar ranking de Fair Play (mayor puntaje primero)
    const fairPlayRanking = [...estudiantesConEstadisticas].sort((a, b) => b.fairPlayPuntos - a.fairPlayPuntos);


    // --- Lógica para el Dashboard (index.html) ---
    if (document.getElementById('totalAmarillas') && document.getElementById('totalRojas')) {
        const totalAmarillas = tarjetas.filter(t => t.tipo === 'amarilla').length;
        const totalRojas = tarjetas.filter(t => t.tipo === 'roja').length;

        document.getElementById('totalAmarillas').textContent = totalAmarillas;
        document.getElementById('totalRojas').textContent = totalRojas;

        const listaFairPlayElement = document.getElementById('listaFairPlay');
        if (listaFairPlayElement) {
            listaFairPlayElement.innerHTML = ''; // Limpiar
            // Mostrar solo el top 3 en el dashboard
            fairPlayRanking.slice(0, 3).forEach(estudiante => {
                const li = document.createElement('li');
                li.textContent = `${estudiante.nombre} (${estudiante.fairPlayPuntos} puntos)`;
                listaFairPlayElement.appendChild(li);
            });
        }
    }

    // --- Lógica para la Lista de Estudiantes (estudiantes.html) ---
    if (document.getElementById('tablaEstudiantesBody')) {
        const tablaBody = document.getElementById('tablaEstudiantesBody');
        tablaBody.innerHTML = ''; // Limpiar

        estudiantesConEstadisticas.forEach(estudiante => {
            const row = tablaBody.insertRow();
            row.insertCell(0).textContent = estudiante.nombre;
            row.insertCell(1).textContent = estudiante.amarillas;
            row.insertCell(2).textContent = estudiante.rojas;
            const estadoCell = row.insertCell(3);
            estadoCell.textContent = estudiante.estado.charAt(0).toUpperCase() + estudiante.estado.slice(1);
            estadoCell.className = `estado-conducta ${estudiante.estado}`; // Aplica clase CSS para color
        });
    }

    // --- Lógica para el Ranking de Fair Play (fairplay.html) ---
    if (document.getElementById('rankingFairPlayList')) {
        const rankingListElement = document.getElementById('rankingFairPlayList');
        rankingListElement.innerHTML = ''; // Limpiar

        fairPlayRanking.forEach(estudiante => {
            const li = document.createElement('li');
            li.textContent = `${estudiante.nombre} (${estudiante.fairPlayPuntos} puntos)`;
            rankingListElement.appendChild(li);
        });
    }
});