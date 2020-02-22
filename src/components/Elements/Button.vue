<template>
  <a
    v-if="link"
    :href="link"
    target="_blank"
    rel="nofollow noopener"
    class="button"
    :class="`button--${ skin }`"
    :disabled="disabled"
    @click="$emit('onClick')"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </a>
  <button
    v-else
    type="button"
    class="button"
    :class="`button--${ skin }`"
    :disabled="disabled"
    @click="$emit('onClick')"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "Button",

    props: {
      link: {
        type: String,
        default: null,
        required: false,
      },
      skin: {
        type: String,
        default: "primary",
        required: true,
      },
      onClick: {
        type: Function,
        default: () => [],
        required: false,
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false,
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .button {
    display: inline-block;
    text-align: center;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: $buttons__border-radius;
    padding: $btn_padding_vertical_base $btn_padding_horizontal_base;
    @include text($font-family__sans, $font-size--small, $font-weight__sans__bold);

    @include xs {
      @include text($font-family__sans, $font-size--xsmall, $font-weight__sans__bold);
    }

    &--primary {
      @include btn-color($colors__text, $colors__primary);

      .icon path {
        fill: $colors__text;
      }
    }

    &--transparent {
      @include btn-transparent-color($colors__primary);
    }

    &--transparent-bit {
      @include btn-transparent-color($colors__bit);
    }

    &--transparent-minter {
      @include btn-transparent-color($colors__minter);
    }

    &--disabled,
    &[disabled] {
      cursor: unset;
      opacity: $fade--disabled;
      pointer-events: none;
    }

    .icon {
      position: absolute;
      top: 13px;
      left: $gutter / 2;
    }
  }
</style>
