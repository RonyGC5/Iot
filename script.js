    const ESP32_IP = "http://<192.168.74.20>"; // Cambia <ESP32_IP> por la dirección IP del ESP32

    // Función para actualizar los valores desde el ESP32
    function updateValues() {
      fetch(`${ESP32_IP}/sensor`)
        .then(response => response.json())
        .then(data => {
          document.getElementById("pot1").innerText = data.pot1;
          document.getElementById("pot2").innerText = data.pot2;
        })
        .catch(error => console.error("Error al obtener datos:", error));
    }

    // Actualizar cada 2 segundos
    setInterval(updateValues, 2000);
