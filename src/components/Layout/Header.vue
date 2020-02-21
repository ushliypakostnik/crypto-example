<template>
  <div class="header">
    <div class="container">
      <Logo />
      <div class="header__right">
        <LangSwitch /><ThemeSwitch />
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Layout/Logo.vue';
  import LangSwitch from '@/components/Elements/LangSwitch.vue';
  import ThemeSwitch from '@/components/Elements/ThemeSwitch.vue';

  export default {
    name: 'Header',

    components: {
      Logo,
      LangSwitch,
      ThemeSwitch,
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .header {
    height: $header__height__not-xs;
    width: 100%;
    position: fixed;
    z-index: $layouts__fixed;
    left: 0;
    right: 0;
    top: 0;
    border-bottom: 1px solid $colors__border;

    @include xs {
      height: $header__height__xs;
    }

    .container {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__right {
      display: inline-block;
    }
  }
</style>
