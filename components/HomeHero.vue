<template>
  <section class="hero-wrap js-fullheight">
    <div class="overlay" />
    <div class="container">
      <div
        class="row no-gutters slider-text js-fullheight justify-content-center align-items-center"
      >
        <div class="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
          <div class="text text-center">
            <span class="subheading">Hey! I am</span>
            <h1>Raikel Bordón</h1>
            <h2>
              I'm a
              <span
                class="txt-rotate"
                data-period="2000"
                :data-rotate="JSON.stringify([
                  'Backend Engineer',
                  'Python Developer',
                  'JavaScript Developer'
                ])"
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="mouse d-none d-sm-block">
      <a href="#" class="mouse-icon">
        <div class="mouse-wheel">
          <span class="icon-arrow_downward" />
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHero'
};
</script>
