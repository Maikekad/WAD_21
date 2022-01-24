<template>
  <div class="products">
    <h2>Our Products page</h2>
    <product_compo_1></product_compo_1>
    <button v-on:click="IncreasePrice">Increase price</button>
    <button v-on:click="DecreasePrice">Decrease price</button>
    <product_compo_2> </product_compo_2>
  </div>
</template>
<script>
//import product_compo_1 from "@/components/product_compo_1.vue";
//import product_compo_2 from "@/components/product_compo_2.vue";
export default {
  methods: {
    IncreasePrice: function () {
      this.$store.commit("IncreasePrice");
    },
    DecreasePrice: function () {
      this.$store.commit("DecreasePrice");
    },
  },
};
</script>
