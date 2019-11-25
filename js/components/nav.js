const nav = () => `
    <nav
      class="navbar navbar-expand-md bg-custom navbar-custom sticky-top"
      id="nav"
    >
      <div
        class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="./comprar.html">Comprar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./cuidado.html">Cuidado</a>
          </li>
        </ul>
      </div>

      <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="./index.html">Inicio</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="./socios.html">Socios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contacto.html">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>`;

function buildNav() {
  let ft = document.getElementById("getNav");
  ft.innerHTML = nav();
}

buildNav();
