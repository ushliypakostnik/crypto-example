<template>
  <div class="header">
    <div class="container-fluid">
      <Logo />
      <div class="header__right">
        <LangSwitch /><ThemeSwitch />
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Layout/Logo.vue';
  import LangSwitch from '@/components/Layout/LangSwitch.vue';
  import ThemeSwitch from '@/components/Layout/ThemeSwitch.vue';

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

    @include xs {
      height: $header__height__xs;
    }

    .container-fluid {
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
