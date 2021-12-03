app.component('product-display', {
    props: {
        
    },
    template: 
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" :class="{'out-of-stock-img': !inStock}">
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <h2 v-if="onSale">{{sale}}</h2>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover ="updateVariant(index)" 
          class="color-circle" 
          :style="{backgroundColor: variant.color}">
        </div>
        <button 
          class="button" 
          v-on:click="addToCart"
          :class="{disabledButton: !inStock}" 
          :disabled="!inStock">
          Add to Cart
        </button>
      </div>
    </div>
    <review-list :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>
</div>`,
data(){
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ],
        onSale: true,
        reviews: []
    }
},
methods: {
    addToCart(){
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index){
        this.selectedVariant = index
    },
    addReview(review){
        this.reviews.push(review)
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    sale(){
        return this.brand + ' ' + this.product + ' is on sale'
    },

}
})