<template>
  <div class="container">
    <MainForm />
  </div>
</template>

<script>
import MainForm from '@/components/Views/Main/MainForm';

export default {
  name: 'Main',

  components: {
    MainForm,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

</style>
