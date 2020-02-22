<template>
  <div class="form step2">
    <h3 class="label">2. {{ $t('elements.step2.header') }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'Step2',
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .step2 {
    height: $steps__height;
    opacity: $fade--disabled;

    @include gadgets {
      height: auto;
    }
  }
</style>
