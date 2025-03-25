const ws = new WebSocket("ws://<192.168.74.20>/ws");

ws.onopen = () => console.log("Conexión WebSocket abierta");

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  document.getElementById("pot1").innerText = data.pot1;
  document.getElementById("pot2").innerText = data.pot2;
};
