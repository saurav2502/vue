import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {
        name: 'saurav',
        price: 120
      },
      {
        name: 'monu',
        price: '100'
      },
      {
        name: 'deepak',
        price: 130
      }
    ]
  },
  getters: {
    salesProduct: state => {
      var sales = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      })
      return sales
    }
  }
})
