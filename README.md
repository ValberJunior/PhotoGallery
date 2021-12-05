# Projeto - Galeria de Fotos em React.Js


https://user-images.githubusercontent.com/84424883/144758174-36786edc-905f-4a01-a429-d75d06a7e005.mp4



## Tecnologias aplicadas:

<div style="display=inline-block">
<img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="javascript"width="50px" height="50px" >
         <img src="https://cdn.iconscout.com/icon/free/png-64/html5-2038876-1720089.png" alt="html"width="50px" height="50px" >
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" width="50px" height="50px" >
 </div>
 
 

### deploy 👉 https://photogalleryreact.netlify.app/

### Detalhes do projeto:

- Consumir uma API de Fotos, renderizar as fotos em um componente, utilizar lazy loading para processamento de imagens e paginação para renderizar as páginas obtidas pela response da consulta ao API.
- Adicionais: Criei um Banner com um background animado para receber o input de busca do usuário.
- Utilizei o Axios para consumir a API e distribui em 3 funções, a busca (com um termo padrão pré definido) e duas conexões para a paginação.
- Utilizei o Context API para que o Estado das photos fosse consumido pelos componentes.
- Criei um componente de animação de erro para caso não obtenha a resposta da pesquisa do usuário e também uma animação para loading enquanto não carrega a lista de imagens.
- As imagens foram distribuídas pelo componente e organizada com display grid, e alguns componentes com display-flex.
- Para o estilo utilizei o Styled-Components, que facilitou bastante na busca da responsividade.
- Pra finalizar, criei um modal para que toda vez que a foto fosse clicada, os direitos de cada imagem sejam atribuídos aos seus autores, além disso coloquei o link direto da Pexels dentro do modal.
- Para deploy foi utilizado o NetLify;

