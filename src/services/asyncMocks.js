const arrayHamburgueseria = [
  {
    id: 1,
    titulo: "Bacon Cheddar McMelt",
    descripcion: "Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con abundante queso cheddar, dos tiras de bacon enteras, cebolla grillada en nuestro inigualable pan con semillas de sésamo!",
    imagen: "https://images.rappi.com.ar/products/tmp1885631017426372415092839714.png?e=webp&d=511x511&q=85",
    precio: 2240,
    categoria: "hamburguesas",
    limite: 10
  },
  {
    id: 2,
    titulo: "Big Mac",
    descripcion: "Hamburguesa 100% carne con salsa especial bigmac, cebolla, lechuga pepinillo y queso",
    imagen: "https://images.rappi.com.ar/products/tmp1870507416408645756847287984.png?e=webp&d=511x511&q=85",
    precio: 2010,
    categoria: "hamburguesas",
    limite: 10
  },
  {
    id: 3,
    titulo: "Cuarto De Libra Con Queso",
    descripcion: "Hamburguesa de carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla fresca. ahora podes pedirlo con o sin pepinillos",
    imagen: "https://images.rappi.com.ar/products/tmp1870508410307420492758325934.png?e=webp&d=511x511&q=85",
    precio: 2010,
    categoria: "hamburguesas",
    limite: 10
  },
  {
    id: 4,
    titulo: "Doble Cuarto De Libra Con Queso",
    descripcion: "Hamburguesa con doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla fresca. ahora podes pedirlo con o sin pepinillos.",
    imagen: "https://images.rappi.com.ar/products/tmp1870510017997377340025744057.png?e=webp&d=511x511&q=85",
    precio: 2530,
    categoria: "hamburguesas",
    limite: 10
  },
  {
    id: 5,
    titulo: "Hamburguesa Con Queso",
    descripcion: "Hamburguesa de carne 100% vacuna con queso cheddar, cebolla, mostaza y ketchup.",
    imagen: "https://images.rappi.com.ar/products/tmp1870511614014914409682750215.png?e=webp&d=511x511&q=85",
    precio: 1320,
    categoria: "hamburguesas",
    limite: 10
  },
  {
    id: 6,
    titulo: "Papas Tasty Y Bacon",
    descripcion: "Papas con salsa tasty y bacon.",
    imagen: "https://images.rappi.com.ar/products/tmp1894197112262330822464057791.png?e=webp&d=511x511&q=85",
    precio: 1030,
    categoria: "papas",
    limite: 10
  },
  {
    id: 7,
    titulo: "Papas Con Cheddar Y Bacon",
    descripcion: "Papas fritas queso cheddaar fundido y bacon. disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.",
    imagen: "https://images.rappi.com.ar/products/tmp189446146853953067804835265.png?e=webp&d=511x511&q=85",
    precio: 1080,
    categoria: "papas",
    limite: 10
  },
  {
    id: 8,
    titulo: "Papas Fritas Grandes",
    descripcion: "Calientes, crujientes y deliciosas. disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.",
    imagen: "https://mcdonalds.es/api/cms/images/mcdonalds-es/f2e320e6-1277-43d3-a575-c4f41a8ac7aa_1080x943-App_0004_Patatas-Grandes.png?auto=compress,format",
    precio: 840,
    categoria: "papas",
    limite: 10
  },
  {
    id: 9,
    titulo: "Papas Fritas Medianas",
    descripcion: "Calientes, crujientes y deliciosas. disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.",
    imagen: "https://images.rappi.com.ar/products/tmp1894462910167494536881628838.png?e=webp&d=511x511&q=85",
    precio: 740,
    categoria: "papas",
    limite: 10
  },
  {
    id: 10,
    titulo: "Papas Pequeñas",
    descripcion: "Calientes, crujientes y deliciosas. disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.",
    imagen: "https://images.rappi.com.ar/products/tmp1894463515521272400807915281.png?e=webp&d=511x511&q=85",
    precio: 710,
    categoria: "papas",
    limite: 10
  }
];

export function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arrayHamburgueseria);
    }, 3000);
  });
}

export function getProductData(idLink) {
  return new Promise((resolve) => {
    const productoBuscado = arrayHamburgueseria.find((objeto) => 
    objeto.id == idLink
    );

    setTimeout(() => {
      resolve(productoBuscado);
    }, 3000);
  });
}

export function getCategoryData(URLcategoria) {
  return new Promise((resolve) => {
    const categoriaBuscada = arrayHamburgueseria.filter((objeto) => {
      return objeto.categoria == URLcategoria;
    });

    setTimeout(() => {
      resolve(categoriaBuscada);
    }, 3000);
  });
}