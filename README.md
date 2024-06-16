API de Catálogo
Esta é uma API desenvolvida com Node.js, Express e Sequelize para gerenciar um catálogo de itens. Utiliza MySQL como banco de dados.

Configuração do Ambiente
Antes de iniciar, certifique-se de ter o Node.js e o MySQL instalados no seu sistema.

Instalação das Dependências
No diretório raiz do projeto, instale as dependências necessárias utilizando npm:

bash
Copiar código
npm install
Configuração do Banco de Dados
Crie um banco de dados MySQL para o projeto.

Copie o arquivo .env.example para .env e configure as variáveis de ambiente com as suas credenciais do banco de dados:

makefile
Copiar código
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_HOST=localhost
Execute as migrations para criar as tabelas no banco de dados:

bash
Copiar código
npx sequelize-cli db:migrate
(Opcional) Execute as seeders para popular o banco de dados com dados iniciais:

bash
Copiar código
npx sequelize-cli db:seed:all
Executando o Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento:

bash
Copiar código
npm start
O servidor estará acessível em http://localhost:3000.

Endpoints da API
Usuários
GET /api/users: Retorna todos os usuários cadastrados.
GET /api/users/:id: Retorna um usuário específico pelo ID.
POST /api/users: Cria um novo usuário.
PUT /api/users/:id: Atualiza um usuário existente pelo ID.
DELETE /api/users/:id: Deleta um usuário pelo ID.
Catálogo
GET /api/catalogs: Retorna todos os itens do catálogo.
GET /api/catalogs/:id: Retorna um item específico pelo ID.
POST /api/catalogs: Adiciona um novo item ao catálogo.
PUT /api/catalogs/:id: Atualiza um item existente pelo ID.
DELETE /api/catalogs/:id: Remove um item do catálogo pelo ID.
Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests para melhorar este projeto.

Licença
Este projeto é licenciado sob a Licença MIT.

