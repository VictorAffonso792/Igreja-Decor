/* ===== MODO ADMIN: LOGIN E SESSÃO ===== */
const ADMIN_KEY = 'igreja_decor_admin';

function setAdmin(on) {
  document.body.classList.toggle('admin', on);
  if (on) sessionStorage.setItem(ADMIN_KEY, '1');
  else sessionStorage.removeItem(ADMIN_KEY);
}

function fecharModais() {
  $$('.modal-bg').forEach(m => m.classList.remove('aberto'));
}

(function () {
  if (sessionStorage.getItem(ADMIN_KEY)) setAdmin(true);

  $$('.modal-bg [data-fechar]').forEach(b => b.addEventListener('click', fecharModais));
  $$('.modal-bg').forEach(m => m.addEventListener('click', e => {
    if (e.target === m) fecharModais();
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      fecharModais();
      $('#lightbox').classList.remove('aberto');
    }
  });

  $('#btnAdminLogin').addEventListener('click', () => {
    if (document.body.classList.contains('admin')) {
      mostrarToast('Você já está no modo admin 🌿');
      return;
    }
    $('#inputSenha').value = '';
    $('#erroSenha').style.display = 'none';
    $('#modalLogin').classList.add('aberto');
    setTimeout(() => $('#inputSenha').focus(), 50);
  });

  function tentarLogin() {
    if ($('#inputSenha').value === CONFIG.senha) {
      setAdmin(true);
      fecharModais();
      mostrarToast('Bem-vinda! 🌸 Agora você pode adicionar e excluir fotos.');
    } else {
      $('#erroSenha').style.display = 'block';
    }
  }
  $('#btnEntrar').addEventListener('click', tentarLogin);
  $('#inputSenha').addEventListener('keydown', e => { if (e.key === 'Enter') tentarLogin(); });

  $('#btnSairAdmin').addEventListener('click', () => {
    setAdmin(false);
    mostrarToast('Modo admin desativado 🍃');
  });
})();
