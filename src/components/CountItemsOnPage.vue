<template>
  <div>
    <div class="form-group">
      <label for="itemsOnPage">Количество элементов на странице</label>
      <select id="itemsOnPage" v-model="itemsOnPageLocal" class="custom-select">
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'itemsOnPage',
    event: 'update'
  },
  props: {
    itemsOnPage: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      itemsOnPageLocal: null
    };
  },
  watch: {
    itemsOnPageLocal: {
      handler() {
        this.$emit('update', parseInt(this.itemsOnPageLocal));
      }
    }
  },
  created() {
    this.itemsOnPageLocal = this.itemsOnPage;
  }
};
</script>
