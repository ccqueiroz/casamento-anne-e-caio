export const CenterControl = (controlDiv: Element): void =>  {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#d6eef5";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "#0c6a6b";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "24px";
  controlText.style.paddingLeft = "10px";
  controlText.style.paddingRight = "10px";
  controlText.style.paddingTop = "5px";
  controlText.style.paddingBottom = "5px";
  controlText.innerHTML = "Para maiores informações a respeito do Atlantis Buffet,<br/> clique no no ícone vermelho.";
  controlUI.appendChild(controlText);
}
