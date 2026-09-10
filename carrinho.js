const btnFinalizar = document.getElementById('pagar');

const produtos = {
    "4090": {
        nome: "Placa de Vídeo GALAX® GeForce™ RTX 4090 HOF 24GB",
        descricao: "Placa de vídeo NVIDIA GeForce RTX 4090 HOF 24GB.",
        preco: 22000,
        imagem: "../ASSETS/IMG/gpu-nvidia.webp"
    },
    
    "7950x3d": {
        nome: "Processador AMD® Ryzen™ 9 7950X3D",
        descricao: "Processador AMD Ryzen 9 7950X3D, 16-Core, 32-Threads.",
        preco: 3599.55,
        imagem: "../ASSETS/IMG/processador-amd.webp"
    },
    
    "i9-9900k": {
        nome: "Processador INTEL® CORE™ i9-9900K",
        descricao: "Processador Intel Core i9-9900K Coffee Lake Refresh.",
        preco: 4300.90,
        imagem: "../ASSETS/IMG/processador-intel.png"
    },
    
    "7600xt": {
        nome: "Placa de Vídeo Gigabyte AMD® Radeon™ RX 7600 XT",
        descricao: "Placa de vídeo AMD Radeon RX 7600 XT Gaming OC, 16GB.",
        preco: 2999.90,
        imagem: "../ASSETS/IMG/gpu-amd.webp"
    }
};


// Pega o produto da URL
const url = new URLSearchParams(window.location.search);
const produtoSelecionado = url.get("produto");
const produto = produtos[produtoSelecionado];


// Coloca as informações na página
if (produto) {

    document.querySelector(".card img").src = produto.imagem;
    document.querySelector(".card h2").textContent = produto.nome;
    document.querySelector(".card p").textContent = produto.descricao;

    document.querySelector(".card data").textContent =
        `R$ ${produto.preco.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
        })}`;

    document.querySelector(".resumo h2").textContent = produto.nome;

    document.querySelector(".resumo p data").textContent =
        `R$ ${produto.preco.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
        })}`;

    const total = produto.preco + 20;

    document.querySelector("#total data").textContent =
        `R$ ${total.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
        })}`;
}
else {
    document.querySelector("#menu-carrinho").style.display = "none";
    document.querySelector("#carrinho-vazio").style.display = "block";
}

btnFinalizar.addEventListener('click', () => {
    const confirmarPagamento = confirm("Tem certeza que deseja confirmar o pagamento?");
    
    if(confirmarPagamento) {
        alert("Pagamento realizado com sucesso. Seu produto chegará em breve");
        document.querySelector("#menu-carrinho").style.display = "none";
        document.querySelector("#carrinho-vazio").style.display = "block";
    }
    else {
        alert("Pagamento cancelado");
    }
})