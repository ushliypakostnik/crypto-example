<template>
  <div class="form step1">
    <h3>1. {{ $t('elements.step1.header') }}</h3>
    <div class="step1__controls">
      <a
        href="#"
        v-if="!state"
        @click.prevent="state = !state"
      >{{ $t('elements.step1.address') }}</a>
      <span
        v-else="state"
        class="step1__control"
      >{{ $t('elements.step1.address') }}</span>
      <span class="step1__or">{{ $t('elements.step1.or') }}</span>
      <a
        href="#"
        v-if="state"
        @click.prevent="state = !state"
      >{{ $t('elements.step1.deeplink') }}</a>
      <span
        v-else="!state"
        class="step1__control"
      >{{ $t('elements.step1.deeplink') }}</span>
    </div>
    <div class="step1__tabs">
      <transition name="fade" mode="out-in">
        <div
          class="tab tab--1"
          v-if="state"
          key="tab--1"
        >
          <h4 class="step1__text">{{ $t('elements.step1.copy') }}</h4>
          <div class="step1__copy">
            <input
              v-model="input"
              type="text"
            >
            <a href="#"><Copy /></a>
          </div>
          <Button
            skin="transparent-bit"
            link="https://wallet.bip.to/"
          >{{ $t('elements.step1.bit') }}</Button>
          <Button
            skin="transparent-minter"
            link="https://console.minter.network/"
          >{{ $t('elements.step1.minter') }}</Button>
        </div>
        <div
          class="tab tab--2"
          v-else="!state"
          key="tab--2"
        >
          <div class="tab--2__wrapper">
            <div>
              <h4 class="step1__text">{{ $t('elements.step1.ammout') }}</h4>
              <Input
                :count.sync="ammount"
                :range="[1, 10000]"
              />
            </div>
            <img
              src="../../assets/images/code.png"
              alt="logo"
              class="code"
            >
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Copy from '@/components/Icons/Copy.vue';
  import Button from '@/components/Elements/Button.vue';
  import Input from '@/components/Elements/Input.vue';

  export default {
    name: 'Step1',

    components: {
      Copy,
      Button,
      Input,
    },

    data() {
      return {
        state: true,
        input: 'Mxefa2dfa40253e87728ee7f4006fe8f0ffa8b0892',
        ammount: 10,
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-duration;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .step1 {
    height: $steps__height;

    @include xs {
      height: auto;
    }

    &__controls {
      margin-bottom: $gutter;
      @include text($font-family__sans, $font-size--normal, $font-weight__sans__bold);

      a {
        white-space: nowrap;
        @include link-color($colors__link, $colors__link--hover);
      }

      @include not-gadgets {
        white-space: nowrap;
      }
    }

    &__control {
      opacity: 0.5;
      white-space: nowrap;
    }

    &__or {
      font-weight: $font-weight__sans__regular;
      display: inline-block;
      margin-left: $gutter;
      margin-right: $gutter;

      @include md {
        margin-left: $gutter / 2;
        margin-right: $gutter / 2;
      }
    }

    &__text {
      margin-top: 0;
      margin-bottom: $gutter / 2;
    }

    &__copy {
      display: flex;
      margin-bottom: $gutter;

      input {
        border-style: dashed;
        margin-right: $gutter / 2;
      }

      a {
        display: flex;
        align-items: center;
        flex-shrink: 0;

        svg {
          fill: $colors__link;
        }

        &:hover {
          svg {
            fill: $colors__link--hover;
          }
        }
      }
    }

    .button {
      width: 100%;
      margin-bottom: $gutter;
    }

    .tab--2 {
      .tab--2__wrapper {
        display: flex;
        align-items: center;
        padding-top: $gutter;
      }

      @include gadgets {
        display: flex;
        align-items: center;
        justify-content: center;

        .input {
          max-width: 150px;
        }
      }
    }

    .code {
      display: block;
      margin: 0 auto;
      margin-left: $gutter;
    }
  }
</style>
