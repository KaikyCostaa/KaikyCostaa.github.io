function removerAOSSeMenorQue992() {
  if (window.innerWidth <= 992) {
    document.querySelectorAll('.css,.foto,.text-biografia,.Titulo').forEach(element => {
      element.removeAttribute('data-aos');
    });
  }
}

// Executa ao carregar a página
window.addEventListener('load', removerAOSSeMenorQue992);

// Executa ao redimensionar a janela (opcional)
window.addEventListener('resize', removerAOSSeMenorQue992);