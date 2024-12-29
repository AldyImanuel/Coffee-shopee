document.addEventListener('alpine:init', () => {
  Alpine.data('dropdown', () => ({
      open: false,
    items: [
      {id :1, Name: 'Robusta Brazil', img:'img/products/1.jpg', price: 20000}
      {id :1, Name: 'Arabica Blend', img:'img/products/1.jpg', price: 20000}
      {id :1, Name: 'Robusta Brazil', img:'img/products/1.jpg', price: 20000}
    ],
      }
  }))
})