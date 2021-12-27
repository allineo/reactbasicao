function Perfil(props) {

  const tituloPagina = <h1>Olá,<br />meu nome é<br />{props.meuNome}!</h1>;
  const minhaFoto = <img src={props.arquivoFoto} className="inline_img"></img>;

  const perfilContent = (
    <div>
      <div className="nome">
        {tituloPagina}
      </div>
      <div>
        {minhaFoto}
      </div>
    </div>);

  return perfilContent;
}

function Bio() {
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

function LinkLinKedin() {
  return (
    <div className="linkedin">
      <a href='https://linkedin.com/in/allineo' target='_blank'>Linkedin</a>
    </div>);
}

function Content() {
  return (
    <div>
      <Perfil meuNome="Alline Oliveira" arquivoFoto='perfil.jpg' />
      <br />
      <Bio />
      <br /><br />
      <LinkLinKedin />
    </div>);
}


ReactDOM.render(
  <Content />,
  document.getElementById('root')
);