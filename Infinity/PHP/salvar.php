<?php
$servidor = "127.0.0.1";
$usuario = "root";
$senha = "";
$banco = "bancoinfitytech";

// Cria a conexão
$conn = new mysqli($servidor, $usuario, $senha, $banco);

// Verifica se houve erro
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Recebe os dados do formulário HTML (safety: check existence)
$nome = isset($_POST['nome']) ? $_POST['nome'] : '';
$nascimento = isset($_POST['nascimento']) ? $_POST['nascimento'] : '';
$endereco = isset($_POST['endereco']) ? $_POST['endereco'] : '';
$cpf = isset($_POST['cpf']) ? $_POST['cpf'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';

// Use prepared statement to avoid SQL injection
$sql = "INSERT INTO cadastro (nome, nascimento, endereco, cpf, email) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
if ($stmt) {
    $stmt->bind_param("sssss", $nome, $nascimento, $endereco, $cpf, $email);
    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        header("Location: ../index.html");
        exit;
    } else {
        echo "Erro ao salvar: " . $stmt->error;
        $stmt->close();
    }
} else {
    echo "Erro na preparação da query: " . $conn->error;
}

$conn->close();
?>