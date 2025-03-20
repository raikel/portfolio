<template>
  <div
    class="skill-chip bg-white shadow"
    :style="{borderRadius: size/2 + 'px'}"
  >
    <div :style="{width: size + 'px', height: size + 'px'}">
      <img :src="image" :alt="title" :style="{'padding': size/4 + 'px'}">
    </div>
    <div :style="{'padding-right': size/2 + 'px'}">
      <div class="skill-title font-weight-bold" style="color: #000">
        {{ title }}
      </div>
      <div class="skill-subtitle small text-gray">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SkillChip',

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 96
    }
  }
};

</script>

<style>

.skill-chip {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
}

.skill-chip img {
  width: 100%;
  height: 100%;
}

@media (max-width: 767.98px) {
  .skill-chip .skill-subtitle {
    display: none;
  }
}

</style>
