<template>
  <div class="container">
    <div class="grid">
      <div>
        <Step1 />
      </div>
      <div class="center">
        <Balance />
      </div>
      <div>
        <Step2 />
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from '@/components/Elements/Step1.vue';
import Balance from '@/components/Elements/Balance.vue';
import Step2 from '@/components/Elements/Step2.vue';

export default {
  name: 'Main',

  components: {
    Step1,
    Balance,
    Step2,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .grid {
    @include adaptive-grid("main");
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
