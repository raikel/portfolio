<template>
  <div class="main-layout">
    <nav
      id="ftco-navbar"
      class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
    >
      <div class="container">
        <a class="navbar-brand" href="#"><span>R</span>aikel</a>
        <button
          class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu" /> Menu
        </button>

        <div id="ftco-nav" class="collapse navbar-collapse">
          <ul class="navbar-nav nav ml-auto">
            <li v-for="(link, index) in navLinks" :key="index" class="nav-item">
              <a :href="link.href" class="nav-link">
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Nuxt />

    <footer class="ftco-footer ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p>
              Copyright &copy; All rights reserved |
              Made with <i class="icon-heart color-danger" aria-hidden="true" />
              by Raikel Bordón López
            </p>
          </div>
        </div>
      </div>
    </footer>

    <div id="ftco-loader" class="show fullscreen">
      <svg class="circular" width="48px" height="48px">
        <circle
          class="path-bg"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke-width="4"
          stroke="#eeeeee"
        />
        <circle
          class="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke-width="4"
          stroke-miterlimit="10"
          stroke="#F96D00"
        />
      </svg>
    </div>
  </div>
</template>

<script>

import config from '../config';

export default {
  name: 'DefaultLayout',

  data() {
    return {
      navLinks: config.navLinks
    };
  }
};
</script>
