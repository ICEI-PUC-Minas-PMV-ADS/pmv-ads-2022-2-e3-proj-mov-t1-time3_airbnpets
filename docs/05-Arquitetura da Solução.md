# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![classes](https://user-images.githubusercontent.com/91069587/194724513-a38aebca-8469-4b5b-9e24-7d6b848aa607.jpg)


## Modelo ER

(![Fluxogramas (1)](https://user-images.githubusercontent.com/73501565/194575298-418b6425-452d-41a8-b670-3d0f2659e6e4.jpeg)


As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
![Diagrama em branco (1)](https://user-images.githubusercontent.com/73501565/194575581-6eca1446-5e89-4444-86e4-dacefea8cd5e.jpeg)

 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

O grupo optou por priorizar algumas sub-características para o projeto airbnpets seguindo os fundamentos descriminados na norma técnica ISO/IEC 25010, seguem os itens para a avaliação da qualidade de software.

Adequação funcional
Será averiguado se o público-alvo para qual a aplicação móvel foi oferecida está satisfeito com o produto.

Confiabilidade
Será analisado se a aplicação apresenta algum tipo de falha durante sua execução. Ou ainda se ocorre algum comportamento inesperado durante seu funcionamento após alguma modificação.

Usabilidade
A praticidade do uso do aplicativo é um dos pilares para uma experiência prazerosa para o usuário. O projeto está sendo desenvolvido de forma que as atividades no uso da aplicação sejam realizadas com a menor quantidade de cliques.

Eficiência
Serão realizados testes para avaliar a performance do software e os mecanismos utilizados. O software apresentará funcionalidades que são auto explicativas.

Manutenabilidade
Serão realizados testes relacionados à lentidão durante o uso. Se tratando da reusabilidade da aplicação significará reduzir custos e tempo no processo de desenvolvimento, aumentar a qualidade, entre outras diversas vantagens.

