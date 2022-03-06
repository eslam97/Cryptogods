import React from "react";

export default function Header() {
  return (
    <header class="d-flex align-items-center main-header position-absolute">
      <div class="container d-flex align-items-center justify-content-between">
        <nav class="navbar navbar-expand-lg p-0">
          <a class="navbar-brand logo text-capitalize" href="#">
            <img src="/logo.svg" alt="logo" class="img-fluid" />
          </a>
        </nav>

        <div class="social-items justify-content-center justify-content-md-end d-flex align-items-center">
          <a href="#" class="social-item">
            <ion-icon name="logo-discord"></ion-icon>
          </a>
          <a href="#" class="social-item">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#" class="social-item">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#" class="social-item">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="#" class="social-item">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#" class="social-item">
            <ion-icon name="logo-tiktok"></ion-icon>
          </a>
        </div>
      </div>
    </header>
  );
}
