const cadastro = document.querySelector('#cadastro');
const emailC = 'lucas.alves.man@gmail.com'
const senhaC = '1234'
const mensagemSucesso = document.querySelector('#sucesso');
const erro = document.querySelector('#erro')

mensagemSucesso.style.display = 'none'

cadastro.addEventListener('submit', (evento) => {
    evento.preventDefault()
    
    let tentEmail = document.querySelector('#email').value
    let tentSenha = document.querySelector('#senha').value

    if (emailC == tentEmail && senhaC == tentSenha) {
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.innerHTML = `<img src="../ASSETS/ICON/sucesso.png" alt="Ícone de sucesso">`;
    }
    else {
      erro.textContent = 'Email e/ou senha inserido(s) errado(s).'
    }

    cadastro.reset();

    setTimeout(() => {
    mensagemSucesso.style.display = 'none';
  }, 1500)

})
