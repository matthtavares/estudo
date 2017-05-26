class Product {

  constructor ( id, product, price ){
    if( typeof id != "number" ) throw Error('Parâmetro "id" inválido. Apenas números inteiros.');
    if( typeof product != "string" ) throw Error('Parâmetro "product" inválido. Apenas inteiros.');
    if( typeof price != "number" ) throw Error('Parâmetro "price" inválido. Apenas números reais.');

    this.id = id;
    this.product = product;
    this.price = price;
  }

}
