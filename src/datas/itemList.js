import proto_white from "../assets/products/proto_white.png";
import proto_back from "../assets/products/proto_back.png";
import nobuf_black_back from "../assets/products/nobuf_black_back.png";
import nobuf_black_empty from "../assets/products/nobuf_black_empty.png";
import nobuf_black_full from "../assets/products/nobuf_black_full.png";
import nobuf_white from "../assets/products/nobuf_white-full.png";
import nobuf_white_back from "../assets/products/nobuf_white_back.png";
import nobuf_white_empty from "../assets/products/nobuf_white_empty.png";

export const itemList = [
  {
    name: "PROTO",
    collection: "nobu",
    id: "proto",
    price: "19,99",
    description:
      'Exprimez-vous avec la Collection "NOBU". Nos t-shirts affichent un design percutant d\'un œil pleurant avec une larme dans le dos. Symbole de sensibilité, chaque t-shirt reflète vos émotions et votre style unique. <br/> <br/> Taille normal. (Si tu portes habituellement du M, commande du M)',
    cover: [proto_white, proto_back],
    s_stock_w: 4,
    m_stock_w: 0,
    l_stock_w: 4,
    xl_stock_w: 2,
    color: 0,
    design: 0,
    size: 3,
    isSpecialOffer: false,
  },
  {
    name: "NOBU F",
    collection: "nobu",
    id: "nobuf",
    price: "29,99",
    description:
      'Exprimez-vous avec la Collection "NOBU". Nos t-shirts affichent un design percutant d\'un œil pleurant avec une larme dans le dos. Symbole de sensibilité, chaque t-shirt reflète vos émotions et votre style unique. <br/> <br/> <div style="font-weight: bold;">Taille normal. (Si tu portes habituellement du M, commande du M)</div>',
    cover: [
      nobuf_white,
      nobuf_white_back,
      nobuf_black_full,
      nobuf_black_back,
      nobuf_white_empty,
      nobuf_white_back,
      nobuf_black_empty,
      nobuf_black_back,
    ],
    white_empty_cover: "",
    white_cover: "",
    black_empty_cover: "",
    black_cover: "",
    white_back_cover: "",
    black_back_cover: "",
    s_stock_w: 5,
    m_stock_w: 14,
    l_stock_w: 7,
    s_stock_b: 2,
    m_stock_b: 14,
    l_stock_b: 7,
    color: 2,
    design: 1,
    size: 2,
  },
  {
    name: "NOBU B",
    collection: "nobu",
    id: "nobub",
    price: "29,99",
    description:
      'Exprimez-vous avec la Collection "NOBU". Nos t-shirts affichent un design percutant d\'un œil pleurant avec une larme dans le dos. Symbole de sensibilité, chaque t-shirt reflète vos émotions et votre style unique. <br/> <br/> Taille normal. (Si tu portes habituellement du M, commande du M)',

    cover: [
      nobuf_white,
      nobuf_white_back,
      nobuf_black_full,
      nobuf_black_back,
      nobuf_white_empty,
      nobuf_white_back,
      nobuf_black_empty,
      nobuf_black_back,
    ],
    white_empty_cover: "",
    white_cover: "",
    black_empty_cover: "",
    black_cover: "",
    white_back_cover: "",
    black_back_cover: "",
    s_stock_w: 5,
    m_stock_w: 14,
    l_stock_w: 7,
    s_stock_b: 2,
    m_stock_b: 14,
    l_stock_b: 7,
    color: 2,
    design: 1,
    size: 2,
  },
];
