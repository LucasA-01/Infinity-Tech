const cadastro = document.querySelector('#cadastro');
const enviar = document.querySelector('#enviar');
const form = document.querySelector('.formulario');
const mensagemSucesso = document.querySelector('#sucesso');
const botoes = document.querySelector('.botoes')

mensagemSucesso.style.display = 'none';

cadastro.addEventListener('submit', (evento) => {
  evento.preventDefault();
  
  // checkValidity() retorna true se todos os campos obrigatórios estiverem preenchidos corretamente
  if (cadastro.checkValidity()) {
    const nome = document.querySelector('#nome').value;
    const dn = document.querySelector('#nascimento').value;
    const cpf = document.querySelector('#cpf').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    
    // 1. Exibe a mensagem de sucesso com a imagem e o texto
    mensagemSucesso.style.display = 'block';
    mensagemSucesso.innerHTML = `<img src="../ASSETS/ICON/sucesso.png" alt="Ícone de sucesso">`;
    
    // 2. Limpa os campos do formulário após o envio
    enviar.innerHTML = `<button type="button" class="btn-insert">Gerar insert</button>`

    const insert = document.querySelector('.btn-insert')
    
    insert.addEventListener('click', () => {
      form.innerHTML = `<h1>Insert Pronto!</h1>
      <p>INSERT INTO usuario (nome, DN, cpf, email, senha)<br>values ('${nome}', '${dn}', '${cpf}', '${email}', '${senha}');</p>`
    })

    setTimeout(() => {
      cadastro.reset();
    }, 10000)
  }
  
  setTimeout(() => {
    mensagemSucesso.style.display = 'none';
  }, 1500)
  
});
