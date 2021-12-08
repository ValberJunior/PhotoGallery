# Projeto - Galeria de Fotos em React.Js


https://user-images.githubusercontent.com/84424883/144758174-36786edc-905f-4a01-a429-d75d06a7e005.mp4


<br>
<h2>Tecnologias aplicadas:</h2>
<br>
<div style="display=inline-block">
<img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="javascript"width="50px" height="50px" style="margin-10px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" width="50px" height="50px" >
 </div>
 <br><br>
 

### deploy 👉 https://photogalleryreact.netlify.app/
<br><br>
### Detalhes do projeto:

![screencapture-photogalleryreact-netlify-app-2021-12-08-10_27_40](https://user-images.githubusercontent.com/84424883/145216377-e5458d75-ff08-47a9-a968-04090ee374c4.png)
<br><br><br>

![print5](https://user-images.githubusercontent.com/84424883/144758841-b296a387-b6a2-4b8e-8564-df657f26b5e4.png)
<br><br><br>
![print6](https://user-images.githubusercontent.com/84424883/144758850-d25e14bd-4e01-4697-9e41-657ac7e8affd.png)
<br><br>


- Consumir uma API de Fotos, renderizar as fotos em um componente, utilizar lazy loading para processamento de imagens e paginação para renderizar as páginas obtidas pela response da consulta ao API.
- Adicionais: Criei um Banner com um background animado para receber o input de busca do usuário.
- Utilizei o Axios para consumir a API e distribui em 3 funções, a busca (com um termo padrão pré definido) e duas conexões para a paginação.
- Utilizei o Context API para que o Estado das imagens fosse consumido pelos componentes.
- Criei um componente de animação de erro para caso não obtenha a resposta para pesquisa do usuário e também uma animação para loading enquanto não carrega a lista de imagens.
- As imagens foram distribuídas pelo componente e organizadas com display grid, e alguns componentes com display-flex.
- Para o estilo utilizei o Styled-Components, que facilitou bastante na busca da responsividade.
- Pra finalizar, criei um modal para que toda vez que o card da imagem fosse clicado fosse exposto os créditos aos fotógrafos, além disso coloquei o link direto da Pexels dentro do modal.
- Para deploy foi utilizado o NetLify;

