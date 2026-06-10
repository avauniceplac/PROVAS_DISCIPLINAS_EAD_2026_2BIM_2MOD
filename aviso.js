/* ═══════════════════════════════════════════════════════════════
   MOTOR DO AVISO POP-UP  —  lê config-aviso.js e exibe o modal
   Não é necessário editar este arquivo.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  if (typeof AVISO === "undefined") return; // config não carregada

  // Mapeia cada arquivo HTML à sua chave no config
  const PAGINA_POR_ARQUIVO = {
    "index.html":           "regulares",
    "segunda-chamada.html": "segundaChamada",
    "provas-finais.html":   "recuperacao",
    "final-bimestral.html": "recuperacao",
    "final-modular.html":   "recuperacao",
  };

  function arquivoAtual() {
    let p = window.location.pathname.split("/").pop();
    if (!p) p = "index.html";
    return p;
  }

  function estaLigado(valor) {
    return String(valor || "").trim().toLowerCase() === "on";
  }

  function exibirAviso(dados) {
    // Evita duplicar se já existir
    if (document.querySelector(".aviso-overlay")) return;

    const titulo = dados.titulo || "Atenção";
    const mensagem = dados.mensagem || "";

    const overlay = document.createElement("div");
    overlay.className = "aviso-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "aviso-titulo");

    overlay.innerHTML =
      '<div class="aviso-modal">' +
        '<button class="aviso-fechar" aria-label="Fechar aviso">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        "</button>" +
        '<div class="aviso-icon">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>' +
        "</div>" +
        '<h2 id="aviso-titulo" class="aviso-titulo"></h2>' +
        '<p class="aviso-texto"></p>' +
        '<button class="aviso-btn">Entendi</button>' +
      "</div>";

    // Insere textos via textContent (seguro)
    overlay.querySelector(".aviso-titulo").textContent = titulo;
    overlay.querySelector(".aviso-texto").textContent = mensagem;

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden"; // trava scroll do fundo

    function fechar() {
      overlay.classList.add("saindo");
      document.body.style.overflow = "";
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 200);
    }

    overlay.querySelector(".aviso-btn").addEventListener("click", fechar);
    overlay.querySelector(".aviso-fechar").addEventListener("click", fechar);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) fechar(); // clique fora do modal fecha
    });
    document.addEventListener("keydown", function escFechar(e) {
      if (e.key === "Escape") { fechar(); document.removeEventListener("keydown", escFechar); }
    });

    // Animação de entrada
    requestAnimationFrame(function () { overlay.classList.add("visivel"); });
  }

  function init() {
    const etapa = PAGINA_POR_ARQUIVO[arquivoAtual()];
    if (!etapa) return;
    const dados = AVISO[etapa];
    if (!dados || !estaLigado(dados.ativo)) return;
    exibirAviso(dados);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
