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
            <a href="${path}pages/settings/organization.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Organization</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/branch.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Branch</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/project.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Project</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/department.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Department</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/section.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Section</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/area.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Area</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/division.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Divition</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/district.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>District</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/trt-area.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>TRT Area</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/shift.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Shift</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/module.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Module</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/menu.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Menu</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/settings/option.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Options</span>
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
            <a href="${path}pages/permition/module-perm.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Module Permission</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/permition/menu-perm.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Menu Permission</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/permition/option-perm.html">
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
            <a href="${path}pages/humen-resources/employee.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Employee</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/humen-resources/manage-holidays.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Manage Holiday</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/humen-resources/stuff-attendance.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Stuff Ateendance</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/humen-resources/out-of-station-duty.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Out Station Duty</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/humen-resources/attendance-data-load.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Ateendance Data Load</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/humen-resources/monthly-attendance.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Monthly Ateendance</span>
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
            <a href="${path}pages/party-manage/session.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Session</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/party-manage/customer.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Customer</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/party-manage/distributor.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Distributor</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/party-manage/guest-list.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Guest List</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/party-manage/importer.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Importer</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#">
          <div class="menu-icon" style="margin: 0 2.5px">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <span>Notice</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#">
          <div class="menu-icon">
            <i class="fa fa-cog" aria-hidden="true"></i>
          </div>
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
      <li class="nav-item dropdown">
        <a href="#">
          <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
          <div class="menu-icon"><i class="fas fa-cog"></i></div>
          <span>Salary Management</span>
        </a>
        <ul>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Genarate Salary Sheet</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Manage Salary Bill</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#">
          <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
          <div class="menu-icon"><i class="fas fa-store"></i></div>
          <span>Purchase Order</span>
        </a>
        <ul>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Distribution PO</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#">
          <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
          <div class="menu-icon"><i class="fas fa-shopping-cart"></i></div>
          <span>Delivery Challan</span>
        </a>
        <ul>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Delivery Challan</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#">
          <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
          <div class="menu-icon" style="margin: 0 2.5px">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <span>Leave Management</span>
        </a>
        <ul>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Leave Type</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Leave Compose</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#">
          <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
          <div class="menu-icon"><i class="fas fa-toolbox"></i></div>
          <span>Accounts</span>
        </a>
        <ul>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>SL Level-1</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>SL Level-2</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>SL Level-2</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>SL Level-3</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Chart of Accounts</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#">
          <div class="dd-icon"><i class="fas fa-chevron-down"></i></div>
          <div class="menu-icon"><i class="fas fa-flag"></i></div>
          <span>Reports</span>
        </a>
        <ul>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Monthly Stuff Attendance</span>
            </a>
          </li>
          <li>
            <a href="${path}pages/reports/daily-attendance.html">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Daily Attendance</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Job Card</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Cash Salary Seet</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>Bank Salary Sheet</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="menu-icon"><i class="far fa-circle"></i></div>
              <span>My Job Card</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#">
          <div class="menu-icon"><i class="fas fa-user-cog"></i></div>
          <span>User</span>
        </a>
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
    this.innerHTML = "";
    const template = getTemplet(this.getAttribute("path") || "./");
    const slot = template.content.getElementById("slot");
    slot.innerHTML = content;
    this.appendChild(template.content.cloneNode(true));
  }
}
