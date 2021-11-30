function Header(props) {

  const tituloPagina = <h1>Olá,<br />meu nome é<br />{props.meuNome}!</h1>;
  const minhaFoto = <img src={props.arquivoFoto} className="inline_img"></img>;

  const header = (
    <div>
      <div className="nome">
        {tituloPagina}
      </div>
      <div>
        {minhaFoto}
      </div>
    </div>);

  return header;
}

function Body() {
  const minibio = <div className="minibio">
    Alline Oliveira, especialista em inovação,
    há 25 anos vem transformando comportamentos de usuários de tencologia em aplicativos
    de fácil utilizacão e linguagem acessível.<br /><br />
    Tem na diversidade a sua maior bandeira e por isso que durante toda sua jornada
    sempre fez questão de compartilhar seus aprendizados fazendo com que outras
    programadoras e programadores também pudessem contribuir com suas descobertas.
  </div>;
  return minibio;
}

function Content() {
  return (
    <div>
      <Header meuNome="Alline Oliveira" arquivoFoto='perfil.jpg' />
      <br />
      <Body />
    </div>);
}


ReactDOM.render(
  <Content />,
  document.getElementById('root')
);