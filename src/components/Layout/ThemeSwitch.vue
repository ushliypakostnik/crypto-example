<template>
  <ButtonSwitch
    :values="themes"
    :value.sync="t"
  />
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { THEMES } from '@/utils/constants';

import ButtonSwitch from '@/components/Library/ButtonSwitch.vue';

const { mapGetters } = createNamespacedHelpers('utils');

export default {
  name: 'ThemeSwitch',

  components: { ButtonSwitch },

  computed: {
    ...mapGetters({
      theme: 'theme',
    }),

    themes() {
      const themes = THEMES.map((theme) => {
        return theme.name;
      });
      return themes;
    },

    t: {
      get() {
        return this.theme;
      },
      set(value) {
        this.changeTheme(value);
      }
    },
  },

  methods: {
    changeTheme(theme) {
      this.$store.dispatch('utils/changeTheme', theme);
    },
  },
};
</script>
