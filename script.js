function Component(elDOM, code) {
  this.elDOM = elDOM
  this.code = code
}

Component.prototype.create = function () {
  const el = document.querySelector(this.elDOM)
  el.innerHTML = this.code
}

const header = new Component(
  'header',
  `
  <h1>Lost Multiverse - Início</h1>
    <nav>
      <ul>
        <li><a href="index.html">Início</a></li>
        <li><a href="nav/about.html">Sobre Mim</a></li>
        <li><a href="nav/hability.html">Habilidades</a></li>
        <li><a href="nav/certification.html">Certificados</a></li>
        <li><a href="nav/projects.html">Projetos</a></li>
        <li><a href="nav/services.html">Serviços</a></li>
        <li><a href="nav/contact.html">Contato</a></li>
      </ul>
    </nav>
  `
)

const footer = new Component(
  'footer',
  `
  <div id="footer-top">
    <div id="footer-nav">
      <h4>Navegação rápida entre seções</h4>
        <ul>
          <li><a href="">Início</a></li>
          <li><a href="">Sobre Mim</a></li>
          <li><a href="">Habilidades</a></li>
          <li><a href="">Certificados</a></li>
          <li><a href="">Projetos</a></li>
          <li><a href="">Serviços</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </div>
    </div>
    <div id="footer-bottom">
      <p>Site atualizado pela última vez no dia 05/08/2025</p>
      <p>
        Ver projeto no
        <a href="https://github.com/LostKoe/Lost-Multiverse">GitHub</a>
      </p>
      <p>
        Portifólio feito por
        <a href="https://github.com/LostKoe">LostKoe</a>
      </p>
      <p>&copy; 2025 | Todos os direitos reservados</p>
    </div>
  `
)
