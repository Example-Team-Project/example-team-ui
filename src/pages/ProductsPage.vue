<template>
  <q-page class="full-width">
    <div class="q-pa-sm row">
      <div
        class="col-xs-12 col-sm-4 col-md-3 q-pr-sm q-pb-sm"
        v-for="p in products"
        :key="p.id">

        <q-card
          class="full-height inset-shadow-down product-card"
        >
          <q-img :src="p.image" />
          <q-card-actions>{{ p.name }}</q-card-actions>
          <q-card-actions
            class="product-description"
            v-if="p.shortDescription"
          >
            {{ p.shortDescription }}
          </q-card-actions>
        </q-card>

      </div>

    </div>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import productService from "src/services/productService";

export default defineComponent({
  name: 'ProductsPage',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.products = productService.getProducts();
  }

})
</script>

<style scoped>
.product-card {
  min-width: 200px;
}

.product-description {
  overflow-x: hidden;
  max-height: 100px;
}

</style>
