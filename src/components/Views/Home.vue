<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout.vue';

export default {
  name: 'Home',

  components: {
    Layout,
  },
};
</script>
