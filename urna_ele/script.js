document.addEventListener("DOMContentLoaded", () => {
  const displayContainer = document.getElementById("container-pai");
  const btnBranco = document.getElementById("branco");
  const btnCorrige = document.getElementById("corrige");
  const btnConfirma = document.getElementById("confirma");

  let currentInput = "";

  function renderDisplay() {
    displayContainer.innerHTML = `
      <div style="padding:20px;">
        <div style="font-weight:600; font-size:18px; margin-bottom:8px;">Número digitado:</div>
        <div id="visor" style="font-size:32px; font-weight:700;">${currentInput}</div>
      </div>
    `;
  }

  window.digitar = function(n) {
    if (currentInput.length >= 5) return;
    currentInput += String(n);
    renderDisplay();
  };

  window.corrige = function() {
    currentInput = currentInput.slice(0, -1);
    renderDisplay();
  };

  window.branco = function() {
    currentInput = "";
    displayContainer.innerHTML = `
      <div style="padding:20px;">
        <div style="font-weight:600; font-size:18px; margin-bottom:8px;">VOTO</div>
        <div style="font-size:24px; font-weight:700; color:#555">VOTO EM BRANCO</div>
      </div>
    `;
  };

  window.confirma = function() {
    if (!currentInput) {
      alert("Nenhum número digitado.");
      return;
    }
    alert("Voto confirmado para: " + currentInput);
    currentInput = "";
    renderDisplay();
  };

  if (btnCorrige) btnCorrige.addEventListener("click", window.corrige);
  if (btnBranco) btnBranco.addEventListener("click", window.branco);
  if (btnConfirma) btnConfirma.addEventListener("click", window.confirma);

  renderDisplay();
});
