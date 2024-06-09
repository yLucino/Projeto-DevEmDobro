const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

btnAvancar.addEventListener('click', () => {
  const eUltimoCartao = cartaoAtual === cartoes.length - 1
  if (eUltimoCartao) return;
  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao();
})

btnVoltar.addEventListener('click', () => {
  const ePrimeiroCartao = cartaoAtual === 0
  if (ePrimeiroCartao) return;
  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao();
})

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector('.selecionado');
  cartaoSelecionado.classList.remove('selecionado');
}
