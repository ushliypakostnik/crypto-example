<template>
  <div class="logo">
    <router-link to="/main">
      <img
      src="../../assets/images/logo.png"
      alt="logo"
      >
    </router-link>
    <div class="logo__text hidden--mobile">
      <h1>REEF Push</h1>
      <h3>{{ $t('layout.logo') }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .logo {
    display: flex;
    flex-direction: row;

    a, img {
      @include size(60px, 60px);

      @include xs {
        @include size(40px, 40px);
      }
    }

    a {
      display: inline-block;
      margin-right: $gutter;

      @include xs {
        margin-right: $gutter / 2;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      color: $colors__primary;
    }

    h1, h3 {
      margin: 0;
    }

    h1 {
      @include text($font-family__sans, $font-size--normal, $font-weight__sans__regular);
    }

    h3 {
      @include text($font-family__sans, $font-size--xsmall, $font-weight__sans__regular);
    }
  }
</style>
