<template>
  <dl
    :class="{
      'dashed-list--expanded-label': expandedLabel,
    }"
    class="dashed-list"
  >
    <template
      v-for="(item, index) in items"
    >
      <h4
        v-if="item.title"
        :key="index"
        class="dashed-list__title"
      >
        {{ item.title }}
      </h4>
      <div
        v-for="({ label, value, secondaryValue }, subIndex) in (item.items || [item])"
        :key="`${index}${subIndex}`"
        class="dashed-list__item"
      >
        <dt class="dashed-list__section dashed-list__section--label">
          <span
            class="dashed-list__text"
            v-html="label"
          />
          <div class="dashed-list__dashes" />
        </dt>
        <dd class="dashed-list__section">
          <span
            class="dashed-list__text"
            v-html="value"
          />
        </dd>
        <dd
          v-if="secondaryValue"
          class="dashed-list__section dashed-list__section--secondary"
        >
          <div class="dashed-list__dashes" />
          <span
            class="dashed-list__text"
            v-html="secondaryValue"
          />
        </dd>
      </div>
    </template>
  </dl>
</template>

<script>
export default {
  name: 'HdDashedList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    expandedLabel: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'homeday-blocks/src/styles/mixins.scss';

.dashed-list {
  $root: &;
  background-color: inherit;

  &__item {
    display: flex;
    flex-flow: wrap;
    margin-bottom: $stack-s;
  }

  &__title {
    margin-top: $stack-l;
    margin-bottom: $stack-s;
  }

  &__section {
    display: flex;
    align-items: flex-end;

    &--label {
      width: 100%;
      color: getShade($quaternary-color, 80);

      @media (min-width: $break-tablet) {
        width: 40%;
      }

      #{$root}__text {
        @media (min-width: $break-tablet) {
          max-width: 60%;
        }
      }

      #{$root}__dashes {
        display: none;

        @media (min-width: $break-tablet) {
          display: inline;
        }
      }
    }
    &--secondary {
      flex: 1;
      justify-content: flex-end;
    }
  }

  &--expanded-label {
    #{$root}__section--label {
      width: auto;

      #{$root}__text {
        max-width: unset;
      }
    }
  }

  &__text {
    background-color: inherit;
  }

  &__dashes {
    height: 2px;
    flex: 1;
    background-image: url('~homeday-blocks/src/assets/patterns/dash-pattern-horizontal.svg');
    background-size: contain;
    margin-bottom: .4em;
  }
}
</style>
