# Murabei test

## Description

Esse e o teste para Desenvolvedor FullStack na Murabei Data Science, usando Docker, Python, Nextjs and sqlite3.

O objetivo deste teste e avaliar a capcidade do desenvolvedor em criar uma aplicacao Frontend e integra-la em uma API Python. Toda a aplicacao e mantida em containers Docker, e roda usando docker compose. Esta e a mesma arquitetura usada em todos os projetos internos da Murabei.

## Instrucoes

O repositorio e dividido em 3 pastas:

- \_docker-compose
- backend
- frontend

Na pasta **_\_docker-compose_**, estao os arquivos responsaveis por subir todas as imagens Docker. Um **docker-compose.yml**, que possui as informacoes de quais containers e imagens devem subir; um script **docker-up.bash** que sobe os containers baseado no arquivo **docker-compose.yml**; e um arquivo **docker.log**, que armazena todos os logs da aplicacao.

Ja na pasta **_backend_** esta a API de livros, em Python Flask. Esta API tem uma gama de operacoes basicas, como listagem de livros, criacao, busca por autor e titulo. Esta API ja esta pre-pronta, mas pode ser alterada de acordo com a sua necessidade, sem problemas.

Esta pasta possui um script **build.bash**, que builda a imagem docker a ser utilizada no **docker-compose.yml**.

E, a pasta **_frontend_**, onde devem ser colocados codigos do FE. Aqui na Murabei, utilizamos o NextJS como framework de React, logo, seu FE deve ser desenolvido em NextJS, pelo menos, na versao 13, que ja possui **_Server Components_** e **_Server Actions_**.

## Objetivos do Teste

O objetivo deste teste e criar uma aplicacao FE em NextJS que faz as operacoes basicas de CRUD, como listar, criar e deletar livros, alem de permitir buscar esses livros pelo titulo ou pelo autor.

O FE deve rodar junto com os outros servicos em docker, ou seja, deve ser adicionado um servico ao **docker-compose.yml** com o nome frontend. Para isso, o FE precisa de um **_Dockerfile_**, e de um script **_build.bash_**, como o servico da API.

**IMPORTANTE**: ao rodar o **docker-compose.yml**, o FE deve subir junto com os outros servicos.

## Avaliacao

Aqui vao os pontos que sera avaliados no teste:

**_Obrigatorios_**

- O FE deve possuir uma imagem docker, e rodar junto com os outros servicos no **_docker-compose.yml_** (1 ponto)
- O FE deve possuir uma tela de listagem dos livros (1 ponto)
- O FE deve possuir uma tela de busca de livros por titulo (1 ponto)
- O FE deve possuir uma tela de busca de livros por autor (1 ponto)
- O FE deve possuir uma tela de criacao de livros (1 ponto)
- O FE deve possuir uma funcao de de deletar livros (1 ponto)
- As telas devem ser feitas usando componentes da biblioteca [shadcn/ui](https://ui.shadcn.com/) (1 ponto)

**Total: 7 pontos**

**_Pontos extras_**

- Fazer o deploy publico da aplicacao em qualquer servico que aceite as imagens docker (1 ponto)
- Adicionar testes (unitarios ou end-to-end) (1 pontos)
- Uso do Typescript (1 ponto)

**Total: 3 pontos**

### Criterios tecnicos

Alem da avaliacao das funcionalidades do FE, tambem serao levados em consideracao aspectos tecnicos como:

- Componentizacao:
  - Criacao de componentes reutilizaveis
- Organizacao
  - Clareza e legibilidade do codigo
  - Comentarios e documentacao
  - Organizacao clara das pastas e arquivos
- Principios
  - Clean Code
  - DRY
  - MVC
