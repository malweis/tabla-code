var buttons = document.querySelectorAll(".ver-config-button");

buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    var versionDiv = document.getElementById("version");
    var versionName = event.target.closest("tr").querySelector("td:first-child").textContent.trim();
    var versionTitle = versionDiv.querySelector("h1");
    versionTitle.textContent = versionName;

    if (versionDiv.style.display === "flex") {
      versionDiv.style.opacity = "0";
      setTimeout(function() {
        versionDiv.style.display = "none";
      }, 500);
    } else {
      versionDiv.style.display = "flex";
      setTimeout(function() {
        versionDiv.style.opacity = "1";
      }, 100);
    }
  });
});
var abrirDetalleButtons = document.querySelectorAll(".abrir-detalle-button");

abrirDetalleButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    var liParent = event.target.closest("li").parentElement;
    var codeBlock = liParent.querySelector(".code-blocks");

    if (codeBlock.style.display === "block") {
      codeBlock.style.opacity = "0";
      setTimeout(function() {
        codeBlock.style.display = "none";
      }, 500);
    } else {
      codeBlock.style.display = "block";
      setTimeout(function() {
        codeBlock.style.opacity = "1";
      }, 100);
    }
  });
});



