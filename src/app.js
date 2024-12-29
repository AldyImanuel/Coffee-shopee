document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
   items: [
    { id :1, name: 'Robusta Brazil', img:'img/products/1.jpeg', price: 20000 },
    { id :2, name: 'Arabica Blend', img:'img/products/2.jpeg', price: 25000 },
    { id :3, name: 'Robusta Brazil', img:'img/products/3.jpeg', price: 30000 },
     ],
      
  })),
}),
