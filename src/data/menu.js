const img = (label, bg = "1c3222", fg = "f8f3e8") =>
  `https://placehold.co/700x700/${bg}/${fg}?font=playfair-display&text=${encodeURIComponent(label)}`;

export const categories = ["All", "Appetizers", "Main Course", "Beverages", "Desserts"];

export const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken Bowl",
    category: "Main Course",
    description: "Tender grilled chicken, fresh veggies, quinoa and house dressing.",
    price: 12.99,
    image: img("Grilled\\nChicken Bowl"),
  },
  {
    id: 2,
    name: "Truffle Mushroom Pasta",
    category: "Main Course",
    description: "Creamy pasta with wild mushrooms and parmesan cheese.",
    price: 14.99,
    image: img("Truffle\\nMushroom Pasta"),
  },
  {
    id: 3,
    name: "Classic Burger",
    category: "Main Course",
    description: "Juicy beef patty, cheddar, lettuce, tomato and special sauce.",
    price: 11.99,
    image: img("Classic Burger"),
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    description: "Warm chocolate cake with a molten center, served with ice cream.",
    price: 7.99,
    image: img("Chocolate\\nLava Cake", "b8843a", "1c1c1a"),
  },
  {
    id: 5,
    name: "Crispy Calamari",
    category: "Appetizers",
    description: "Lightly fried calamari rings with a zesty lemon aioli.",
    price: 9.49,
    image: img("Crispy Calamari"),
  },
  {
    id: 6,
    name: "Bruschetta Trio",
    category: "Appetizers",
    description: "Toasted sourdough with tomato basil, mushroom and olive tapenade.",
    price: 8.49,
    image: img("Bruschetta Trio"),
  },
  {
    id: 7,
    name: "Grilled Salmon",
    category: "Main Course",
    description: "Pan-seared salmon with roasted vegetables and citrus glaze.",
    price: 16.99,
    image: img("Grilled Salmon"),
  },
  {
    id: 8,
    name: "Margherita Pizza",
    category: "Main Course",
    description: "Wood-fired pizza with san marzano tomato, mozzarella and basil.",
    price: 13.49,
    image: img("Margherita\\nPizza"),
  },
  {
    id: 9,
    name: "Fresh Lemonade",
    category: "Beverages",
    description: "Freshly squeezed lemons, mint and a hint of honey.",
    price: 3.99,
    image: img("Fresh Lemonade", "d1a054", "1c1c1a"),
  },
  {
    id: 10,
    name: "Iced Latte",
    category: "Beverages",
    description: "Double shot espresso over ice with creamy milk.",
    price: 4.49,
    image: img("Iced Latte", "d1a054", "1c1c1a"),
  },
  {
    id: 11,
    name: "Tiramisu",
    category: "Desserts",
    description: "Classic Italian dessert with espresso-soaked ladyfingers.",
    price: 6.99,
    image: img("Tiramisu", "b8843a", "1c1c1a"),
  },
  {
    id: 12,
    name: "Caesar Salad",
    category: "Appetizers",
    description: "Crisp romaine, parmesan, croutons and creamy caesar dressing.",
    price: 8.99,
    image: img("Caesar Salad"),
  },
];

export const heroSlides = [
  {
    image: img("Good Food, Great Mood", "16281a"),
    eyebrow: "Fresh Ingredients · Authentic Flavors",
    title: "Good Food\nBrings People\nTogether",
    subtitle:
      "Experience the perfect blend of taste, quality and ambiance at The Olive. From our kitchen to your heart.",
  },
  {
    image: img("Seasonal Tasting Menu", "1c3222"),
    eyebrow: "New This Season",
    title: "Flavors Crafted\nWith Care\nEvery Night",
    subtitle:
      "Our chefs bring years of passion to every plate, using ingredients sourced fresh each morning.",
  },
  {
    image: img("Reserve Your Table", "0f1c12"),
    eyebrow: "Book Ahead",
    title: "A Table Waits\nFor Your Next\nGood Story",
    subtitle:
      "Cozy corners, warm light, and a menu made for lingering. Reserve your evening with us.",
  },
];

export const galleryImages = [
  img("Dining Room", "16281a"),
  img("Chef at Work", "1c3222"),
  img("Signature Plate", "23402b"),
  img("Private Booth", "0f1c12"),
  img("Bar Corner", "b8843a", "1c1c1a"),
  img("Evening Ambiance", "16281a"),
  img("Fresh Ingredients", "1c3222"),
  img("Dessert Table", "d1a054", "1c1c1a"),
  img("Outdoor Seating", "23402b"),
];
