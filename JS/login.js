const cadastro = document.querySelector('#cadastro');
const mensagemSucesso = document.querySelector('#sucesso'); // Elemento da mensagem

mensagemSucesso.style.display = 'none';

cadastro.addEventListener('submit', (evento) => {
  evento.preventDefault(); 

  if (formulario.checkValidity()) {
    // 1. Opcional: Enviar os dados para o servidor aqui (usando fetch)
    
    // 2. Exibe a mensagem de sucesso (revelando o elemento oculto)
    mensagemSucesso.style.display = 'block';
    mensagemSucesso.src = '../ASSETS/ICON/sucesso.png';

    // 3. Limpa os campos do formulário após o envio
    formulario.reset();
  } else {
    // Esconde a mensagem de sucesso caso ele tente enviar errado depois
    mensagemSucesso.style.display = 'none';
    formulario.reportValidity();
  }
});