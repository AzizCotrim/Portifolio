$(function () {    
    $('.icon-html').mouseover(function(){
        $('.mudar-texto').text("HTML (HyperText Markup Language) é a linguagem de marcação padrão utilizada para estruturar e exibir conteúdo na web.");
    }),
    $('.icon-css').mouseover(function(){
        $('.mudar-texto').text("CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a apresentação e o visual de um documento HTML.");
    }),
    $('.icon-js').mouseover(function(){
        $('.mudar-texto').text("JS é a abreviação de JavaScript. É uma linguagem de programação de alto nível, interpretada e orientada a objetos, que permite adicionar interatividade e funcionalidade dinâmica a páginas da web.");
    }),
    $('.icon-sass').mouseover(function(){
        $('.mudar-texto').text("Sass (Syntactically Awesome Style Sheets) é uma linguagem de extensão do CSS que adiciona recursos e funcionalidades adicionais ao estilo das folhas de estilo.");
    }),
    $('.icon-bootstrap').mouseover(function(){
        $('.mudar-texto').text("Bootstrap é um framework front-end popular e amplamente utilizado para o desenvolvimento responsivo de páginas da web e aplicativos.");
    }),
    $('.icon-angular').mouseover(function(){
        $('.mudar-texto').text("Angular é um framework de desenvolvimento de aplicativos web de código aberto e plataforma única mantido pelo Google.");
    }),
    $('.icon-react').mouseover(function(){
        $('.mudar-texto').text("React é uma biblioteca JavaScript de código aberto para a criação de interfaces de usuário (UI) interativas e reativas.");
    }),
    $('.icon-php').mouseover(function(){
        $('.mudar-texto').text("PHP (Hypertext Preprocessor) é uma linguagem de programação de código aberto, especialmente adequada para o desenvolvimento de aplicações web e scripts do lado do servidor.");
    });

    $('.icon').mouseout(function(){
        $('.mudar-texto').text("*Passe o mouse por cima dos icones para saber mais*")
    })
});