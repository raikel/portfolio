<template>
  <div class="progress-wrap ftco-animate">
    <h3>{{ title }}</h3>
    <div class="progress">
      <div
        class="progress-bar color-1"
        role="progressbar"
        :aria-valuenow="level"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{width: level + '%'}"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'SkillBar',

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
