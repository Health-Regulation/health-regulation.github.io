class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container">
          <a class="navbar-brand" href="index.html">AI guidance tool</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="development.html">Development Tool</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="implementation.html">Implementation Tool</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.moh.gov.sg/licensing-and-regulation/artificial-intelligence-in-healthcare">
                  AIHGle guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('header-component', Header);
