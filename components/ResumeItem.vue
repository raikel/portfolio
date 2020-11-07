<template>
  <div class="resume-wrap d-flex ftco-animate">
    <div class="icon d-flex align-items-center justify-content-center">
      <span :class="icon" />
    </div>
    <div class="text pl-3">
      <span class="date">{{ dates }}</span>
      <h2>{{ title }}</h2>
      <span class="position">{{ place }}</span>
      <p>{{ activity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeItem',

  props: {
    dates: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    activity: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>
