/**
 * ============================================================================
 * Learning Platform - Shared Components (Header & Footer)
 * สัปดาห์ที่ 16: การแชร์ Header และ Footer ร่วมกันทุกหน้าด้วย Vanilla JavaScript
 * ============================================================================
 * ช่วยให้แก้ไขเมนูนำทาง (Navbar) และส่วนท้ายเว็บ (Footer) ได้จากจุดเดียว (Single Source of Truth)
 * ใช้งานได้ทันทีทั้งบนเครื่องตัวเอง (file:///) และบน GitHub Pages โดยไม่มีปัญหา CORS
 */

class SiteHeader extends HTMLElement {
  connectedCallback() {
    // 1. ตรวจหาชื่อหน้าปัจจุบันอัตโนมัติจาก URL (เช่น index.html, course.html)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const activePage = this.getAttribute('active') || currentPath;

    // Helper เช็คคลาส active
    const isActive = (pageName) => {
      if (activePage === pageName || (pageName === 'index.html' && (activePage === '' || activePage === 'index.html'))) {
        return 'active';
      }
      return '';
    };

    // 2. แม่แบบ Navbar (Bootstrap 5)
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg sticky-top border-bottom shadow-sm">
        <div class="container">
          <a class="navbar-brand d-lg-none fw-bold text-primary" href="index.html">
            <i class="bi bi-gear-fill me-1"></i>&lt;/&gt;
          </a>

          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNavbar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-medium gap-lg-3">
              <li class="nav-item">
                <a class="nav-link ${isActive('index.html')}" href="index.html">Index</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('course.html')}" href="course.html">Course</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('instructors.html')}" href="instructors.html">Instructors</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Student Showcase
                </a>
                <ul class="dropdown-menu shadow border-0">
                  <li><a class="dropdown-item" href="#">Project 2026</a></li>
                  <li><a class="dropdown-item" href="#">Web Portfolio</a></li>
                  <li><a class="dropdown-item" href="#">Game Showcase</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#news">News & Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('contact.html')}" href="contact.html">Contact Us</a>
              </li>
            </ul>

            <!-- Right Side Logo -->
            <div class="d-none d-lg-flex align-items-center">
              <div class="logo-badge d-flex align-items-center justify-content-center text-secondary fs-4" title="Platform Settings">
                <i class="bi bi-gear-fill position-relative">
                  <span class="position-absolute top-50 start-50 translate-middle text-white fw-bold" style="font-size: 0.5rem; font-family: monospace;">&lt;/&gt;</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer text-white py-5">
        <div class="container py-4">
          <div class="row g-4">
            <!-- Col 1: Brand & Social Links -->
            <div class="col-lg-3 col-md-6">
              <div class="footer-logo mb-4">
                <svg width="34" height="50" viewBox="0 0 36 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 54C13.9706 54 18 49.9706 18 45V36H9C4.02944 36 0 40.0294 0 45C0 49.9706 4.02944 54 9 54Z" fill="white"/>
                  <path d="M0 27C0 22.0294 4.02944 18 9 18H18V36H9C4.02944 36 0 31.9706 0 27Z" fill="white"/>
                  <path d="M0 9C0 4.02944 4.02944 0 9 0H18V18H9C4.02944 18 0 13.9706 0 9Z" fill="white"/>
                  <path d="M18 0H27C31.9706 0 36 4.02944 36 9C36 13.9706 31.9706 18 27 18H18V0Z" fill="white"/>
                  <path d="M36 27C36 31.9706 31.9706 36 27 36C22.0294 36 18 31.9706 18 27C18 22.0294 22.0294 18 27 18C31.9706 18 36 22.0294 36 27Z" fill="white"/>
                </svg>
              </div>
              <div class="d-flex gap-3 fs-5">
                <a href="#" class="text-white text-opacity-75"><i class="bi bi-twitter-x"></i></a>
                <a href="#" class="text-white text-opacity-75"><i class="bi bi-instagram"></i></a>
                <a href="#" class="text-white text-opacity-75"><i class="bi bi-youtube"></i></a>
                <a href="#" class="text-white text-opacity-75"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>

            <!-- Col 2: Use cases -->
            <div class="col-lg-3 col-md-6 col-6">
              <h6 class="fw-bold mb-3">Use cases</h6>
              <ul class="list-unstyled d-flex flex-column gap-2 small">
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">UI design</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">UX design</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Wireframing</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Diagramming</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Brainstorming</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Online whiteboard</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Team collaboration</a></li>
              </ul>
            </div>

            <!-- Col 3: Explore -->
            <div class="col-lg-3 col-md-6 col-6">
              <h6 class="fw-bold mb-3">Explore</h6>
              <ul class="list-unstyled d-flex flex-column gap-2 small">
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Design</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Prototyping</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Development features</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Design systems</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Collaboration features</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Design process</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">FigJam</a></li>
              </ul>
            </div>

            <!-- Col 4: Resources -->
            <div class="col-lg-3 col-md-6">
              <h6 class="fw-bold mb-3">Resources</h6>
              <ul class="list-unstyled d-flex flex-column gap-2 small">
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Blog</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Best practices</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Colors</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Color wheel</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Support</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Developers</a></li>
                <li><a href="#" class="text-white text-opacity-75 text-decoration-none">Resource library</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

// ============================================================================
// การลงทะเบียน Custom Web Components (Custom Elements Registration)
// สั่งให้เบราว์เซอร์จดทะเบียนแท็กใหม่คู่กับ Class แม่แบบ
// Syntax: customElements.define('ชื่อแท็ก-มีขีดกลาง', ชื่อClass);
// ============================================================================
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);

