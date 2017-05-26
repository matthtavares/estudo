class Order {

  constructor () {
    this.products = new Array(); // Variável que armazenará os produtos
  }

  /**
   * Este método serve para adicionar produtos
   * ao pedido.
   *
   * @param product Product
   */
  addProduct ( product ) {
    if( !(product instanceof Product) ) throw Error('Não é um produto válido!');

    this.products.push(product); // Adiciona o produto ao array
  }

  /**
   * Este método retorna o valor do pedido.
   */
  total () {
    let total = 0;
    // Percorre o array de produtos
    for(let p of this.products){
      total += p.price;
    }
    return total;
  }

}
