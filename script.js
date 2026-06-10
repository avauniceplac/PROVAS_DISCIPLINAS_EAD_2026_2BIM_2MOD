/* ─────────────────────────────────────────────
   DADOS DOS LABORATÓRIOS
   ───────────────────────────────────────────── */

const DIS = 'disp';
const IND = 'indisp';

const labs = [
  // ── BLOCO A ──
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'CEAD',   local:'Bloco A, 1º Andar - Exclusivo NAPA',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'CEAD',   local:'Bloco A, 1º Andar - Exclusivo NAPA',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'CEAD',   local:'Bloco A, 1º Andar - Exclusivo NAPA',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  // ── BLOCO EF ──
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 2º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 2º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 2º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, Térreo',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, Térreo',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, Térreo',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, Térreo',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, Térreo',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, Térreo',   turno:'Noite', horario:'17h – 22h',
    d: [IND, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },
];

let filtroBloco = 'todos';
let filtroTurno = 'todos';

function statusHTML(status) {
  if (status === DIS) return `<span class="dot disp">Disponível</span>`;
  return `<span class="dot indisp">Indisponível</span>`;
}

function statusSabado(row) {
  if (row.turno !== 'Manhã') {
    return `<span class="dot indisp">Indisponível</span>`;
  }
  const status = row.sab || IND;
  if (status === DIS) return `<span class="dot disp">Disponível</span>`;
  return `<span class="dot indisp">Indisponível</span>`;
}

function renderTable() {
  const tbody = document.getElementById('tbody-labs');
  if (!tbody) return;
  tbody.innerHTML = '';

  let lastBloco = null;
  let lastLab   = null;

  labs.forEach(row => {
    const matchBloco = filtroBloco === 'todos' || row.bloco === filtroBloco;
    const matchTurno = filtroTurno === 'todos' || row.turno === filtroTurno;
    if (!matchBloco || !matchTurno) return;

    if (row.bloco !== lastBloco) {
      const trSep = document.createElement('tr');
      trSep.className = 'bloco-header';
      trSep.innerHTML = `<td colspan="9">Bloco ${row.bloco}</td>`;
      tbody.appendChild(trSep);
      lastBloco = row.bloco;
      lastLab   = null;
    }

    const tr = document.createElement('tr');
    const mostrarLab = row.lab !== lastLab;
    lastLab = row.lab;

    tr.innerHTML = `
      <td>${mostrarLab ? `<span class="badge-bloco">${row.bloco}</span>` : ''}</td>
      <td>${mostrarLab ? `<span class="lab-nome">${row.lab}</span><span class="lab-local">${row.local}</span>` : ''}</td>
      <td>
        <span class="turno-tag">${row.turno}</span>
        <span class="turno-horario">${row.horario}</span>
      </td>
      <td class="status-cell">${statusHTML(row.d[0])}</td>
      <td class="status-cell">${statusHTML(row.d[1])}</td>
      <td class="status-cell">${statusHTML(row.d[2])}</td>
      <td class="status-cell">${statusHTML(row.d[3])}</td>
      <td class="status-cell">${statusHTML(row.d[4])}</td>
      <td class="status-cell col-sabado">${statusSabado(row)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function filtrar(bloco, btn) {
  filtroBloco = bloco;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  renderTable();
}

function filtrarTurno(turno, btn) {
  filtroTurno = turno;
  document.querySelectorAll('.turno-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  renderTable();
}

document.addEventListener('DOMContentLoaded', renderTable);
