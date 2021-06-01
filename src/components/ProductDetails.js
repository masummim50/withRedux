import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default ProductDetails = () => {
  const { id } = useParams();
  const selectedProducts = useSelector((state)=> state.selectedProducts.products);
  console.log(selectedProducts)
  return <div>
    number of prducts in cart: {selectedProducts.length}
    
    {
      selectedProducts.map(single => <li>{single}</li>)
    }
  </div>;
};
