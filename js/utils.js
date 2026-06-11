/* ===== UTILITÁRIOS ===== */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

let _toastTimer;
function mostrarToast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}
