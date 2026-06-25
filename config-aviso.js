

const AVISO = {

  /* ===== PÁGINA INICIAL — Provas 1ª Chamada (index.html) ===== */
  regulares: {
    ativo:    "on",
    titulo:   "Atenção",
    mensagem: "Últimos dias para realizar suas provas",
  },

  /* ===== 2ª CHAMADA (segunda-chamada.html) ===== */
  segundaChamada: {
    ativo:    "off",
    titulo:   "Atenção",
    mensagem: "Escreva aqui o aviso específico da 2ª chamada.",
  },

  /* ===== RECUPERAÇÃO / PROVA FINAL (provas-finais.html e páginas internas) ===== */
  recuperacao: {
    ativo:    "off",
    titulo:   "Atenção",
    mensagem: "Estudantes com Nota Final inferior a 2,0 pontos não poderão realizar a Prova Final. Isso ocorre porque, mesmo obtendo a nota máxima (10,0 pontos) na Prova Final, não seria possível alcançar a média mínima de 6,0 pontos exigida para aprovação na disciplina.",
  },

};

/* ───────────────────────────────────────────────────────────────
   ⚠️  NÃO PRECISA MEXER DAQUI PARA BAIXO.
   A lógica que exibe o pop-up está no arquivo "aviso.js".
   ─────────────────────────────────────────────────────────────── */
