class ProductManager {
    constructor() {
      this.products = [];
    }
  
    // Método para agregar un producto al arreglo de productos.
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios.
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Error: Todos los campos son obligatorios.");
        return;
      }
  
      // Validar que el campo "code" no se repita.
      if (this.products.some((product) => product.code === code)) {
        console.log(`Error: Ya existe un producto con el código ${code}.`);
        return;
      }
  
      // Generar un ID automático para el producto.
      const productId = this.generateProductId();
  
      // Crear un objeto que representa un producto.
      const product = {
        productId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      // Agregar el producto al arreglo de productos.
      this.products.push(product);
  
      // Imprimir un mensaje de éxito.
      console.log(`Producto '${title}' añadido con éxito. (ID: ${productId})`);
    }
  
    // Método para generar un ID automático para un producto.
    generateProductId() {
      return Date.now(); 
    }
  
    // Método para obtener todos los productos.
    getProducts() {
      return this.products;
    }
  
    // Método para obtener un producto por su ID.
    getProductById(productId) {
      const product = this.products.find((p) => p.productId === productId);
      if (product) {
        return product;
      } else {
        console.log(`Error: Producto con ID ${productId} no encontrado.`);
        return null;
      }
    }
  }
  
 
  const productManager = new ProductManager();
  
  // Agregar productos 
  productManager.addProduct("Wisky", "12 años", 5000, "img1-jpg", "w1", 50);
  productManager.addProduct("Cerveza", "SOLERA", 4000, "img2-jpg", "c1", 30);
  
  // Obtener todos los productos.
  const allProducts = productManager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  // Obtener un producto por su ID.
  const productById = productManager.getProductById(allProducts[0].productId);
  if (productById) {
    console.log("Producto por ID:", productById);
  }
  
  // Intentar agregar un producto con un código repetido.
  productManager.addProduct("Ron", "Santa Teresa", 20000, "img3-jpg", "w1", 40);
  
  // Intentar agregar un producto sin todos los campos obligatorios.
  productManager.addProduct("Anis", "", 2900, "img-jpg", "a4", 20);
  