/* ─────────────────────────────────────────────
   ANIMAÇÃO DO HERO — Rede de pontos conectados
   Metáfora de EAD: alunos distantes conectados
   Canvas vanilla, sem libraries. Respeita prefers-reduced-motion.
   ───────────────────────────────────────────── */

(function() {
  const canvas = document.querySelector('.hero-canvas');
  if (!canvas) return;

  // Respeita preferência de movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  let pontos = [];
  let mouseX = -1000, mouseY = -1000;
  let animationId;

  // Cores da paleta UNICEPLAC
  const COR_VERDE = '0, 115, 79';      // #00734F
  const COR_LARANJA = '214, 135, 73';  // #d68749

  function resize() {
    dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    inicializarPontos();
  }

  function inicializarPontos() {
    // Densidade proporcional à área, com limites razoáveis
    const area = width * height;
    const densidade = Math.min(Math.max(Math.floor(area / 14000), 30), 75);
    pontos = [];
    for (let i = 0; i < densidade; i++) {
      pontos.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,  // velocidade lenta
        vy: (Math.random() - 0.5) * 0.25,
        raio: Math.random() * 1.4 + 0.8,
        cor: Math.random() > 0.7 ? COR_LARANJA : COR_VERDE  // 30% laranja, 70% verde
      });
    }
  }

  function distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function desenhar() {
    ctx.clearRect(0, 0, width, height);

    // Atualiza posições
    for (const p of pontos) {
      p.x += p.vx;
      p.y += p.vy;

      // Bounce nas bordas (rebote suave)
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Atração leve em direção ao mouse
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140 && dist > 0) {
        const forca = (140 - dist) / 140 * 0.04;
        p.vx += (dx / dist) * forca;
        p.vy += (dy / dist) * forca;
      }

      // Limita velocidade máxima (pra não acelerar demais)
      const v = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (v > 0.7) {
        p.vx = (p.vx / v) * 0.7;
        p.vy = (p.vy / v) * 0.7;
      }
    }

    // Desenha conexões (linhas)
    for (let i = 0; i < pontos.length; i++) {
      for (let j = i + 1; j < pontos.length; j++) {
        const d = distancia(pontos[i], pontos[j]);
        if (d < 130) {
          const opacidade = (1 - d / 130) * 0.22;
          ctx.strokeStyle = `rgba(${COR_VERDE}, ${opacidade})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(pontos[i].x, pontos[i].y);
          ctx.lineTo(pontos[j].x, pontos[j].y);
          ctx.stroke();
        }
      }
    }

    // Desenha pontos
    for (const p of pontos) {
      ctx.fillStyle = `rgba(${p.cor}, 0.7)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
      ctx.fill();
    }

    animationId = requestAnimationFrame(desenhar);
  }

  // Mouse pra interação leve
  canvas.parentElement.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  // Pausa quando a página não está visível (economia de bateria)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animationId) cancelAnimationFrame(animationId);
    } else {
      desenhar();
    }
  });

  // Resize com debounce
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });

  // Init
  resize();
  desenhar();
})();
