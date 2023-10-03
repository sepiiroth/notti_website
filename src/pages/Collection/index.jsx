import GridProduct from "../../components/GridProduct";
import { itemList } from "../../datas/itemList";
import Cart from "../../components/Cart";
function Collection() {
  return (
    <div>
      <Cart />
      <GridProduct product={itemList} />
    </div>
  );
}

export default Collection;
