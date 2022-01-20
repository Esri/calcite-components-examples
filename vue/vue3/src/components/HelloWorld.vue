<template>
  <div class="hello">
    <h1>{{ msg }} <calcite-icon icon="banana"></calcite-icon></h1>
    <calcite-date-picker></calcite-date-picker>
    <calcite-button>Button</calcite-button>
  </div>
</template>

<script>
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-date-picker';
import '@esri/calcite-components/dist/components/calcite-icon';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style src="@esri/calcite-components/dist/calcite/calcite.css"></style>
