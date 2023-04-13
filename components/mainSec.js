function getTemplet(path) {
    const template = document.createElement("template");
    template.innerHTML = `
    <div class="main-cont">
    <div class="nav-closer"></div>
    <nav class="menubar p-absolute" id="menubar">
      <div class="top-sec">
        <div class="brand-logo">Brand Logo</div>
        <div class="profile-img-sec">
          <div class="img-r profile-img-wrapper">
            <img src="${path}recorces/images/no-avatar.png" alt="no profile" />
          </div>
        </div>
      </div>
      <ul class="nav-items">
        <li class="nav-item active">
          <a href="/">
            <div class="menu-icon"><i class="fas fa-tachometer-alt"></i></div>
            <span>Dashbord</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a>
            <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
            <div class="menu-icon">
              <i class="fa fa-cog" aria-hidden="true"></i>
            </div>
            <span>Settings</span>
          </a>
          <ul>
            <li>
              <a href="${path}pages/organization.html">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Organization</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Branch</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Project</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Department</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Section</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a>
            <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
            <div class="menu-icon"><i class="fas fa-key"></i></div>
            <span>Permission</span>
          </a>
          <ul>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Module Permission</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Menu Permission</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Option Permission</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a href="#">
            <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
            <div class="menu-icon"><i class="fas fa-users"></i></div>
            <span>Humen Resource</span>
          </a>
          <ul>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Employee</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Manage Holiday</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Stuff Ateendance</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a href="#">
            <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
            <div class="menu-icon"><i class="fas fa-campground"></i></div>
            <span>Party Manage</span>
          </a>
          <ul>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Session</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Customer</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Distributor</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Guest List</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Importer</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#">
            <div 
              class="menu-icon" 
              style="margin: 0 2.5px;"
              >
                <i class="fas fa-clipboard-list"></i>
              </div>
            <span>Notice</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#">
            <div class="menu-icon"><i class="fa fa-cog" aria-hidden="true"></i></div>
            <span>Production</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a href="#">
            <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
            <div class="menu-icon"><i class="fas fa-file-alt"></i></div>
            <span>Custom Workorder</span>
          </a>
          <ul>
            <li>
              <a href="#">
                <div class="menu-icon"><i class="far fa-circle"></i></div>
                <span>Workorder</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <main class="page-contents" id="page-contents">
        <div class="top-bar">
            <div class="menu-toggle" id="menu-toggle">
                <button><i class="fas fa-bars"></i></button>
            </div>
            <h4>HRM Management System</h4>
            <div class="uility-btn-sec"></div>
        </div>
        <slot id="slot"></slot>
    </main>
    </div>
    `;

    return template;
}

export class MainSec extends HTMLElement {
  constructor() {
    super();
    const content = this.innerHTML;
    this.innerHTML = '';
    const template = getTemplet(this.getAttribute('path') || './');
    const slot = template.content.getElementById("slot");
    slot.innerHTML = content;
    this.appendChild(template.content.cloneNode(true));
  }
}
