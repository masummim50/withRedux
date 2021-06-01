import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions";
import SingleProduct from "./SingleProduct";

export default NewPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const dispatch = useDispatch();
  const fetchingProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };
// below is how i would filter data recieved from an api call before setting them in the store. 
  // const filterdata = (data, email)=> {
  //   const filtereddata = data.filter(d=> d.email!= email)
  //   return filterdata;
  // }
  // dispatch(setProducts(filterdata(response.data, email)))

  useEffect(() => {
    fetchingProducts();
  }, []);
  const addedlength = useSelector((state)=> state.selectedProducts.products)

  return (
    <div>
      Number of products added to cart: {addedlength.length}
      <div className="container-fluid">
        <div className='row'>
          <div className='col-md-8'>
            {products.map((product) => (
            <SingleProduct product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};
