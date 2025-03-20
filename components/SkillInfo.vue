<template>
  <div class="skill-info">
    <h2 class="h5 font-weight-bold text-center mb-4">
      {{ title }}
    </h2>

    <!-- Progress bar 1 -->
    <div class="progress mx-auto" :data-value="level">
      <span class="progress-left">
        <span class="progress-bar border-primary" />
      </span>
      <span class="progress-right">
        <span class="progress-bar border-primary" />
      </span>
      <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
        <div class="h2 font-weight-bold">
          {{ level }}<sup class="small">%</sup>
        </div>
      </div>
    </div>
    <!-- END -->

    <div class="row text-center mt-4">
      <div class="col-6 border-right">
        <div class="h4 font-weight-bold mb-0">
          28%
        </div>
        <span class="small text-gray">Last week</span>
      </div>
      <div class="col-6">
        <div class="h4 font-weight-bold mb-0">
          60%
        </div>
        <span class="small text-gray">Last month</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillInfo',

  props: {
    title: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    }
  }
};
</script>
