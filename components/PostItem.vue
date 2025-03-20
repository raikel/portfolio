<template>
  <div class="blog-entry shadow justify-content-end">
    <a href="#" class="block-20" :style="{'background-image': `url(${image})`}" />
    <div class="text float-right d-block p-4">
      <h3 class="heading">
        <a href="#">{{ title }}</a>
      </h3>
      <div v-if="date" class="d-flex align-items-center mb-3 meta">
        <p class="mb-0">
          <span class="mr-2">{{ date }}</span>
        </p>
      </div>
      <p class="mb-0">
        {{ info }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostItem',

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
    date: {
      type: String,
      default: ''
    }
  }
};

</script>
