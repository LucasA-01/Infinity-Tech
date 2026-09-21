CREATE DATABASE infinitytech;

USE infinitytech;

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    DN DATE NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE Produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    nome VARCHAR(150) NOT NULL,
    marca VARCHAR(100),
    descricao VARCHAR(300)
);

CREATE TABLE Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FK_usuario_id INT NOT NULL,
    FK_produto_id INT NOT NULL,
    data DATE NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    CEP VARCHAR(9) NOT NULL,

    FOREIGN KEY (FK_usuario_id)
        REFERENCES Usuario(id),

    FOREIGN KEY (FK_produto_id)
        REFERENCES Produto(id)
);

CREATE TABLE Pagamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FK_pedido_id INT NOT NULL,
    metodo VARCHAR(50) NOT NULL,

    FOREIGN KEY (FK_pedido_id)
        REFERENCES Pedido(id)
);

CREATE TABLE Atendimento_SAC (
    id INT AUTO_INCREMENT PRIMARY KEY,
    DA DATE,
    DE DATE,
    FK_usuario_id INT NOT NULL,
    categoria VARCHAR(100),
    duvida VARCHAR(300),
    resposta VARCHAR(300),

    FOREIGN KEY (FK_usuario_id)
        REFERENCES Usuario(id)
);

-- CADASTROS

INSERT INTO Usuario (nome, DN, cpf, email, senha) VALUES
('Lucas Silva', '2008-03-15', '111.111.111-11', 'lucas@email.com', 'senha123'),
('Ana Souza', '2007-07-22', '222.222.222-22', 'ana@email.com', 'senha456'),
('Pedro Santos', '2009-01-10', '333.333.333-33', 'pedro@email.com', 'senha789'),
('Mariana Oliveira', '2008-11-05', '444.444.444-44', 'mariana@email.com', 'senha321'),
('Gabriel Costa', '2007-09-18', '555.555.555-55', 'gabriel@email.com', 'senha654');

INSERT INTO Produto (categoria, preco, nome, marca, descricao) VALUES
('software', 989.99, 'Windows 11 Home', 'Microsoft', 'Sistema operacional Windows 11 Home.'),
('software', 799.00, 'Windows 11 Pro', 'Microsoft', 'Sistema operacional Windows 11 Pro.'),
('software', 509.00, 'Microsoft Office 365 Personal', 'Microsoft', 'Pacote de produtividade Microsoft 365 Personal.'),
('software', 0.00, 'Pacote Office Professional Plus 2024', 'Microsoft', 'Pacote de aplicativos de produtividade Office Professional Plus 2024.'),
('software', 125.00, 'Adobe Photoshop', 'Adobe', 'Software para edição e criação de imagens.'),
('software', 104.00, 'Adobe Illustrator', 'Adobe', 'Software para criação e edição de ilustrações e gráficos vetoriais.'),
('software', 349.00, 'Adobe Premiere CC 2025', 'Adobe', 'Software para edição profissional de vídeos.'),
('software', 104.00, 'Adobe After Effects 2024', 'Adobe', 'Software para efeitos visuais e animações.'),
('software', 148.66, 'Make Teams', 'Make', 'Plataforma de automação de processos e fluxos de trabalho.'),
('software', 102.47, 'Zapier Profissional', 'Zapier', 'Plataforma de automação e integração entre aplicativos.'),
('software', 150.00, 'n8n IA Starter', 'n8n', 'Plataforma de automação de fluxos de trabalho com recursos de inteligência artificial.'),
('software', 200.87, 'UiPath Inc', 'UiPath', 'Plataforma de automação de processos.'),
('software', 1299.00, 'Autodesk AutoCAD', 'Autodesk', 'Software para desenho técnico e projetos de engenharia e arquitetura.'),
('software', 1499.00, 'Autodesk Revit', 'Autodesk', 'Software para projetos de arquitetura, engenharia e construção.'),

('hardware', 3599.55, 'Processador AMD Ryzen 9 7950X3D, 16-Core, 32-Threads', 'AMD', 'Processador AMD Ryzen 9 7950X3D com 16 núcleos e 32 threads.'),
('hardware', 4300.90, 'Processador Intel Core i9-9900K Coffee Lake Refresh', 'Intel', 'Processador Intel Core i9-9900K da geração Coffee Lake Refresh.'),
('hardware', 22000.00, 'Placa de Vídeo GALAX GeForce RTX 4090 HOF 24GB', 'GALAX', 'Placa de vídeo GeForce RTX 4090 HOF com 24GB de memória.'),
('hardware', 2999.90, 'Placa de Vídeo Gigabyte AMD Radeon RX 7600 XT Gaming OC 16GB', 'Gigabyte', 'Placa de vídeo AMD Radeon RX 7600 XT Gaming OC com 16GB.'),
('hardware', 789.00, 'Placa-Mãe Gigabyte B550M Aorus Elite AM4 Micro ATX DDR4', 'Gigabyte', 'Placa-mãe AMD AM4 Micro ATX compatível com memória DDR4.'),
('hardware', 2499.99, 'Placa-Mãe MSI MAG X870E TOMAHAWK WIFI AM5 ATX DDR5', 'MSI', 'Placa-mãe AM5 ATX com DDR5 e Wi-Fi 7.'),
('hardware', 480.50, 'SSD Kingston A400 480GB SATA III', 'Kingston', 'SSD de 480GB com interface SATA III e leitura de até 500MB/s.'),
('hardware', 909.99, 'SSD XPG S70 Blade 512GB M.2 NVMe PCIe Gen4x4', 'XPG', 'SSD NVMe de 512GB PCIe Gen4x4 com leitura de até 7200MB/s.'),
('hardware', 2378.99, 'Memória RAM Corsair Vengeance Pro RGB 32GB DDR4', 'Corsair', 'Memória RAM DDR4 de 32GB (2x16GB), 2666MHz, CL16.'),
('hardware', 3899.99, 'Memória RAM Kingston Fury Beast RGB 32GB DDR5', 'Kingston', 'Memória RAM DDR5 de 32GB (2x16GB), 5600MHz, CL36.'),
('hardware', 623.92, 'Fonte XPG Kyber 850W 80 Plus Gold', 'XPG', 'Fonte de alimentação de 850W, 80 Plus Gold e bivolt.'),
('hardware', 4642.82, 'Fonte Corsair RM1200e 1200W 80 Plus Gold', 'Corsair', 'Fonte de alimentação modular de 1200W, 80 Plus Gold e bivolt.'),
('hardware', 329.99, 'Gabinete Gamer Kalkan Asgard Mid Tower ATX', 'Kalkan', 'Gabinete Mid Tower ATX com lateral em vidro temperado.'),
('hardware', 69.99, 'Gabinete Office Husky 200 Micro ATX Mini ATX', 'Husky', 'Gabinete para computadores Micro ATX e Mini ATX.'),
('hardware', 3788.51, 'PC Gamer Completo Ryzen 5 5600GT 16GB DDR4 SSD 480GB', 'Genérico', 'PC Gamer completo com Ryzen 5 5600GT, 16GB DDR4, SSD de 480GB e fonte de 500W.'),
('hardware', 13599.99, 'Notebook Gamer Lenovo Legion 5i Core Ultra 7 RTX 5060', 'Lenovo', 'Notebook Gamer com Intel Core Ultra 7, 16GB de RAM, SSD de 1TB e RTX 5060.'),
('hardware', 1327.74, 'Computador Completo Intel Core i5 16GB SSD 240GB', 'Genérico', 'Computador completo com Intel Core i5, 16GB de RAM, SSD de 240GB e monitor de 19 polegadas.'),
('hardware', 1994.05, 'Notebook Positivo Vision C14 Intel Celeron 4GB 128GB', 'Positivo', 'Notebook com Intel Celeron, 4GB de RAM, 128GB eMMC e Windows 11 Home.');

INSERT INTO Pedido (FK_usuario_id, FK_produto_id, data, valor_total, CEP) VALUES
(1, 15, '2026-09-10', 3599.55, '18550-000'),
(2, 18, '2026-09-11', 2999.90, '13300-000'),
(3, 16, '2026-09-12', 4300.90, '18110-000'),
(4, 17, '2026-09-13', 22000.00, '18270-000'),
(5, 29, '2026-09-14', 6599.45, '13010-000');

INSERT INTO Pagamento (FK_pedido_id, metodo) VALUES
(1, 'PIX'),
(2, 'Cartão de crédito'),
(3, 'Boleto'),
(4, 'PIX'),
(5, 'Cartão de débito');

INSERT INTO Atendimento_SAC (DA, DE, FK_usuario_id, categoria, duvida, resposta) VALUES
('2026-09-10', '2026-09-10', 1, 'Entrega', 'Qual o prazo de entrega do meu pedido?', 'O pedido será entregue em até 7 dias úteis.'),
('2026-09-11', '2026-09-12', 2, 'Pagamento', 'Meu pagamento ainda não foi confirmado.', 'O pagamento foi recebido e já está sendo processado.'),
('2026-09-12', '2026-09-12', 3, 'Produto', 'O produto possui garantia?', 'Sim, o produto possui garantia conforme as condições da loja.'),
('2026-09-13', '2026-09-14', 4, 'Troca', 'Posso solicitar a troca do produto?', 'Sim, a solicitação pode ser feita dentro do prazo informado pela loja.'),
('2026-09-14', '2026-09-15', 5, 'Pedido', 'Como posso acompanhar meu pedido?', 'Você pode acompanhar o pedido pela área de pedidos da sua conta.');