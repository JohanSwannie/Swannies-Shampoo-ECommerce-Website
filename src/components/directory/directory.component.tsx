import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories = [
  {
    id: 1,
    title: "Men's Shampoo",
    imageUrl:
      "https://www.bosshunting.com.au/wp-content/uploads/2022/02/REIN-FEATURE-ROCKS-BH-FEATURE-1200x900.jpg",
    route: "shop/men's shampoo",
  },
  {
    id: 2,
    title: "Women's Shampoo",
    imageUrl:
      "https://lyko.com/globalassets/product-images/kerastase-blond-absolu-trio-1015-940-0700_1.jpg?ref=596513",
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
      "https://media.gq.com/photos/5e3dbace8208a40009e9ab47/master/pass/conditioners.jpg",
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