
const ETAPAS = {

  /* ativa | expirada | oculta | em-breve */

  estado: {
    regulares:      "ativa",      // Provas 2º Bim/Mód  (index.html)
    segundaChamada: "ativa",      // 2ª Chamada         (segunda-chamada.html)
    recuperacao:    "ativa",      // Recuperação        (provas-finais.html + finais)
  },

  /* Aparecem conforme o estado. Pode reescrever à vontade. */

  textos: {
    // Faixa que aparece no topo quando a etapa está EXPIRADA:
    expirada: "Este período já foi encerrado. As informações abaixo permanecem disponíveis apenas para consulta.",

    // Tela que aparece quando a etapa está EM BREVE:
    emBreveTitulo: "Em breve",
    emBreveTexto:  "As informações desta etapa ainda não foram liberadas. Volte mais perto da data.",

    // Tela que aparece quando alguém acessa uma página OCULTA pelo link direto:
    ocultaTitulo:  "Página indisponível",
    ocultaTexto:   "Esta etapa não está disponível no momento.",

    // Selo que aparece ao lado do link no menu quando está EM BREVE:
    seloEmBreve:   "Em breve",
    // Selo que aparece ao lado do link no menu quando está EXPIRADA:
    seloExpirada:  "Encerrado",
  },

};


