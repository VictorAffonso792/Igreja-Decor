/* ===== CAMADA DE PERSISTÊNCIA =====
   Hoje: localStorage. Amanhã: trocar a implementação
   interna por Firebase/Supabase sem mexer no resto.   */
const STORAGE_KEY = 'igreja_decor_galeria_v1';

function carregarFotos() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function salvarFotos(fotos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fotos));
    document.dispatchEvent(new CustomEvent('fotos-atualizadas'));
    return true;
  } catch (e) {
    mostrarToast('Espaço cheio! Apague algumas fotos antigas para adicionar novas 🌧️');
    return false;
  }
}

function excluirFoto(id) {
  const restantes = carregarFotos().filter(f => f.id !== id);
  return salvarFotos(restantes);
}
