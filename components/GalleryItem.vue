<template>
  <div
    class="project img shadow ftco-animate d-flex justify-content-center align-items-center"
    :style="{'background-image': `url(${image})`}"
  >
    <div class="overlay" />
    <div class="text text-center p-4">
      <h3><a href="#">{{ title }}</a></h3>
      <span>{{ info }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GalleryItem',

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
    }
  }
};

</script>
