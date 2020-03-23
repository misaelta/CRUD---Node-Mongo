# Crud simples com node + mongoDB Atlas

Segue os passos para está rodando o projeto em sua maquina local.

- Crie uma conta no mongoDB Atlas   -  https://www.youtube.com/watch?v=Y4KYgjgXeBQ  -  nesse link você poderá ver uma vídeo aula de como instalar e acessar o banco através do  **mongoDB compass** . Não será necessário criar a tabela no banco, ela será criada automaticamente quando o projeto for iniciado. 

- Vá até a raiz do projeto e execute o comando    **_NPM INSTALL_**.  

- No arquivo **index.js** na linha **8** você deverá colocar as infomações do banco  criado no mongoDB Atlas 
mongoose.connect('mongodb+srv://USERNAME:PASSWORD@cluster0-wuis8.mongodb.net/NOMEDOBANCO?retryWrites=true&w=majority',{useNewUrlParser:true}


- Depois disso basta executar o comando  _npm start_
