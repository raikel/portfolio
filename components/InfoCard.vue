<template>
  <div class="info-card services-1 shadow text-center">
    <img :src="image" :alt="title" class="mb-5" :style="{height: size + 'px'}">
    <div class="desc">
      <h3 class="mb-5">
        {{ title }}
      </h3>
      <p>{{ info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',

  props: {
    title: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 64
    }
  }
};
</script>

<style>

.info-card:hover {
  background-color: rgba(62, 100, 255, 0.1);
}

</style>
