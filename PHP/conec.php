<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "meu_banco";

// Cria a conexão
$conn = new mysqli($servidor, $usuario, $senha, $banco);

// Verifica se houve erro
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>