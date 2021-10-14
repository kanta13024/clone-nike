export const ItemsInfo = [
  {
    id: 0,
    image: [
      "https://guntaro.blog/wp-content/uploads/2021/10/LINE%E7%B5%B5%E6%96%87%E5%AD%97-4.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-4-1-2.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-3-2.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-3-1-1.png",
    ],

    tag: "新着情報",
    name: "ぐんたろ スケートシューズ Lowカット",
    category: "メンズシューズ",
    color: 1,
    price: "12,000",
  },
  {
    id: 1,
    image: [
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-2-3.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-4-1-2.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-4-1-2.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-3-2.png",
    ],

    tag: "新着情報",
    name: "ぐんたろ スケートシューズ Lowカット",
    category: "メンズシューズ",
    color: 1,
    price: "9,000",
  },
  {
    id: 2,
    image: [
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-4-1-2.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-2-3.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-4-1-2.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-4-1-2.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-3-2.png",
    ],
    tag: "新着情報",
    name: "ぐんたろの描いたくまさん",
    category: "くまさん",
    color: 1,
    price: "1,200",
  },
  {
    id: 3,
    image: [
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-3-1-1.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-2-3.png",
      "https://guntaro.blog/wp-content/uploads/2021/10/LINE%E7%B5%B5%E6%96%87%E5%AD%97-4.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-4-1-2.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-3-2.png",
    ],
    tag: "おすすめ商品",
    name: "ぐんたろマークのジャージ",
    category: "ジャージ",
    color: 2,
    price: "1,000",
  },
  {
    id: 4,
    image: [
      "https://guntaro.blog/wp-content/uploads/2021/10/LINE%E7%B5%B5%E6%96%87%E5%AD%97-3.png",
      "https://guntaro.blog/wp-content/uploads/2021/10/LINE%E7%B5%B5%E6%96%87%E5%AD%97-2.png",
      "https://guntaro.blog/wp-content/uploads/2021/10/LINE%E7%B5%B5%E6%96%87%E5%AD%97.png",
      "https://guntaro.blog/wp-content/uploads/2021/10/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A-5.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-9.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/LINE%E7%B5%B5%E6%96%87%E5%AD%97-3-2.png",
    ],
    tag: "おすすめ商品",
    name: "ぐんたろが描いた普通な絵",
    category: "メンズシューズ",
    color: 1,
    price: "1,000",
  },
  {
    id: 5,
    image: [
      "https://guntaro.blog/wp-content/uploads/2021/09/08-1.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/07.png",
    ],
    tag: "イルカさん！",
    name: "ぐんたろが描いたいい感じの絵",
    category: "いるかさん",
    color: 1,
    price: "12,000",
  },
  {
    id: 6,
    image: [
      "https://guntaro.blog/wp-content/uploads/2021/09/06.png",
      "https://guntaro.blog/wp-content/uploads/2021/09/05.png",
    ],
    tag: "うまくね？",
    name: "ぐんたろが描いたおうまさん",
    category: "うま！",
    color: 2,
    price: "10,000",
  },
];

export const getItemsInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ItemsInfo);
    }, 1000);
  });
};
