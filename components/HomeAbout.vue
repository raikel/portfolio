<template>
  <section
    :id="anchorId"
    class="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
  >
    <div class="container">
      <div class="row d-flex no-gutters">
        <div class="col-md-6 col-lg-6 d-flex">
          <div class="img-about img d-flex align-items-stretch">
            <div class="overlay" />
            <div
              class="img d-flex align-self-stretch align-items-center"
              style="background-image:url(images/developer.svg);"
            />
          </div>
        </div>
        <div class="col-md-6 col-lg-6 pl-md-5 py-5">
          <div class="row justify-content-start pb-3">
            <div class="col-md-12 heading-section ftco-animate">
              <h1 class="big">
                About
              </h1>
              <h2 class="mb-4">
                About Me
              </h2>
              <p>
                {{ profile }}
              </p>
              <ul class="about-info mt-4 px-md-0 px-2">
                <li class="d-flex">
                  <span>Name:</span>
                  <span>{{ fullName }}</span>
                </li>
                <li v-if="birthDate" class="d-flex">
                  <span>Date of birth:</span>
                  <span>{{ birthDate }}</span>
                </li>
                <li v-if="address" class="d-flex">
                  <span>Address:</span>
                  <span>{{ address }}</span>
                </li>
                <li v-if="email" class="d-flex">
                  <span>Email:</span>
                  <span>{{ email }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="counter-wrap ftco-animate d-flex mt-md-3">
            <div class="text w-100">
              <p v-if="showProjectCount" class="mb-4">
                <span class="number mr-2" data-number="24">0</span>
                <span>Project complete</span>
              </p>
              <p v-if="resume" class="text-right">
                <a :href="resume" class="btn btn-primary py-3 px-3">
                  Download CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeAbout',

  props: {
    profile: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      default: ''
    },
    birthDate: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    resume: {
      type: String,
      default: ''
    },
    anchorId: {
      type: String,
      required: true
    },
    showProjectCount: {
      type: Boolean,
      default: false
    }
  }
};
</script>
