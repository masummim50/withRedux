import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectedProducts } from "../redux/actions";

export default SingleProduct = (props) => {
  const { id, title, image } = props.product;
  const dispatch = useDispatch()

  // don't add to list if already exist
  // const selectecproductsfromstate = useSelector((state)=> state.selectedProducts.products);
  // const checkifexist = (selectecproductsfromstate, id)=> {
  // this function and then go into the state and check if an item with this id already exist. if not then complete dispatching the action else return false.  
  // }

  const buttonStyle = {
    background:'red',
    color:'white',
    border:'none',
    padding:'10px 15px'
  }
  return (
    
      <div style={{ boxShadow:'0px 1px 3px grey', margin: "10px", padding: "15px" }}>
        <img style={{ width: "50px" }} src={image} />
        <br/>
        {title}<br/>
        <button style={buttonStyle} onClick={()=>dispatch(selectedProducts(title))}>Add to cart</button>
      </div>
  );
};
