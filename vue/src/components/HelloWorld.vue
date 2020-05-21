<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <calcite-button>Button</calcite-button>
    <calcite-icon icon="banana"></calcite-icon>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
