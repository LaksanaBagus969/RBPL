// ============================================
// NAVAGREEN LOGISTICS - CORE APPLICATION JS
// Auth, Navigation, Toasts, Modals, Utilities
// ============================================

const App = {
  currentUser: null,

  init() {
    const saved = localStorage.getItem('navagreen_user');
    if (saved) {
      this.currentUser = JSON.parse(saved);
    }
  },

  login(username, password, role) {
    const user = MOCK_USERS.find(u =>
      u.username === username && u.password === password && u.role === role
    );
    if (user) {
      this.currentUser = user;
      localStorage.setItem('navagreen_user', JSON.stringify(user));
      return { success: true, user };
    }
    return { success: false, error: 'Username, password, atau role tidak sesuai.' };
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('navagreen_user');
    window.location.href = 'index.html';
  },

  requireAuth() {
    if (!this.currentUser) {
      window.location.href = 'index.html';
      return false;
    }
    return true;
  },

  getRedirectPage(role) {
    const routes = {
      'Admin': 'dashboard.html',
      'Supervisor': 'verifikasi.html',
      'Karyawan Gudang': 'sorting.html',
      'Supir': 'pengiriman.html',
    };
    return routes[role] || 'dashboard.html';
  }
};

// ============ TOAST SYSTEM ============
const Toast = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'info', duration = 4000) {
    this.init();
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span style="font-size:16px">${icons[type] || 'ℹ'}</span>
      <span style="flex:1">${message}</span>
      <button onclick="this.parentElement.remove()" style="color:var(--text-muted);font-size:16px;padding:2px">✕</button>
    `;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 300ms ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  success(msg) { this.show(msg, 'success'); },
  error(msg) { this.show(msg, 'error'); },
  warning(msg) { this.show(msg, 'warning'); },
  info(msg) { this.show(msg, 'info'); },
};

// ============ MODAL SYSTEM ============
const Modal = {
  open(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.add('active'); document.body.style.overflow = 'hidden'; }
  },
  close(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('active'); document.body.style.overflow = ''; }
  },
  closeAll() {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      m.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
};

// ============ SIDEBAR ============
const Sidebar = {
  init() {
    const toggle = document.getElementById('sidebarToggle');
    const layout = document.querySelector('.app-layout');
    const overlay = document.querySelector('.sidebar-overlay');
    const sidebar = document.querySelector('.sidebar');

    if (toggle) {
      toggle.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.toggle('mobile-open');
          overlay.classList.toggle('active');
        } else {
          layout.classList.toggle('sidebar-collapsed');
        }
      });
    }
    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
      });
    }
    // Set active link
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sidebar-link').forEach(link => {
      const href = link.getAttribute('data-page');
      if (href === page) link.classList.add('active');
    });
  }
};

// ============ ANIMATED COUNTER ============
function animateCounter(element, target, duration = 1200, suffix = '') {
  let start = 0;
  const startTime = performance.now();
  const isFloat = target % 1 !== 0;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = start + (target - start) * eased;
    element.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ============ ICONS (inline SVG) ============
const Icons = {
  home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  doc: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  box: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
  truck: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
  chart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  bell: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  plus: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  logout: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  eye: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
  filter: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  download: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  chevronDown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  settings: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
};

// ============ SIDEBAR RENDERER ============
function renderSidebar(activePage) {
  const user = App.currentUser || { name: 'User', role: 'Guest', avatar: 'U' };
  return `
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <div class="sidebar-logo">N</div>
      <div class="sidebar-brand-text">
        <div class="sidebar-brand-name">Navagreen</div>
        <div class="sidebar-brand-sub">Logistics Platform</div>
      </div>
    </div>
    <nav class="sidebar-nav">
      <div class="sidebar-section">
        <div class="sidebar-section-title">Menu Utama</div>
        <a href="dashboard.html" class="sidebar-link" data-page="dashboard.html">
          <span class="sidebar-link-icon">${Icons.home}</span>
          <span class="sidebar-link-text">Dashboard</span>
        </a>
        <a href="dokumen.html" class="sidebar-link" data-page="dokumen.html">
          <span class="sidebar-link-icon">${Icons.doc}</span>
          <span class="sidebar-link-text">Dokumen</span>
          <span class="sidebar-link-badge">8</span>
        </a>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-title">Operasional</div>
        <a href="verifikasi.html" class="sidebar-link" data-page="verifikasi.html">
          <span class="sidebar-link-icon">${Icons.check}</span>
          <span class="sidebar-link-text">Verifikasi Barang</span>
        </a>
        <a href="sorting.html" class="sidebar-link" data-page="sorting.html">
          <span class="sidebar-link-icon">${Icons.box}</span>
          <span class="sidebar-link-text">Sorting & Packing</span>
        </a>
        <a href="pengiriman.html" class="sidebar-link" data-page="pengiriman.html">
          <span class="sidebar-link-icon">${Icons.truck}</span>
          <span class="sidebar-link-text">Pengiriman</span>
          <span class="sidebar-link-badge">3</span>
        </a>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-title">Analitik</div>
        <a href="dashboard.html#reports" class="sidebar-link" data-page="reports">
          <span class="sidebar-link-icon">${Icons.chart}</span>
          <span class="sidebar-link-text">Laporan</span>
        </a>
      </div>
    </nav>
    <div class="sidebar-footer">
      <div class="sidebar-link" onclick="App.logout()" style="color:var(--gray-500)">
        <span class="sidebar-link-icon">${Icons.logout}</span>
        <span class="sidebar-link-text">Keluar</span>
      </div>
      <div class="sidebar-user">
        <div class="sidebar-user-avatar">${user.avatar}</div>
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">${user.name}</div>
          <div class="sidebar-user-role">${user.role}</div>
        </div>
      </div>
    </div>
  </aside>
  <div class="sidebar-overlay" id="sidebarOverlay"></div>`;
}

// ============ NAVBAR RENDERER ============
function renderNavbar(breadcrumb) {
  return `
  <header class="navbar">
    <div class="navbar-left">
      <button class="navbar-toggle" id="sidebarToggle">${Icons.menu}</button>
      <div class="navbar-breadcrumb">${breadcrumb}</div>
    </div>
    <div class="navbar-right">
      <div class="navbar-search hide-mobile">
        <span class="search-icon">${Icons.search}</span>
        <input type="text" placeholder="Cari..." class="form-input">
      </div>
      <button class="navbar-notif">
        ${Icons.bell}
        <span class="navbar-notif-dot"></span>
      </button>
      <div class="navbar-profile">
        <div class="avatar-sm" style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--primary-400),var(--primary-600));color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600">
          ${(App.currentUser?.avatar || 'U')}
        </div>
      </div>
    </div>
  </header>`;
}

// ============ STATUS BADGE HELPER ============
function statusBadge(status) {
  const map = {
    'Selesai': 'success', 'Terkirim': 'success', 'Lengkap': 'success', 'Siap Kirim': 'success',
    'Diproses': 'info', 'Dalam Perjalanan': 'info', 'Dikemas': 'info',
    'Menunggu': 'warning',
    'Gagal': 'danger', 'Bermasalah': 'danger', 'Rusak': 'danger', 'Kurang': 'warning',
  };
  const type = map[status] || 'neutral';
  return `<span class="badge badge-${type} badge-dot">${status}</span>`;
}

// ============ INIT COMMON LAYOUT ============
function initLayout() {
  App.init();
  Sidebar.init();
}

// ============ UTILITY ============
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}
