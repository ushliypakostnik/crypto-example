<template>
  <div class="form balance">
    <Loading />
    <h4>{{ $t('elements.balance.loader') }}</h4>
    <h4 class="label"><strong>{{ $t('elements.balance.balance') }}:</strong></h4>
    <h3>0 Bip</h3>
  </div>
</template>

<script>
  import Loading from '@/components/Elements/Loading.vue';

  export default {
    name: 'Balance',

    components: {
      Loading,
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .balance {
    text-align: center;

    &.form {
      @include lg {
        padding: $gutter;
      }
    }

    h4 {
      margin-top: $gutter / 2;
      margin-bottom: $gutter / 4;

      + h4 {
        margin-top: $gutter;
      }
    }

    h3 {
      margin: 0;
    }
  }
</style>

