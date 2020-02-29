<template>
  <div class="button-switch">
    <Button
      :skin="disabled ? 'light' : state !== values[1] ? 'primary' : 'light'"
      :padding="8"
      @onClick="onClick"
    >{{ values[1] }}</Button>
    <Button
      :skin="disabled ? 'light' : state !== values[0] ? 'primary' : 'light'"
      :padding="8"
      @onClick="onClick"
    >{{ values[0] }}</Button>
  </div>
</template>

<script>
  import Button from '@/components/Library/Button.vue';

  export default {
    name: "ButtonSwitch",

    components: {
      Button,
    },

    props: {
      values: {
        type: Array,
        default: () => []
      },
      value: {
        type: [Boolean, String],
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    },

    data() {
      return {
        state:
          this.value || this.value == false ? this.value : this.values[0]
      };
    },

    watch: {
      value(val) {
        this.state = val;
      }
    },

    computed: {
      choize: {
        get() {
          return this.value;
        },
        set(value) {
          if (!this.disabled) this.$emit("update:value", value);
        }
      }
    },

    methods: {
      onClick() {
        if (this.state === this.values[0]) {
          this.state = this.values[1];
        } else this.state = this.values[0];
        this.choize = this.state;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .button-switch {
    display: inline-block;

    & + .button-switch {
      margin-left: $gutter;

      @include xs {
        margin-left: $gutter / 2;
      }
    }
  }

  .button {
    padding: ($gutter / 4) ($gutter / 2);
    @include text($font-family__sans, $font-size--xsmall, $font-weight__sans__bold);

    @include gadgets {
      @include text($font-family__sans, round($font-size--xsmall * 0.9), $font-weight__sans__bold);
    }

    @include min {
      padding: ($gutter / 4) 12px;
      @include text($font-family__sans, round($font-size--xsmall * 0.75), $font-weight__sans__bold);
    }

    &-switch {
      button + button {
        margin-left: 0;
      }

      .button {
        &:first-child {
          border-radius: $border-radius__large 0 0 $border-radius__large;
        }
        &:last-child {
          border-radius: 0 $border-radius__large $border-radius__large 0;
        }
      }
    }

    &--primary {
      pointer-events: auto;
      cursor: pointer;
    }

    &--light {
      pointer-events: none;
    }
  }
</style>
