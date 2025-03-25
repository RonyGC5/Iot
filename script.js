const ws = new WebSocket(`ws://${window.location.hostname}/ws`);
 
     ws.onmessage = (event) => {
        const[pot1, pot2] = event.data.split(",");
        document.getElementById("pot1").innerText = pot1;
        document.getElementById("pot2").innerText = pot2;

     };