import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../Redux/WishlistSlice/WishlistSlice";

export default function useWishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const toggleWishlist = (product) => {
    const exists = wishlistItems.find(
      (item) => item.product_id === product.product_id
    );

    if (exists) {
      dispatch(removeFromWishlist(exists.id));

      return {
        added: false,
        message: `${product.title} removed from wishlist`,
      };
    }

    dispatch(
      addToWishlist({
        id: crypto.randomUUID(),
        product_id: product.product_id,
        title: product.title,
        image: product.image_url,
        price: product.price_range?.min || product.price_range?.max,
      })
    );

    return {
      added: true,
      message: `${product.title} is added to wishlist`,
    };
  };

  const isWishlisted = (productId) =>
    wishlistItems.some((item) => item.product_id === productId);

  return {
    toggleWishlist,
    isWishlisted,
  };
}