import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Men's Shampoo",
    imageUrl:
      "https://img.freepik.com/premium-photo/two-brown-beige-plastic-shampoo-bottles-floating-studio-background-3d-render_723234-1011.jpg",
    route: "shop/men's shampoo",
  },
  {
    id: 2,
    title: "Women's Shampoo",
    imageUrl: "https://m.media-amazon.com/images/I/41Cxpmgs3JL._AC_SY350_.jpg",
    route: "shop/women's shampoo",
  },
  {
    id: 3,
    title: "Children's Shampoo",
    imageUrl:
      "https://i.kym-cdn.com/news_feeds/icons/mobile/000/040/263/788.jpg",
    route: "shop/children's shampoo",
  },
  {
    id: 4,
    title: "Hair Conditioners",
    imageUrl:
      "https://images.askmen.com/1080x540/2021/02/05-013537-best_beard_conditioners.jpg",
    route: "shop/hair conditioners",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
