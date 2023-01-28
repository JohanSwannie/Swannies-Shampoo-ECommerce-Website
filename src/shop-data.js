const SHOP_DATA = [
  {
    title: "men's shampoo",
    items: [
      {
        id: 1,
        name: "Head & Shoulders",
        imageUrl: "https://i.ebayimg.com/images/g/GvwAAOSw68hhBlBZ/s-l1600.jpg",
        price: 12,
      },
      {
        id: 2,
        name: "Tea Tree",
        imageUrl:
          "https://makeupandbeauty.com/wp-content/uploads/2013/10/Paul+Mitchell+Tea+Tree+Special+Shampoo+Review.jpg",
        price: 15,
      },
      {
        id: 3,
        name: "Every Man Jack",
        imageUrl:
          "https://theadultman.com/wp-content/uploads/2021/07/everyman-jack-review-body-wash-and-shower-essentials.jpg",
        price: 18,
      },
      {
        id: 4,
        name: "Dove Men Care",
        imageUrl: "https://m.media-amazon.com/images/I/5150qAsXQkL.jpg",
        price: 14,
      },
      {
        id: 5,
        name: "Rahua Classic",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0067/5266/5673/articles/Fabian_Favorites_800x.jpg?v=1660736960",
        price: 17,
      },
      {
        id: 6,
        name: "Evo Gluttany",
        imageUrl:
          "https://i.ebayimg.com/thumbs/images/g/P7UAAOSwgqBhgLdk/s-l300.jpg",
        price: 11,
      },
      {
        id: 7,
        name: "Hims",
        imageUrl:
          "https://www.mensjournal.com/wp-content/uploads/2022/12/Palmetto-Shampoo.jpg?w=900&h=506&crop=1&quality=86&strip=all",
        price: 18,
      },
      {
        id: 8,
        name: "Oribe Signature",
        imageUrl:
          "https://www.oribe.com/oribestorefront/medias/1200Wx1200H-400299.jpg?context=bWFzdGVyfGltYWdlc3w1MTQxODh8aW1hZ2UvanBlZ3xoNWYvaDJhLzg5NjAyMTk1MTI4NjIvMTIwMFd4MTIwMEhfNDAwMjk5LmpwZ3w1ZWIwMTQzNTU4OTkwNDcxOTM3MTg5Njg5N2FhY2U2ZDgxMTZmZDdjNTY1YWUyZGM4YzA0NTI1ZTFiZTMyYjY4",
        price: 14,
      },
      {
        id: 9,
        name: "Garnier Fructis",
        imageUrl: "https://pbs.twimg.com/media/D0xPCjqWwAI0cFu.jpg",
        price: 13,
      },
      {
        id: 10,
        name: "Nioxin",
        imageUrl:
          "https://www.nioxin.com/m/About_Hair_Loss/Hair_Loss_In_Men/Main/hair-loss-in-men-2_d.jpg",
        price: 21,
      },
      {
        id: 11,
        name: "Olaplex",
        imageUrl:
          "https://media.glamour.com/photos/62d844137c0b6bc0f5e69923/3:2/w_2571,h_1714,c_limit/best%20olaplex%20products.png",
        price: 20,
      },
      {
        id: 12,
        name: "Ishga",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/2551/7732/products/Screenshot2020-11-17at11.09.15_0ffb25de-24d1-43b3-95e1-0fff79ffc385_2048x.png?v=1669648971",
        price: 13,
      },
    ],
  },
  {
    title: "women's shampoo",
    items: [
      {
        id: 13,
        name: "Suave Professionals",
        imageUrl:
          "https://u-mercari-images.mercdn.net/photos/m13870432759_1.jpg?1660519221",
        price: 38,
      },
      {
        id: 14,
        name: "Dove",
        imageUrl: "https://i.ebayimg.com/images/g/90sAAOSwpbVbW1m1/s-l500.jpg",
        price: 28,
      },
      {
        id: 15,
        name: "Tresemme Pro Care Curls",
        imageUrl:
          "https://cdn.sanity.io/images/4nopozul/tresemme-staging-us/9540c997670238a501215e35c657fb08e0cf010a-1200x1200.jpg?w=800&h=800&fit=fill&auto=format&q=80&bg=fff",
        price: 36,
      },
      {
        id: 16,
        name: "Nexxus",
        imageUrl:
          "https://m.media-amazon.com/images/I/41Xe+-UeizL._AC_SY350_.jpg",
        price: 41,
      },
      {
        id: 17,
        name: "EV Earth Vibes",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0006/6781/1906/articles/Earth_Vibes_Argan_Oil_Shampoo_Conditioner_Set_4_1024x1024.jpg?v=1539216455",
        price: 32,
      },
      {
        id: 18,
        name: "Loccitane",
        imageUrl:
          "https://i.ebayimg.com/thumbs/images/g/o4MAAOSwjFdjs1z6/s-l300.jpg",
        price: 44,
      },
      {
        id: 19,
        name: "Redken",
        imageUrl:
          "https://www.redken.com/~/media/websites/brands/redken/consumer/images/blog/how-to-choose-the-best-shampoo/thumb.jpg",
        price: 22,
      },
      {
        id: 20,
        name: "Bondi Boost",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1588/9573/products/320172-33017.jpg?v=1659415602",
        price: 31,
      },
      {
        id: 21,
        name: "Goldwell",
        imageUrl:
          "https://images.ctfassets.net/pi28xy1s107o/15PRMOcAKwGcvYED5BtzSh/52459baefe7e05c403eda0abee68c62c/SEO_Guides_Templates__1440x1200___78_.jpg",
        price: 20,
      },
      {
        id: 22,
        name: "Kerastase",
        imageUrl:
          "https://www.kerastase-usa.com/on/demandware.static/-/Sites-kerastase-master-catalog/default/dw41e91479/2022/chroma-absolu/kerastase-chroma-absolu-color-correction-hair-care-set.jpg",
        price: 26,
      },
      {
        id: 23,
        name: "Alterna",
        imageUrl:
          "https://embed-ssl.wistia.com/deliveries/f8f5ce8facab1637a390daf180f56571.webp?image_crop_resized=1280x720",
        price: 29,
      },
      {
        id: 24,
        name: "Shu Uemura",
        imageUrl:
          "https://www.shuuemuraartofhair-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-shu-master-catalog/default/dwaae0f31e/2022/yubi-blonde/shu-uemura-art-of-hair-yubi-blonde-group3.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70",
        price: 33,
      },
    ],
  },
  {
    title: "children's shampoo",
    items: [
      {
        id: 25,
        name: "Spongebob Suave",
        imageUrl:
          "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/9/1/91kmTLSu9SS._SL1500_.jpg",
        price: 8,
      },
      {
        id: 26,
        name: "Fairy Tales",
        imageUrl:
          "https://eightymphmom.com/wp-content/uploads/2011/09/fairytales.jpg",
        price: 11,
      },
      {
        id: 27,
        name: "Teenology",
        imageUrl:
          "https://i.pinimg.com/originals/d1/22/c8/d122c820efa265dba6f9e19f6c858e84.png",
        price: 10,
      },
      {
        id: 28,
        name: "Fresh Monster",
        imageUrl:
          "https://eightymphmom.com/wp-content/uploads/2016/05/Fresh-Monster-Review-1.jpg",
        price: 7,
      },
      {
        id: 29,
        name: "J Organic Solutions",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0502/1473/1933/products/kids-shampoo-conditioner-set-582619.jpg?v=1612074437",
        price: 12,
      },
      {
        id: 30,
        name: "Mustela",
        imageUrl:
          "https://www.mustela.com.au/sites/refacto_australie/files/styles/image_teaser_produit_/public/2022-08/2020.12_FANFARE_MUSTELA_ROSA_1725.jpg?itok=GucEb4OT",
        price: 8,
      },
      {
        id: 31,
        name: "Baja Baby",
        imageUrl:
          "https://www.mustela.com.au/sites/refacto_australie/files/styles/image_teaser_produit_/public/2022-08/2020.12_FANFARE_MUSTELA_ROSA_1725.jpg?itok=GucEb4OT",
        price: 9,
      },
      {
        id: 32,
        name: "Mango & Carrot",
        imageUrl:
          "https://nailshining.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBclNuIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c7615a6931df475b26e3b41d1f105743aebda61d/715QAchfQEL.jpg",
        price: 7,
      },
      {
        id: 33,
        name: "Kids Coconut Chamomile",
        imageUrl:
          "http://cdn.shopify.com/s/files/1/0041/0471/6386/products/Alaffia_1361coconutChamomile_1200x1200.jpg?v=1654760181",
        price: 10,
      },
      {
        id: 34,
        name: "Hello Bello",
        imageUrl:
          "https://images.chickadvisor.com/item/126268/375/i/hello-bello-extra-gentle-shampoo-and-body-wash.jpg",
        price: 13,
      },
      {
        id: 35,
        name: "Swim 3-in-1",
        imageUrl:
          "https://target.scene7.com/is/image/Target/GUEST_9c319b9c-4054-4910-be7a-a01516f02a23?fmt=webp&wid=250&hei=250&qlt=80",
        price: 6,
      },
      {
        id: 36,
        name: "Johnson's Head-to-toe",
        imageUrl:
          "https://www.mydadthechemist.com/img/2018/09/johnsons-head-to-toe-baby-shampoo-sulfate-free-review.jpg",
        price: 11,
      },
    ],
  },
  {
    title: "hair conditioners",
    items: [
      {
        id: 37,
        name: "Verb Ghost",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0045/9790/7545/products/FinalPDP_Frontal_GhostConditioner_12oz_2c0c8d02-bf54-4977-bbe0-6cf05bfad525_1100x.jpg?v=1672853153",
        price: 23,
      },
      {
        id: 38,
        name: "Iles Formula",
        imageUrl: "https://i.ebayimg.com/images/g/1D8AAOSwO-1iqNLS/s-l500.jpg",
        price: 29,
      },
      {
        id: 39,
        name: "Sacha Juan",
        imageUrl: "https://cdn.addsauce.com/m/md/COY9Eb_okkp.jpg",
        price: 31,
      },
      {
        id: 40,
        name: "Joico Moisture",
        imageUrl:
          "https://blog.mapleholistics.com/wp-content/uploads/2019/08/joico-hair-logo.jpg",
        price: 30,
      },
      {
        id: 41,
        name: "Malin + Goetz Cilantro",
        imageUrl:
          "https://m.media-amazon.com/images/I/81QaBZ86K2L._AC_SL1500_.jpg",
        price: 34,
      },
      {
        id: 42,
        name: "Oribe Moisture",
        imageUrl: "https://m.media-amazon.com/images/I/31g9QCzQZNL._AC_.jpg",
        price: 18,
      },
      {
        id: 43,
        name: "Davine's Love Smoothing",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskrnqqP0dssTq0eQPmUccLQlVDg1kYigfI5v1aqjswDubI5NGnWszXq6qkmJyQhVSf8A&usqp=CAU",
        price: 27,
      },
      {
        id: 44,
        name: "Olaplex",
        imageUrl:
          "http://images.squarespace-cdn.com/content/v1/5b4367f450a54f7f8727a48f/1597386904142-ULOI7OMZVK2DE9FVLJZI/no.5_hd.1593751855.png",
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
