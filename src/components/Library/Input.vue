<template>
  <div
    class="input"
    :class="[ `input--${ skin }`, `input--${ size }`, count && 'input--count' ]"
    :style="{
      width: width,
    }"
  >
    <slot name="label">
      <span v-if="label" class="input__label">{{ label }}</span>
    </slot>
    <span class="input__control">
      <input
        v-model="input"
        type="text"
        :placeholder="placeholder"
        v-hotkey="keymap"
        @focus="onFocusEvent"
        @blur="onBlurEvent"
        @input="onInput"
      >
      <a
        v-if="count"
        href="#"
        class="input__control-plus"
        @mousedown="onControlUp"></a>
      <a
        v-if="count"
        href="#"
        class="input__control-minus"
        @mousedown="onControlDown"></a>
    </span>
  </div>
</template>

<script>
  const TIMEOUT = 100;

  export default {
    name: "Input",

    props: {
      value: {
        type: [Number, String],
        default: "",
        required: false,
      },
      skin: {
        type: String,
        default: "default",
        required: false,
      },
      width: {
        type: String,
        default: "auto",
        required: false,
      },
      size: {
        type: String,
        default: "large",
        required: false,
      },
      label: {
        type: String,
        default: "",
        required: false,
      },
      placeholder: {
        type: String,
        default: "",
        required: false,
      },
      onFocus: {
        type: Function,
        default: () => [],
        required: false,
      },
      onBlur: {
        type: Function,
        default: () => [],
        required: false,
      },
      count: {
        type: Number,
        default: null,
        required: false,
      },
      range: {
        type: Array,
        default: null,
        required: false,
      }
    },

    data() {
      return {
        countValue: this.count,
        focusState: false,
        interval: null,
      };
    },

    mounted() {
      window.addEventListener("mouseup", this.mouseUp);
      window.addEventListener("mousemove", this.mouseMove);
    },

    beforeDestroy() {
      window.removeEventListener("mouseup", this.mouseUp);
      window.removeEventListener("mousemove", this.mouseMove);
    },

    computed: {
      input: {
        get() {
          if (this.count) return this.countValue;
          return this.value;
        },
        set(value) {
          if (!this.count) {
            this.$emit("update:value", value);
          }
        },
      },

      keymap() {
        return {
          up: this.keyUp,
          down: this.keyDown,
        };
      },
    },

    methods: {
      onFocusEvent(event) {
        this.focusState = true;

        if (this.onFocus) {
          this.onFocus(event);
        }
      },

      onBlurEvent(event) {
        this.focusState = false;

        if (this.count) this.validate(event);

        if (this.onBlur) {
          this.onBlur(event);
        }
      },

      isInRange(value) {
        if (+value < this.range[0] || +value > this.range[1]) {
          return false;
        }
        return true;
      },

      isValid(value) {
        if (value === '') return true;
        if (!/^-?\d+\.?\d*$/.test(value)) {
          return false;
        }
        return true;
      },

      validate(event) {
        const value = event.path[0].value;
        if (!this.isValid(value)) {
          this.input = this.count;
          event.path[0].value = this.input;
        } else if (this.isInRange(value)) {
          this.countValue = +value;
          this.$emit("update:count", +value);
        } else if (event.type === 'blur') {
          let v;
          if (+value < this.range[0]) {
            v = this.range[0];
          } else v = this.range[1];
          event.path[0].value = String(v);
          this.countValue = v;
          this.$emit("update:count", this.countValue);
        }
      },

      onInput(event) {
        if (this.count) this.validate(event);
      },

      onControlUp() {
        this.interval = setInterval(() => {
          this.plus();
        }, TIMEOUT);
      },

      onControlDown() {
        this.interval = setInterval(() => {
          this.minus();
        }, TIMEOUT);
      },

      mouseUp(event) {
        if (this.interval) clearInterval(this.interval);
      },

      mouseMove(event) {
        if (event.path && !(event.path[0].classList.contains('input__control-plus') || event.path[0].classList.contains('input__control-minus'))) {
          if (this.interval) clearInterval(this.interval);
        }
      },

      keyUp() {
        if (this.focusState) {
          this.plus();
        }
      },

      keyDown() {
        if (this.focusState) {
          this.minus();
        }
      },

      plus() {
        if (this.countValue < this.range[1]) {
          this.countValue = this.countValue + 1;
          this.$emit("update:count", this.countValue);
        }
      },

      minus() {
        if (this.countValue > this.range[0]) {
          this.countValue = this.countValue - 1;
          this.$emit("update:count", this.countValue);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  $count_controls__size: ($inputs__height / 2) - 1px;
  $count__scale: 0.75;

  .input {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    margin-bottom: $gutter;

    &__label {
      flex-grow: 0;
      white-space: nowrap;
    }

    &__control {
      flex-grow: 1;

      input {
        width: 100%;
      }
    }

    &--large {
      margin-bottom: $gutter;

      .input__label {
        margin-right: $gutter / 2;
        @include text($font-family__sans, $font-size--small, $font-weight__sans__regular);
        line-height: $inputs__height;
      }

      input {
        height: $inputs__height;
        border-radius: $border-radius__small;
        padding: 0 ($gutter / 2);
        line-height: $inputs__height;
      }
    }

    &--count {
      .input__control {
        position: relative;

        &-plus,
        &-minus {
          position: absolute;
          right: 5px;
          @include size(18px, 18px);

          &::after {
            display: block;
            content: "";
            background: url("#{$images__path--root}drop.svg") no-repeat center center;
            background-size: contain;
            transform: scale($count__scale);
            @include size(100%, 100%);
          }

          &:hover {
            &::after {
              background: url("#{$images__path--root}drop_hover.svg") no-repeat center;
              background-size: contain;
            }
          }

          @include gadgets {
            display: none;
          }
        }

        &-plus {
          top: 1px;

          &::after {
            transform: rotate(180deg) scale($count__scale);
          }
        }

        &-minus {
          bottom: 1px;
        }
      }
    }
  }
</style>
