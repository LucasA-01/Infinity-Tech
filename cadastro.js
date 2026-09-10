let insertnome = document.getElementById('nome');
let insertnascimento = document.getElementById('nascimento');
let insertendereço = document.getElementById('endereco'); 
let insertcpf = document.getElementById('cpf');
let insertemail = document.getElementById('email');
let insertElemento = document.getElementById('insert');

// Adicionado o parâmetro 'event' dentro dos parênteses da função
function cadastroenviar(event){

    // Corrigido para 'event' com "e" minúsculo
    event.preventDefault();

    let nome = insertnome.value;
    let nascimento = insertnascimento.value;
    let endereço = insertendereço.value;
    let cpf = insertcpf.value;
    let email = insertemail.value;

    let insertinto = `INSERT INTO cadastro (nome, nascimento, endereço, cpf, email) VALUES ('${nome}', '${nascimento}', '${endereço}', '${cpf}', '${email}');`; 

    // Exibe o texto na tela dentro da tag <p id="insert"></p>
   console.log(insertinto);
}
