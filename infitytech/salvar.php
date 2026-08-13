<?php
// Inclui o arquivo de conexão
include_once("conexao.php");

// Recebe os dados do formulário HTML
$nome = $_POST['nome'];
$email = $_POST['email'];

// Prepara a ordem SQL para inserir no banco
$sql = "INSERT INTO usuarios (nome, email) VALUES ('$nome', '$email')";

// Executa a ordem e verifica se deu certo
if ($conn->query($sql) === TRUE) {
    echo "Dados salvos com sucesso no pendrive!";
} else {
    echo "Erro ao salvar: " . $conn->error;
}

// Fecha a conexão
$conn->close();
?>