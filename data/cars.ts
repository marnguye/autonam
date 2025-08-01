export type Car = {
  name: string;
  images: string[];
  price: number;
  year: number;
  mileage: string;
  fuel: string;
  power: string;
  acceleration: string;
  description: string;
  speed: string;
  color: string;
  transmission: string;
  displacement: string;
  body: string;
};

export const cars: Car[] = [
  {
    name: "BMW M3 CS xDrive",
    images: ["/BMW_M3_1.jpg", "/BMW_M3_2.jpg", "/BMW_M3_3.jpg", "/BMW_M3_4.jpg"],
    price: 2500000,
    year: 2024,
    mileage: "15,000 km",
    fuel: "Benzín",
    power: "551 HP",
    acceleration: "3.4s",
    description: "Výjimečný sportovní sedan s výkonem 551 HP. Limitovaná edice s nejmodernějšími technologiemi.",
    speed: "307 km/h",
    color: "Alpine White",
    transmission: "8-speed M Steptronic",
    displacement: "3.0L Twin-Turbo",
    body: "Sedan"
  },
  {
    name: "BMW M4 Competition",
    images: ["/BMW_M3_2.jpg", "/BMW_M3_1.jpg", "/BMW_M3_3.jpg", "/BMW_M3_4.jpg"],
    price: 2200000,
    year: 2023,
    mileage: "8,500 km",
    fuel: "Benzín",
    power: "510 HP",
    acceleration: "3.7s",
    description: "Sportovní kupé s agresivním designem a výkonem 510 HP. Ideální pro milovníky rychlé jízdy.",
    speed: "290 km/h",
    color: "Isle of Man Green",
    transmission: "8-speed M Steptronic",
    displacement: "3.0L Twin-Turbo",
    body: "Coupe"
  },
  {
    name: "BMW M5 Competition",
    images: ["/BMW_M3_3.jpg", "/BMW_M3_1.jpg", "/BMW_M3_2.jpg", "/BMW_M3_4.jpg"],
    price: 3800000,
    year: 2024,
    mileage: "12,000 km",
    fuel: "Benzín",
    power: "625 HP",
    acceleration: "3.1s",
    description: "Luxusní sedan s výkonem 625 HP. Kombinuje komfort limuzíny s výkonem supersportu.",
    speed: "305 km/h",
    color: "Frozen Dark Gray",
    transmission: "8-speed M Steptronic",
    displacement: "4.4L Twin-Turbo V8",
    body: "Sedan"
  },
  {
    name: "BMW X5 M",
    images: ["/BMW_M3_4.jpg", "/BMW_M3_1.jpg", "/BMW_M3_2.jpg", "/BMW_M3_3.jpg"],
    price: 4200000,
    year: 2023,
    mileage: "18,500 km",
    fuel: "Benzín",
    power: "625 HP",
    acceleration: "3.8s",
    description: "Výkonné SUV s prostorným interiérem a výkonem 625 HP. Perfektní kombinace praktičnosti a výkonu.",
    speed: "290 km/h",
    color: "Tanzanite Blue",
    transmission: "8-speed M Steptronic",
    displacement: "4.4L Twin-Turbo V8",
    body: "SUV"
  },
  {
    name: "BMW M2 Competition",
    images: ["/BMW_M3_1.jpg", "/BMW_M3_2.jpg", "/BMW_M3_3.jpg", "/BMW_M3_4.jpg"],
    price: 1800000,
    year: 2023,
    mileage: "22,000 km",
    fuel: "Benzín",
    power: "410 HP",
    acceleration: "4.2s",
    description: "Kompaktní sportovní kupé s čistým designem a výkonem 410 HP. Ideální pro městskou jízdu.",
    speed: "280 km/h",
    color: "Alpine White",
    transmission: "7-speed M DCT",
    displacement: "3.0L Twin-Turbo",
    body: "Coupe"
  },
  {
    name: "BMW M8 Competition",
    images: ["/BMW_M3_2.jpg", "/BMW_M3_1.jpg", "/BMW_M3_3.jpg", "/BMW_M3_4.jpg"],
    price: 5500000,
    year: 2024,
    mileage: "6,500 km",
    fuel: "Benzín",
    power: "625 HP",
    acceleration: "3.0s",
    description: "Vrchol BMW M řady s výkonem 625 HP. Luxusní gran turismo s nejvyššími standardy kvality.",
    speed: "305 km/h",
    color: "Frozen Black",
    transmission: "8-speed M Steptronic",
    displacement: "4.4L Twin-Turbo V8",
    body: "Gran Turismo"
  }
]; 