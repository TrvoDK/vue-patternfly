<template functional>
  <span
    v-bind="data.attrs"
    v-on="listeners"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-if="props.icon || props.count || props.count === 0"
    class="card-pf-aggregate-status-notification"
  >
    <span :is="props.href ? 'a' : 'span'" :href="props.href">
      <pf-icon v-if="props.icon" :name="props.icon"/>
      {{props.count}}
    </span>
  </span>
</template>

<script>
export default {
  name: 'pf-card-notification',

  props: {
    count: [String, Number],
    href: String,
    icon: String,
  },
};
</script>
