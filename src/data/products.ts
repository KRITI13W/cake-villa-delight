export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  tags: string[];
  deliveryInfo?: string;
  occasions?: string[];
}

export const occasions = [
  "All Occasions",
  "Birthday",
  "Wedding",
  "Anniversary",
  "Festival",
  "Party",
  "Everyday",
];

export const categories = [
  "All",
  "Cakes",
  "Pastries",
  "Burgers",
  "Sandwiches",
  "Snacks",
  "Seasonal Specials",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Red Velvet Cake",
    description: "Rich, moist red velvet layers with cream cheese frosting",
    price: 899,
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400&h=300&fit=crop",
    category: "Cakes",
    rating: 4.8,
    reviews: 124,
    tags: ["bestseller"],
    deliveryInfo: "Same-day delivery available",
    occasions: ["Birthday", "Anniversary", "Wedding"],
  {
    id: "2",
    name: "Belgian Chocolate Truffle",
    description: "Decadent dark chocolate ganache with a velvety finish",
    price: 1099,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    category: "Cakes",
    rating: 4.9,
    reviews: 89,
    tags: ["bestseller"],
    deliveryInfo: "Same-day delivery available",
    occasions: ["Birthday", "Wedding", "Anniversary"],
  {
    id: "3",
    name: "Fresh Strawberry Shortcake",
    description: "Light sponge layers with whipped cream and fresh strawberries",
    price: 799,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    category: "Cakes",
    rating: 4.7,
    reviews: 67,
    tags: ["seasonal"],
    deliveryInfo: "Order before 2pm for same-day",
    occasions: ["Birthday", "Party"],
  {
    id: "4",
    name: "Butter Croissant",
    description: "Flaky, golden layers of buttery French pastry perfection",
    price: 149,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=400&h=300&fit=crop",
    category: "Pastries",
    rating: 4.6,
    reviews: 203,
    tags: ["vegan-option"],
    deliveryInfo: "Best enjoyed fresh",
    occasions: ["Everyday"],
  {
    id: "5",
    name: "Almond Danish",
    description: "Sweet almond cream on a perfectly laminated pastry base",
    price: 179,
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop",
    category: "Pastries",
    rating: 4.5,
    reviews: 91,
    tags: [],
    deliveryInfo: "Best enjoyed fresh",
    occasions: ["Everyday", "Party"],
  {
    id: "6",
    name: "Classic Smash Burger",
    description: "Double-smashed patties, aged cheddar, house sauce, brioche bun",
    price: 349,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "Burgers",
    rating: 4.7,
    reviews: 156,
    tags: ["bestseller"],
    deliveryInfo: "30-min delivery",
    occasions: ["Party", "Everyday"],
  {
    id: "7",
    name: "Grilled Chicken Club",
    description: "Herb-grilled chicken, crispy bacon, avocado, sourdough",
    price: 299,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
    category: "Sandwiches",
    rating: 4.4,
    reviews: 78,
    tags: [],
    deliveryInfo: "30-min delivery",
    occasions: ["Everyday"],
  {
    id: "8",
    name: "Paneer Tikka Wrap",
    description: "Spiced cottage cheese with mint chutney in a warm tortilla",
    price: 249,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
    category: "Sandwiches",
    rating: 4.6,
    reviews: 112,
    tags: ["vegan-option"],
    deliveryInfo: "30-min delivery",
    occasions: ["Everyday", "Party"],
  {
    id: "9",
    name: "Loaded Cheese Fries",
    description: "Crispy fries topped with melted cheese, jalapeños & sour cream",
    price: 199,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    category: "Snacks",
    rating: 4.3,
    reviews: 145,
    tags: [],
    deliveryInfo: "30-min delivery",
    occasions: ["Party", "Everyday"],
  {
    id: "10",
    name: "Chocolate Éclair",
    description: "Choux pastry filled with vanilla cream, topped with chocolate glaze",
    price: 129,
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400&h=300&fit=crop",
    category: "Pastries",
    rating: 4.8,
    reviews: 98,
    tags: ["bestseller"],
    deliveryInfo: "Best enjoyed fresh",
    occasions: ["Party", "Everyday"],
  {
    id: "11",
    name: "Mango Mousse Cake",
    description: "Tropical mango mousse on a buttery biscuit base — summer special",
    price: 699,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    category: "Seasonal Specials",
    rating: 4.9,
    reviews: 42,
    tags: ["seasonal", "gluten-free"],
    deliveryInfo: "Limited availability",
    occasions: ["Festival", "Birthday", "Anniversary"],
  {
    id: "12",
    name: "Veggie Supreme Burger",
    description: "Crispy veggie patty, fresh veggies, tangy mayo, sesame bun",
    price: 279,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
    category: "Burgers",
    rating: 4.5,
    reviews: 67,
    tags: ["vegan-option"],
    deliveryInfo: "30-min delivery",
    occasions: ["Everyday", "Party"],
];

export const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "The red velvet cake was absolutely divine! Perfect for my daughter's birthday. The team at Cake Villa went above and beyond with the custom design.",
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    text: "Best croissants in the city, hands down. I order every weekend and they never disappoint. The butter croissant is flaky perfection!",
  },
  {
    name: "Ananya Gupta",
    rating: 4,
    text: "Ordered a 3-tier wedding cake and it was a showstopper. Everyone asked where we got it. Beautiful design and even better taste!",
  },
];

export const galleryImages = [
  { id: "g1", src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=400&fit=crop", category: "Cakes", alt: "Layered chocolate cake" },
  { id: "g2", src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=600&fit=crop", category: "Cakes", alt: "Wedding cake" },
  { id: "g3", src: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop", category: "Pastries", alt: "Fresh croissants" },
  { id: "g4", src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=500&fit=crop", category: "Cakes", alt: "Mango cake" },
  { id: "g5", src: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=600&h=400&fit=crop", category: "Events", alt: "Event setup" },
  { id: "g6", src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop", category: "Cakes", alt: "Chocolate truffle cake" },
  { id: "g7", src: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop", category: "Pastries", alt: "Danish pastry" },
  { id: "g8", src: "https://images.unsplash.com/photo-1535141192574-5d4897c12f4f?w=600&h=500&fit=crop", category: "Custom Orders", alt: "Custom birthday cake" },
  { id: "g9", src: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=400&fit=crop", category: "Pastries", alt: "Macarons" },
  { id: "g10", src: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=600&fit=crop", category: "Events", alt: "Dessert table" },
  { id: "g11", src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop", category: "Custom Orders", alt: "Custom cake" },
  { id: "g12", src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=500&fit=crop", category: "Cakes", alt: "Fruit cake" },
];
