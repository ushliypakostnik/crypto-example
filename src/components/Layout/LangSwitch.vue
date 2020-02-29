<template>
  <ButtonSwitch
    :values="languages"
    :value.sync="l"
  />
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { LANGUAGES } from '@/utils/constants';

import ButtonSwitch from '@/components/Library/ButtonSwitch.vue';

const { mapGetters } = createNamespacedHelpers('utils');

export default {
  name: 'LangSwitch',

  components: { ButtonSwitch },

  computed: {
    ...mapGetters({
      language: 'language',
    }),

    l: {
      get() {
        return this.language;
      },
      set(value) {
        this.changeLanguage(value);
      }
    },

    languages() {
      const languages = LANGUAGES.map((language) => {
        return language.name;
      });
      return languages;
    },
  },

  methods: {
    changeLanguage(language) {
      this.$i18n.i18next.changeLanguage(language);
      this.$store.dispatch('utils/changeLanguage', language);
    },
  },
};
</script>
