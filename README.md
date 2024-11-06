# WebClientes
Este é um front-end construído com Angular para gerenciar clientes, criar e autenticar usuários, fornecendo uma interface para interagir com as APIs REST [apiClientes](https://github.com/samuelmsilva2v/apiClientes) e [apiAuthUsuario](https://github.com/samuelmsilva2v/apiAuthUsuarios).

## Pré-requisitos
- Node.js e npm instalados: [Node.js](https://nodejs.org/)
- Angular CLI instalado globalmente:
```bash
  npm install -g @angular/cli
```

## Tecnologias
* Angular
* Bootstrap

## Instalação
1. Clone o repositório
```bash
git clone https://github.com/samuelmsilva2v/webClientes.git
cd webClientes
```
2. Instale as dependências
```bash
npm install
```

## Estrutura do projeto e componentes
```plaintext
src/
├── app/
│   ├── autenticar-usuario/   # Página inicial e de autenticação
│   ├── cadastrar-cliente/    # Página de cadastro de cliente
│   ├── consultar-clientes/   # Página de consulta de clientes
│   ├── criar-usuario/        # Página para cadastro de usuário
│   ├── editar-clientes/      # Página de edição de cliente
│   ├── navbar/               # Menu superior de navegação
│   ├── app.module.ts         # Módulo principal
│   └── app.component.ts      # Componente raiz
└── 
```

## Funcionalidades
* Criação e autenticação de usuários
* Cadastro, consulta, edição e exclusão de usuários

## Imagens da aplicação
![Auth](https://github.com/samuelmsilva2v/assets/blob/main/apiClientes/Captura%20de%20tela%202024-11-01%20191126.png)
![Register](https://github.com/samuelmsilva2v/assets/blob/main/apiClientes/Captura%20de%20tela%202024-11-01%20191150.png)
![Register Client](https://github.com/samuelmsilva2v/assets/blob/main/apiClientes/Captura%20de%20tela%202024-11-01%20191335.png)
![Client List](https://github.com/samuelmsilva2v/assets/blob/main/apiClientes/Captura%20de%20tela%202024-11-01%20191358.png)

