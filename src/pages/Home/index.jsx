import ImageWithText from "../../components/ImageWithText";
import LogoVideo from "../../components/LogoVideo";
import Image from "../../assets/logonotti.png";
import Video from "../../assets/logovideo.mp4";
import Cart from "../../components/Cart";
import { itemList } from "../../datas/itemList";
import GridProduct from "../../components/GridProduct";

function Home() {
  return (
    <div>
      <Cart />
      <LogoVideo video={Video} />
      <GridProduct product={itemList} />
      <ImageWithText
        image={Image}
        part="left"
        title="H1 HEading"
        description="Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes."
      />
      <ImageWithText
        image={Image}
        part="right"
        title="H1 HEading"
        description="Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes."
      />
    </div>
  );
}

export default Home;
