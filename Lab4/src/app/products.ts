export interface Product {

  id: number;
  name: string;
  price: number;

  img: string;
  description: string;
  src: string;
  rating: number;
  like: number;
  category: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    price: 104630,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    description: 'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    rating: 4,
    category: '',
    like: 0
  },
  {
    id: 2,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
    price: 72129,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
    description: 'диагональ: 6.71 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
    rating: 3,
    category: '',
    like: 0
  },
  {
    id: 3,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 127896,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    description: 'диагональ: 6.67 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 732G\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5020 мАч',
    src: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    rating: 3,
    category: '',
    like: 0
  },
  {
    id: 4,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 87490,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    description: 'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Exynos 850\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    rating: 5,
    category: '',
    like: 0
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 376200,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    description: 'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    src: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    rating: 5,
    category: '',
    like: 0
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 705570,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    description: 'диагональ: 6.7 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    src: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    rating: 5,
    category: '',
    like: 0
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    price: 129700,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
    description: 'диагональ: 6.4 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Exynos 1280\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item',
    rating: 4,
    category: '',
    like: 0
  },
  {
    id: 8,
    name: 'Смартфон BQ 6051G Soul 2/32Gb синий',
    price: 61990,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h69/47231687688222/bq-6051g-soul-2-32gb-sinij-102903894-1.jpg',
    description: 'диагональ: 6.09 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: 4-х ядерный Spreadtrum SC7731E\n' +
        'объем встроенной памяти: 32 ГБ\n' +
        'емкость аккумулятора: 3000 мАч',
    src: 'https://kaspi.kz/shop/p/bq-6051g-soul-2-32gb-sinii-102903894/?c=750000000#!/item',
    rating: 1,
    category: '',
    like: 0
  },
  {
    id: 9,
    name: 'Смартфон BQ 5565L Fest 2/16Gb сиреневый',
    price: 57380,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/he7/47786503766046/bq-5565l-fest-103187156-1.jpg',
    description: 'диагональ: 5.45 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: Unisoc SC9832E\n' +
        'объем встроенной памяти: 16 ГБ\n' +
        'емкость аккумулятора: 2200 мАч',
    src: 'https://kaspi.kz/shop/p/bq-5565l-fest-2-16gb-sirenevyi-103187156/?c=750000000#!/item',
    rating: 2,
    category: '',
    like: 0
  },
  {
    id: 10,
    name: 'Смартфон BQ 5565L Fest 2/16Gb зеленый',
    price: 57680,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/ha9/47786589552670/bq-5565l-fest-2-16gb-103187236-1.jpg',
    description: 'диагональ: 5.45 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: Unisoc SC9832E\n' +
        'объем встроенной памяти: 16 ГБ\n' +
        'емкость аккумулятора: 2200 мАч',
    src: 'https://kaspi.kz/shop/p/bq-5565l-fest-2-16gb-zelenyi-103187236/?c=750000000#!/item',
    rating: 2,
    category: '',
    like: 0
  },
  {
    id: 11,
    name: 'Смартфон Nokia G11 Plus 4 ГБ/64 ГБ серый',
    price: 61970,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/hff/62594924150814/nokia-g11-plus-4-gb-64-gb-seryj-106514096-1.jpg',
    description: 'диагональ: 6.52 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: Unisoc Tiger T606\n' +
        'объем встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    src: 'https://kaspi.kz/shop/p/nokia-g11-plus-4-gb-64-gb-seryi-106514096/?c=750000000#!/item',
    rating: 1,
    category: '',
    like: 0
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/