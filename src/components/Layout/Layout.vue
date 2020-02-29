<template>
  <div class="layout">
    <Header />
    <main
      class="main"
      role="main"
    >
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue';
import Footer from '@/components/Layout/Footer.vue';

export default {
  name: 'Layout',

  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .layout {
    position: relative;
    min-height: 100vh;
    padding-top: $header__height__not-xs + $gutter;
    padding-bottom: $footer__height__not-xs + ($gutter * 2);
    display: flex;
    flex-direction: column;

    @include xs {
      padding-top: $header__height__xs + ($gutter / 2);
      padding-bottom: $footer__height__xs + $gutter;
    }
  }
</style>
