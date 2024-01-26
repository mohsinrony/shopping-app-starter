const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCart(cart);
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        
      </ul>
    </div>
  );
}

export default Cart;