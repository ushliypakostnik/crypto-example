<template>
  <div class="page404">
    <div class="container">
      <h1>404</h1>
      <h3>{{ $t('page404.text') }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .page404 {
    margin-top: -10vh;

    h1 {
      color: $colors__primary;
      margin: 0;
      @include text($font-family__sans, round($font-size--large * 2.5), $font-weight__sans__bold);


      @include sm {
        @include text($font-family__sans, round($font-size--large * 2), $font-weight__sans__bold);
      }

      @include xs {
        @include text($font-family__sans, $font-size--large, $font-weight__sans__bold);
      }
    }

    h3 {
      margin: 0;
      @include text($font-family__sans, $font-size--large, $font-weight__sans__bold);

      @include gadgets {
        @include text($font-family__sans, $font-size--normal, $font-weight__sans__bold);
      }
    }
  }
</style>
