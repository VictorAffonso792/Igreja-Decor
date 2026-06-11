/* ===== UPLOAD DE FOTOS: DRAG-AND-DROP + COMPRESSÃO ===== */
let fotosPendentes = [];

(function () {
  const modalUpload = $('#modalUpload');
  const dropZone = $('#dropZone');
  const inputFotos = $('#inputFotos');

  $('#btnAddFoto').addEventListener('click', () => {
    fotosPendentes = [];
    $('#previewGrid').innerHTML = '';
    $('#inputTitulo').value = '';
    modalUpload.classList.add('aberto');
  });

  dropZone.addEventListener('click', () => inputFotos.click());
  dropZone.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); inputFotos.click(); }
  });
  dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('over'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('over'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('over');
    processarArquivos(e.dataTransfer.files);
  });
  inputFotos.addEventListener('change', () => processarArquivos(inputFotos.files));

  function processarArquivos(files) {
    [...files].forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = ev => comprimirImagem(ev.target.result, dataUrl => {
        fotosPendentes.push(dataUrl);
        const img = document.createElement('img');
        img.src = dataUrl;
        img.alt = 'Pré-visualização';
        $('#previewGrid').appendChild(img);
      });
      reader.readAsDataURL(file);
    });
    inputFotos.value = '';
  }

  function comprimirImagem(src, cb) {
    const img = new Image();
    img.onload = () => {
      const MAX = 1100;
      let w = img.width, h = img.height;
      if (w > MAX || h > MAX) {
        const r = Math.min(MAX / w, MAX / h);
        w = Math.round(w * r);
        h = Math.round(h * r);
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      cb(canvas.toDataURL('image/jpeg', .78));
    };
    img.src = src;
  }

  $('#btnSalvarFotos').addEventListener('click', () => {
    if (!fotosPendentes.length) {
      mostrarToast('Escolha pelo menos uma foto 🌷');
      return;
    }
    const fotos = carregarFotos();
    const cat = $('#selCategoria').value;
    const titulo = $('#inputTitulo').value.trim();
    fotosPendentes.forEach(src =>
      fotos.unshift({ id: Date.now() + Math.random(), src, cat, titulo })
    );
    if (salvarFotos(fotos)) {
      fecharModais();
      const n = fotosPendentes.length;
      mostrarToast(`${n} foto${n > 1 ? 's' : ''} adicionada${n > 1 ? 's' : ''} ao portfólio! 🌸`);
      fotosPendentes = [];
    }
  });
})();
