<template>
  <div class="form form--main">

    <div class="form--main__block">
      <h3 class="label">{{ $t('views.main.header1') }}</h3>
      <h4 class="form--main__text">{{ $t('views.main.copy') }}</h4>
      <div class="form--main__copy">
        <input
          v-model="input"
          type="text"
        >
        <a href="#"><Copy /></a>
      </div>
      <Button
        skin="bit"
        link="https://wallet.bip.to/"
      >
        <span class="hidden--mobile">
          {{ $t('views.main.bit.part1') }}
        </span>
        {{ $t('views.main.bit.part2') }}
      </Button>
      <Button
        skin="minter"
        link="https://console.minter.network/"
      >
        <span class="hidden--mobile">
          {{ $t('views.main.minter.part1') }}
        </span>
        {{ $t('views.main.minter.part2') }}
      </Button>
    </div>

    <div class="form--main__block hidden--mobile">
      <h3 class="label">{{ $t('views.main.header2') }}</h3>

      <div class="form--main__qr">
        <div class="form--main__ammount">
          <h4 class="form--main__text">
            {{ $t('views.main.ammount') }}
          </h4>
          <Input
            :count.sync="ammount"
            :range="[1, 10000]"
          />
        </div>
        <img
          src="../../../assets/images/code.png"
          alt="logo"
          class="form--main__code"
        >
      </div>

      <Button
        skin="primary"
        link=""
      >
        {{ $t('views.main.qr') }}
      </Button>
    </div>

  </div>
</template>

<script>
  import Copy from '@/components/Icons/Copy.vue';
  import Button from '@/components/Library/Button.vue';
  import Input from '@/components/Library/Input.vue';

  export default {
    name: 'MainForm',

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

  .form {
    padding: $gutter;
    border-radius: $border-radius__large;

    h3 {
      margin-top: 0;
    }
  }

  .form--main {
    @include not-xs {
      max-width: $form--main__width;
      margin: 0 auto;
    }

    &__block {
      &:not(:last-child) {
        margin-bottom: $gutter * 2/3;
      }
    }

    &__qr {
      display: flex;
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

    &__ammount {
      max-width: 150px;
    }

    &__code {
      display: block;
      margin-left: auto;
      margin-bottom: $gutter / 2;

      @include xs {
        @include size(140px, 140px);
      }

      @include min {
        @include size(130px, 130px);
      }
    }

    .button {
      width: 100%;
      margin-bottom: $gutter / 2;
    }
  }
</style>
