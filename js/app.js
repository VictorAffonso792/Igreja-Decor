/* ===== INICIALIZAÇÃO ===== */
(function () {
  /* Ano dinâmico */
  $('#ano').textContent = new Date().getFullYear();

  /* Links de WhatsApp e Instagram a partir do CONFIG */
  const linkWhats = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagemWhatsApp)}`;
  $('#btnWhats').href = linkWhats;
  $('#whatsFloat').href = linkWhats;
  $('#btnInsta').href = `https://instagram.com/${CONFIG.instagram}`;
  $('#instaHandle').textContent = `@${CONFIG.instagram}`;

  /* Primeira renderização */
  renderGaleria();
  renderDestaques();
})();
