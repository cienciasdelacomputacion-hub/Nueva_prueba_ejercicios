        // --- 1. SELECCIÓN DE ELEMENTOS DEL DOM ---
        // Guardamos en variables todos los elementos con los que vamos a interactuar.
        const tituloCohete = document.getElementById("tituloCohete");
        const pEstadoMotor = document.getElementById("estadoMotor");
        const infoMotor = document.querySelector(".info-motor");
        const pNivelCombustible = document.getElementById("nivelCombustible");
        const infoCombustible = document.querySelector(".info-combustible");
        const imagenCohete = document.getElementById("imagenCohete");
        const botonEncender = document.getElementById("botonEncender");
        const botonApagar = document.getElementById("botonApagar");
        const botonCarga = document.getElementById("botonCarga");

        // --- 2. IMPLEMENTACIÓN DE LA LÓGICA DE LA ACTIVIDAD ---

        // Paso 1: ¡Actualizar el mensaje inicial!
        infoMotor.textContent = "Verificando Sistemas...";

       
        // Paso 3: ¡Encender el motor!
        botonEncender.addEventListener("click", function() {
            
            
            //Extra: Aqui voy a controlar con un condicional si el combustile es suficiente para un despegue 
            
            if(infoCombustible.textContent==="50%" || infoCombustible.textContent==="0%" ){
                infoCombustible.textContent = "0%";
                pNivelCombustible.style.color = "red";
                infoMotor.textContent="Tanque vacio"
                imagenCohete.src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cW1scXdkaHM1dWdwbWk5Z3E4Mm16eXJwampoc2Vva2MzMDJzM2l5eiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/26tPskka6guetcHle/giphy.gif";
            }else{
                infoMotor.textContent = "¡Encendido!";
                imagenCohete.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnAzNXVzMmVmOTF2Z25maHU4OHlkaG00eTVhd2QyaWxrMG14MDhwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZNv9rwG4gDQwbHPajX/giphy.gif";
                infoCombustible.textContent = "50%";
                pNivelCombustible.style.color = "yellow";
                
            }
          
        });

        // Paso 4: ¡Apagar el motor!
        botonApagar.addEventListener("click", function() {
            infoMotor.textContent = "Apagado";
            imagenCohete.src = "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bzljaG9iNXc4a3RhdzNiN25tczExOHhxajRuZ2J1c3hvZThnZTJuYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M7vnDQZeNFoBPDwtX9/giphy.gif";
          
        });

        // Paso 5: ¡Recargar Combustible!
        botonCarga.addEventListener("click", function() {
            infoCombustible.textContent = "100%";
            // Cambiamos el estilo directamente sobre el elemento.
            pNivelCombustible.style.color = "#58a6ff"; // Lo ponemos azul para indicar que está lleno.
        });