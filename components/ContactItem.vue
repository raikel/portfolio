<template>
  <div class="align-self-stretch box text-center p-4 shadow">
    <div class="icon d-flex align-items-center justify-content-center">
      <span :class="icon" />
    </div>
    <div>
      <h3 class="mb-4">
        {{ title }}
      </h3>
      <p v-if="link">
        <a :href="link">{{ info }}</a>
      </p>
      <p v-else>
        {{ info }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactItem',

  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    }
  }
};

</script>
