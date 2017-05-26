## Classes

### Product & Order

Usando as classes [Product](Product.class.js) e [Order](Order.class.js).

```
var pencil = new Product(1, "Lápis", 1.5); // Cria um novo produto
var pen = new Product(2, "Caneta", 3); // Cria um novo produto

order = new Order(); // Cria um novo pedido
order.addProduct(pencil); // Adiciona o produto **pencil**
order.addProduct(pen); // Adiciona o produto **pen**
```
