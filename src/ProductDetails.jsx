import { useParams } from "react-router-dom";
import { Product } from "./ProductData";

function ProductDetails() {
  const {id} = useParams();
  
  const product = Product.find(p => p.id === id);

  const handleAddCart = () =>{
    const cartData = localStorage.getItem("cart");
    let existingCart = cartData ? JSON.parse(cartData) : [];
    
    const existingItem = existingCart.find(item => item.id === product.id);

    if(existingItem){
      existingItem.quantity += 1;
    } else {
      existingCart.push({...product, quantity: 1});
    }
    
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  if (!product) {
    return <h2 className="text-2xl font-bold text-center text-red-600">Product not found!</h2>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="h-72 w-72 object-cover mb-4" />
      <p className="text-lg mb-4">{product.desc}</p>
      <p className="text-lg font-bold mb-4"><strong>Price:</strong> ₹{product.price}</p>
      <button onClick={handleAddCart} className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 cursor-pointer transition">Add to Cart</button>
    </div>
  );
}

export default ProductDetails;