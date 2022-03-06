import React from "react";

export default function Footer() {
  return (
    <div>
      <section class="join p-t p-b">
        <div class="container">
          <div class="row align-items-center justify-content-center join-content">
            <div class="col-lg-9">
              <h2 class="title text-center text-lg-left">
                Be part of the community Join Now
              </h2>
            </div>
            <div class="col-lg-3 justify-content-center justify-content-lg-end d-flex">
              <a href="#" class="ourbtn text-uppercase join-btn">
                join now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="row justify-content-center justify-content-md-between align-items-center">
            <div class="col-md-6">
              <h6 class="m-0 copyright second-font text-center text-md-left">
                &copy; CryptoGods 2022, Powered by Astrisoft Dubai
              </h6>
            </div>
            <div class="col-md-6 social-items justify-content-center justify-content-md-end d-flex align-items-center">
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
        </div>
      </footer>
    </div>
  );
}
