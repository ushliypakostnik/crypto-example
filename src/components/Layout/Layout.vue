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
    padding-bottom: $footer__height__not-xs + $gutter;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include xs {
      padding-top: $header__height__xs + $gutter;
      padding-bottom: $footer__height__xs + $gutter;
    }
  }

  .main {
    @include not-gadgets {
      $height: $steps__height + $header__height__not-xs + $footer__height__not-xs + 150px;
      @media (min-height: $height) {
        margin-top: -15vh;
      }
    }
  }
</style>
