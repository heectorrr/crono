let interval;

let cronometroInterval;
let segundos = 0;

function actualizarCronometro() {
    let hrs = Math.floor(segundos / 3600).toString().padStart(2, '0');
    let mins = Math.floor((segundos % 3600) / 60).toString().padStart(2, '0');
    let secs = (segundos % 60).toString().padStart(2, '0');
    document.getElementById("cronometro").innerText = `${hrs}:${mins}:${secs}`;
}

function startCronometro() {
    if (!cronometroInterval) {
        cronometroInterval = setInterval(() => {
            segundos++;
            actualizarCronometro();
        }, 1000);
    }
}

function stopCronometro() {
    clearInterval(cronometroInterval);
    cronometroInterval = null;
}