const getInitialCart = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  };
  
  const handleCart = (state = getInitialCart(), action) => {
    const product = action.payload;
    let updatedCart;
  
    switch (action.type) {
        case "ADDITEM": {
            const exist = state.find((item) => item.id === product.id);
            if (exist) {
                // Increase the quantity
                updatedCart = state.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                // Ensure the product has a quantity of 1 when added for the first time
                updatedCart = [...state, { ...product, qty: 1 }];
            }
            break;
        }
  
        case "DELITEM": {
            const exist = state.find((item) => item.id === product.id);
            if (exist) {
                if (exist.qty === 1) {
                    updatedCart = state.filter((item) => item.id !== exist.id);
                } else {
                    updatedCart = state.map((item) =>
                        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
                    );
                }
            } else {
                updatedCart = state; // No change if the item is not found
            }
            break;
        }
  
        default:
            return state;
    }
  
    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  };
  
  export default handleCart;
  