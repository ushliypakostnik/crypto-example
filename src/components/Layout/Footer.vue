<template>
  <div class="footer">
    <div class="container">© copyright</div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .footer {
    height: $footer__height__not-xs;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;

    @include xs {
      height: $footer__height__xs;
    }

    .container {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      @include text($font-family__sans, $font-size--xsmall, $font-weight__sans__regular);
    }
  }
</style>
