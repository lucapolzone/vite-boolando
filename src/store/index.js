import { reactive } from 'vue'

export const store = reactive({
  uri: 'http://localhost:3000/cards',

  modal: {
    show: false,
    frontImg: '', //devo usare funzione per path relativo
    fashionBrand: '',
    modelArticle: '',
    discountedPr: '',
    totalPr: ''
  }
    

})