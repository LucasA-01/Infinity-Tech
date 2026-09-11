const btnFinalizar = document.getElementById('pagar');


// Adicionei as informações de cada produto
const produtos = {

    "4090": {
        nome: "Placa de Vídeo GALAX® GeForce™ RTX 4090 HOF 24GB",
        descricao: "Placa de vídeo NVIDIA GeForce RTX 4090 HOF 24GB.",
        preco: 22000,
        imagem: "../ASSETS/IMG/gpu-nvidia.webp"
    },

    "7950x3d": {
        nome: "Processador AMD® Ryzen™ 9 7950X3D, 16-Core, 32-Threads",
        descricao: "Processador AMD Ryzen 9 7950X3D, 16-Core, 32-Threads.",
        preco: 3599.55,
        imagem: "../ASSETS/IMG/processador-amd.webp"
    },

    "i9-9900k": {
        nome: "Processador INTEL® CORE™ i9-9900K Coffee Lake Refresh",
        descricao: "Processador Intel Core i9-9900K Coffee Lake Refresh.",
        preco: 4300.90,
        imagem: "../ASSETS/IMG/processador-intel.png"
    },

    "7600xt": {
        nome: "Placa de Vídeo Gigabyte AMD® Radeon™ RX 7600 XT Gaming OC 16GB",
        descricao: "Placa de vídeo AMD Radeon RX 7600 XT Gaming OC, 16GB.",
        preco: 2999.90,
        imagem: "../ASSETS/IMG/gpu-amd.webp"
    },

    "b550m": {
        nome: "Placa-Mãe Gigabyte B550M Aorus Elite AM4",
        descricao: "Placa mãe AMD AM4 Micro ATX DDR4.",
        preco: 789.00,
        imagem: "../ASSETS/IMG/placa-b550m.png"
    },

    "x870e": {
        nome: "Placa Mãe MSI MAG X870E TOMAHAWK WIFI AM5",
        descricao: "Placa mãe AM5 ATX DDR5 Wi-Fi 7.",
        preco: 2499.99,
        imagem: "../ASSETS/IMG/placa-x870e.png"
    },

    "sata": {
        nome: "SSD Kingston A400 480GB SATA III",
        descricao: "SSD Kingston A400 480GB SATA III.",
        preco: 480.50,
        imagem: "../ASSETS/IMG/ssd-sata.png"
    },

    "nvme": {
        nome: "SSD XPG S70 Blade 512GB M.2 NVMe",
        descricao: "SSD XPG S70 Blade PCIe Gen4x4.",
        preco: 909.99,
        imagem: "../ASSETS/IMG/ssd-nvme.png"
    },

    "ddr4": {
        nome: "Memória RAM Corsair Vengeance Pro RGB 32GB DDR4",
        descricao: "Memória RAM 32GB (2x16GB) DDR4 2666MHz.",
        preco: 2378.99,
        imagem: "../ASSETS/IMG/mm-ram-ddr4.png"
    },

    "ddr5": {
        nome: "Memória RAM Kingston Fury Beast RGB 32GB DDR5",
        descricao: "Memória RAM 32GB (2x16GB) DDR5 5600MHz.",
        preco: 3899.99,
        imagem: "../ASSETS/IMG/mm-ram-ddr5.png"
    },

    "kyber": {
        nome: "Fonte XPG Kyber 850W 80 Plus Gold",
        descricao: "Fonte Gamer XPG Kyber 850W Bivolt.",
        preco: 623.92,
        imagem: "../ASSETS/IMG/fonte-kyber.png"
    },

    "rm1200e": {
        nome: "Fonte Corsair RM1200e 1200W",
        descricao: "Fonte Corsair RM1200e 1200W ATX Modular.",
        preco: 4642.82,
        imagem: "../ASSETS/IMG/fonte-rm1200e.png"
    },

    "kalkan": {
        nome: "Gabinete Gamer Kalkan Asgard Mid Tower",
        descricao: "Gabinete Gamer ATX com lateral em vidro temperado, Preto.",
        preco: 329.99,
        imagem: "../ASSETS/IMG/gabinete-kalkan-asgard.png"
    },

    "husky": {
        nome: "Gabinete Office Husky 200",
        descricao: "Gabinete Office Micro ATX e Mini ATX, Preto.",
        preco: 69.99,
        imagem: "../ASSETS/IMG/gabinete-office-husky.png"
    },

    "pc-gamer": {
        nome: "PC Gamer Completo Ryzen 5 5600GT 16GB DDR4 SSD 480GB",
        descricao: "PC Gamer Ryzen 5 5600GT, 16GB DDR4, SSD 480GB e fonte 500W 80 Plus.",
        preco: 3788.51,
        imagem: "../ASSETS/IMG/pc-gamer.png"
    },

    "notebook-gamer": {
        nome: "Notebook Gamer Lenovo Legion 5i RTX 5060",
        descricao: "Intel Core Ultra 7 255HX, 16GB RAM, SSD 1TB, RTX 5060 e Windows 11.",
        preco: 13599.99,
        imagem: "../ASSETS/IMG/notebook-gamer.png"
    },

    "pc-simples": {
        nome: "Computador Completo Intel Core i5 16GB SSD 240GB",
        descricao: "Computador completo Intel Core i5, 16GB RAM, SSD 240GB, Monitor LED 19 e Windows 10.",
        preco: 1327.74,
        imagem: "../ASSETS/IMG/pc-simples.png"
    },

    "notebook-simples": {
        nome: "Notebook Positivo Vision C14 Intel Celeron",
        descricao: "Notebook Positivo Vision C14, 4GB RAM, 128GB eMMC, Windows 11 Home.",
        preco: 1994.05,
        imagem: "../ASSETS/IMG/notebook-simples.png"
    },

    "w11-home": {
        nome: "Windows 11 Home",
        descricao: "Sistema operacional Windows 11 Home.",
        preco: 989.99,
        imagem: "../ASSETS/IMG/w11-home.png"
    },

    "w11-pro": {
        nome: "Windows 11 Pro",
        descricao: "Sistema operacional Windows 11 Pro.",
        preco: 799.00,
        imagem: "../ASSETS/IMG/w11-pro.png"
    },

    "m365": {
        nome: "Microsoft Office 365 Personal",
        descricao: "Pacote Microsoft Office 365 Personal com assinatura anual.",
        preco: 509.00,
        imagem: "../ASSETS/IMG/m365-personal.png"
    },

    "officepp24": {
        nome: "Microsoft Office Professional Plus 2024",
        descricao: "Pacote Office Professional Plus 2024.",
        preco: 0,
        imagem: "../ASSETS/IMG/office-24.png"
    },

    "photoshop": {
        nome: "Adobe Photoshop",
        descricao: "Software profissional de edição de imagens Adobe Photoshop.",
        preco: 125.00,
        imagem: "../ASSETS/IMG/photoshop.png"
    },

    "illustrator": {
        nome: "Adobe Illustrator",
        descricao: "Software Adobe Illustrator para criação vetorial.",
        preco: 104.00,
        imagem: "../ASSETS/IMG/illustrator.png"
    },

    "premierecc25": {
        nome: "Adobe Premiere CC 2025",
        descricao: "Software profissional de edição de vídeos Adobe Premiere.",
        preco: 349.00,
        imagem: "../ASSETS/IMG/premiere.png"
    },

    "ae24": {
        nome: "Adobe After Effects 2024",
        descricao: "Software de efeitos visuais e animações Adobe After Effects.",
        preco: 104.00,
        imagem: "../ASSETS/IMG/after-effects.png"
    },

    "make": {
        nome: "Make Teams",
        descricao: "Plataforma de automação Make para equipes.",
        preco: 148.66,
        imagem: "../ASSETS/IMG/make.png"
    },

    "zapier": {
        nome: "Zapier Profissional",
        descricao: "Ferramenta de automação de tarefas e integrações.",
        preco: 102.47,
        imagem: "../ASSETS/IMG/zapier.png"
    },

    "n8n": {
        nome: "n8n IA Starter",
        descricao: "Plataforma de automação com inteligência artificial n8n.",
        preco: 150.00,
        imagem: "../ASSETS/IMG/n8n.png"
    },

    "uipath": {
        nome: "UiPath Inc",
        descricao: "Plataforma de automação robótica de processos (RPA).",
        preco: 200.87,
        imagem: "../ASSETS/IMG/uipath.png"
    },

    "autocad": {
        nome: "Autodesk AutoCAD",
        descricao: "Software profissional para projetos de engenharia e arquitetura.",
        preco: 1299.00,
        imagem: "../ASSETS/IMG/autocad.png"
    },

    "revit": {
        nome: "Autodesk Revit",
        descricao: "Software BIM para projetos de arquitetura, engenharia e construção.",
        preco: 1499.00,
        imagem: "../ASSETS/IMG/autodesk-revit.png"
    }

};


// Peguei as informações do produto que foi selecionado pelo usuário
const url = new URLSearchParams(location.search).get('produto')
const produto = produtos[url];


// Com as informações copiadas eu colei as informações na página
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

// Fiz um pequeno bloqueador, para garantir que o usuário queira realizar a compra
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