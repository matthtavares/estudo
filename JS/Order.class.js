class Order {

  constructor () {
    this.products = new Array();
  }

  addProduct ( product ) {
    if( !(product instanceof Product) ) throw Error('Não é um produto válido!');

    this.products.push(product);
  }

  total () {
    let total = 0;
    for(let p of this.products){
      total += p.price;
    }
    return total;
  }

}
