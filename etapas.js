/* ═══════════════════════════════════════════════════════════════
   MOTOR DAS ETAPAS  —  aplica os estados definidos em config-etapas.js
   Não é necessário editar este arquivo.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  if (typeof ETAPAS === "undefined") return; // config não carregada

  // Mapeia cada arquivo HTML à sua etapa
  const PAGINA_POR_ARQUIVO = {
    "index.html":           "regulares",
    "segunda-chamada.html": "segundaChamada",
    "provas-finais.html":   "recuperacao",
    "final-bimestral.html": "recuperacao",
    "final-modular.html":   "recuperacao",
  };

  // href de cada link do menu → etapa correspondente
  const ETAPA_POR_HREF = {
    "index.html":           "regulares",
    "segunda-chamada.html": "segundaChamada",
    "provas-finais.html":   "recuperacao",
  };

  const ESTADOS_VALIDOS = ["ativa", "expirada", "oculta", "em-breve"];

  function estadoDe(etapa) {
    const e = (ETAPAS.estado && ETAPAS.estado[etapa]) || "ativa";
    const limpo = String(e).trim().toLowerCase();
    return ESTADOS_VALIDOS.includes(limpo) ? limpo : "ativa";
  }

  // Nome do arquivo atual (ex.: "segunda-chamada.html")
  function arquivoAtual() {
    let p = window.location.pathname.split("/").pop();
    if (!p) p = "index.html";
    return p;
  }

  const textos = ETAPAS.textos || {};

  /* ─── 1. AJUSTA OS LINKS DO MENU (em todas as páginas) ─── */
  function ajustarMenu() {
    const links = document.querySelectorAll("nav a");
    links.forEach(function (link) {
      const href = (link.getAttribute("href") || "").split("/").pop();
      const etapa = ETAPA_POR_HREF[href];
      if (!etapa) return;

      const estado = estadoDe(etapa);

      if (estado === "oculta") {
        link.style.display = "none";
      } else if (estado === "expirada") {
        link.classList.add("nav-expirada");
        if (textos.seloExpirada) adicionarSelo(link, textos.seloExpirada, "selo-expirada");
      } else if (estado === "em-breve") {
        link.classList.add("nav-em-breve");
        if (textos.seloEmBreve) adicionarSelo(link, textos.seloEmBreve, "selo-em-breve");
      }
    });
  }

  function adicionarSelo(link, texto, classe) {
    if (link.querySelector(".nav-selo")) return;
    const selo = document.createElement("span");
    selo.className = "nav-selo " + classe;
    selo.textContent = texto;
    link.appendChild(selo);
  }

  /* ─── 2. APLICA O ESTADO À PÁGINA ATUAL ─── */
  function aplicarEstadoPagina() {
    const arquivo = arquivoAtual();
    const etapa = PAGINA_POR_ARQUIVO[arquivo];
    if (!etapa) return;

    const estado = estadoDe(etapa);

    if (estado === "expirada") {
      document.body.classList.add("pagina-expirada");
      inserirFaixaExpirada();
    } else if (estado === "oculta") {
      mostrarBloqueio(textos.ocultaTitulo || "Página indisponível",
                      textos.ocultaTexto  || "Esta etapa não está disponível no momento.");
    } else if (estado === "em-breve") {
      mostrarBloqueio(textos.emBreveTitulo || "Em breve",
                      textos.emBreveTexto  || "As informações desta etapa ainda não foram liberadas.",
                      true);
    }
  }

  // Faixa de aviso no topo do conteúdo (estado expirada)
  function inserirFaixaExpirada() {
    const faixa = document.createElement("div");
    faixa.className = "faixa-expirada";
    faixa.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>' +
      "<span>" + (textos.expirada || "Este período já foi encerrado.") + "</span>";

    const header = document.querySelector("header");
    if (header && header.parentNode) {
      header.parentNode.insertBefore(faixa, header.nextSibling);
    } else {
      document.body.insertBefore(faixa, document.body.firstChild);
    }
  }

  // Tela de bloqueio (estados oculta / em-breve): esconde o conteúdo e mostra aviso
  function mostrarBloqueio(titulo, texto, emBreve) {
    // Remove hero, alerta e seções de conteúdo
    const remover = document.querySelectorAll(
      ".hero, .alerta-bar, #faq, #labs, .conteudo-prova"
    );
    remover.forEach(function (el) { el.style.display = "none"; });

    const icone = emBreve
      ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

    const bloco = document.createElement("section");
    bloco.className = "bloqueio-etapa" + (emBreve ? " em-breve" : " oculta");
    bloco.innerHTML =
      '<div class="bloqueio-inner">' +
        '<div class="bloqueio-icon">' + icone + "</div>" +
        "<h1>" + titulo + "</h1>" +
        "<p>" + texto + "</p>" +
        '<a href="index.html" class="bloqueio-btn">Voltar ao início</a>' +
      "</div>";

    const footer = document.querySelector("footer");
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(bloco, footer);
    } else {
      document.body.appendChild(bloco);
    }
  }

  /* ─── EXECUTA ─── */
  function init() {
    ajustarMenu();
    aplicarEstadoPagina();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
