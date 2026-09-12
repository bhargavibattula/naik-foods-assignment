import { Product, getProductById } from "./products";

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  isVeg: boolean;
  ingredients: RecipeIngredient[];
  steps: string[];
  tips: string[];
  tags: string[];
}

export interface RecipeIngredient {
  name: string;
  quantity: string;
  productId?: string; // links to our store product
}

export const recipes: Recipe[] = [
  {
    id: "recipe-1",
    slug: "konkani-fish-curry",
    name: "Konkani Fish Curry (Ambot Tik)",
    description:
      "A tangy, spicy fish curry from the Konkan coast — the soul food of every Alibag household. Made with kokum, Malvani masala, and fresh catch. This recipe uses Naik Konkan Foods products to deliver authentic flavor without spending hours grinding masalas.",
    image: "/fish-curry.jpg",
    cookTime: "40 mins",
    servings: 4,
    difficulty: "Medium",
    category: "Main Course",
    isVeg: false,
    ingredients: [
      { name: "Fresh fish (Pomfret/Surmai)", quantity: "500g" },
      { name: "Malvani Masala", quantity: "2 tbsp", productId: "masala-4" },
      { name: "Kokum Amsul", quantity: "5–6 pieces", productId: "meva-3" },
      { name: "Sandgi Mirchi Powder", quantity: "1 tsp", productId: "masala-1" },
      { name: "Coconut (grated)", quantity: "1 cup" },
      { name: "Onion (sliced)", quantity: "2 medium" },
      { name: "Garlic paste", quantity: "1 tbsp" },
      { name: "Tamarind pulp", quantity: "1 tbsp" },
      { name: "Turmeric powder", quantity: "½ tsp" },
      { name: "Salt", quantity: "To taste" },
      { name: "Oil", quantity: "2 tbsp" },
    ],
    steps: [
      "Soak kokum amsul in warm water for 15 minutes.",
      "Grind grated coconut, half the onion, garlic, and turmeric into a smooth paste.",
      "Heat oil in a heavy-bottomed pot. Sauté remaining sliced onions until golden.",
      "Add the coconut paste and cook on medium heat for 5 minutes, stirring to prevent sticking.",
      "Add 2 cups of water, Malvani masala, Sandgi Mirchi powder, tamarind, and salt. Bring to a boil.",
      "Gently slide the fish pieces into the curry. Add soaked kokum with its water.",
      "Simmer on low heat for 12–15 minutes. Do NOT stir — gently shake the pot to prevent fish from breaking.",
      "Check seasoning. Serve hot with steamed rice and Udid Papad!",
    ],
    tips: [
      "Pomfret works best for this curry, but Rawas (Indian Salmon) is great too.",
      "Add a teaspoon of jaggery if you like a slight sweetness to balance the tang.",
      "The curry tastes even better the next day as the kokum flavor deepens.",
    ],
    tags: ["non-veg", "fish", "curry", "konkan", "coastal", "traditional"],
  },
  {
    id: "recipe-2",
    slug: "thalipeeth-bhajani",
    name: "Maharashtrian Thalipeeth",
    description:
      "A hearty multi-grain flatbread that's a staple in every Maharashtrian home. Crispy on the outside, soft inside — made with Bhajani flour and served with fresh butter and curd.",
    image: "/thalipeeth.jpg",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    category: "Breakfast",
    isVeg: true,
    ingredients: [
      { name: "Bhajani Flour", quantity: "2 cups", productId: "flour-2" },
      { name: "Onion (finely chopped)", quantity: "1 medium" },
      { name: "Green chili (minced)", quantity: "2" },
      { name: "Fresh coriander (chopped)", quantity: "¼ cup" },
      { name: "Goda Masala", quantity: "1 tsp", productId: "masala-2" },
      { name: "Cumin seeds", quantity: "1 tsp" },
      { name: "Turmeric powder", quantity: "½ tsp" },
      { name: "Salt", quantity: "To taste" },
      { name: "Oil/Ghee", quantity: "For cooking" },
      { name: "Water", quantity: "As needed" },
    ],
    steps: [
      "Mix Bhajani flour with chopped onion, green chili, coriander, Goda Masala, cumin, turmeric, and salt.",
      "Add water gradually to form a soft, pliable dough (not sticky). Let it rest for 10 minutes.",
      "Take a ball of dough, place on an oiled plastic sheet or banana leaf.",
      "Press and flatten with your fingers into a round disc (about 6-inch). Make a small hole in the center.",
      "Heat a tava (flat griddle). Transfer the thalipeeth carefully.",
      "Drizzle oil/ghee around edges and in the center hole. Cook on medium heat until the bottom is golden-crispy.",
      "Flip and cook the other side until golden brown.",
      "Serve hot with white butter, curd, and Lemon Pickle!",
    ],
    tips: [
      "The center hole helps steam escape and ensures even cooking.",
      "Don't make the dough too wet — it should be firm enough to pat.",
      "Leftover dough stores well in the fridge for 2–3 days.",
    ],
    tags: ["veg", "breakfast", "maharashtrian", "healthy", "multigrain"],
  },
  {
    id: "recipe-3",
    slug: "kokum-sharbat",
    name: "Kokum Sharbat (Summer Cooler)",
    description:
      "The quintessential Konkan summer drink — cool, tangy, and refreshing. A natural antioxidant and digestive aid that beats any packaged juice.",
    image: "/kokum-sharbat.jpg",
    cookTime: "5 mins",
    servings: 4,
    difficulty: "Easy",
    category: "Beverages",
    isVeg: true,
    ingredients: [
      { name: "Kokum Syrup", quantity: "4 tbsp", productId: "syrup-1" },
      { name: "Chilled water / soda", quantity: "4 glasses" },
      { name: "Roasted cumin powder", quantity: "½ tsp" },
      { name: "Black salt", quantity: "¼ tsp" },
      { name: "Mint leaves", quantity: "A few" },
      { name: "Ice cubes", quantity: "As needed" },
    ],
    steps: [
      "Add 1 tablespoon of Kokum Syrup to each glass.",
      "Fill with chilled water or soda water for a fizzy version.",
      "Add a pinch of roasted cumin powder and black salt to each glass.",
      "Stir well. Add ice cubes and garnish with fresh mint leaves.",
      "Serve immediately. Perfect for hot afternoons or as a welcome drink!",
    ],
    tips: [
      "For a party version, freeze kokum syrup in ice cube trays and use them instead of regular ice.",
      "Add a splash of Amla Syrup for extra immunity boost.",
      "Kokum naturally aids digestion — serve after heavy meals.",
    ],
    tags: ["veg", "drinks", "summer", "healthy", "quick"],
  },
  {
    id: "recipe-4",
    slug: "nachni-porridge-baby",
    name: "Nachni Porridge (Baby-Friendly)",
    description:
      "A calcium and iron-rich porridge for babies (6+ months) and adults alike. Made with Nachni flour and Bhardi, this is the traditional Konkan superfood for growing kids.",
    image: "/nachni-porridge.jpg",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Baby Food",
    isVeg: true,
    ingredients: [
      { name: "Nachni Flour (Ragi)", quantity: "3 tbsp", productId: "flour-1" },
      { name: "Bhardi Baby Food", quantity: "1 tbsp", productId: "babyfood-1" },
      { name: "Milk / Water", quantity: "1.5 cups" },
      { name: "Jaggery (grated)", quantity: "1 tsp (optional)" },
      { name: "Ghee", quantity: "½ tsp" },
      { name: "Cardamom powder", quantity: "A pinch" },
    ],
    steps: [
      "Mix Nachni flour and Bhardi in a bowl. Add ½ cup cold water and make a lump-free slurry.",
      "Boil remaining 1 cup of milk/water in a pan.",
      "Pour the slurry into the boiling milk while stirring continuously to avoid lumps.",
      "Cook on low heat for 5–7 minutes until the porridge thickens.",
      "Add jaggery (for 8+ months babies), ghee, and cardamom.",
      "Let it cool to a safe temperature before serving to baby.",
    ],
    tips: [
      "For babies under 8 months, skip jaggery and use only water (no milk).",
      "You can add mashed banana or apple puree for natural sweetness.",
      "Nachni is the richest natural source of calcium among grains!",
    ],
    tags: ["veg", "baby", "healthy", "nutritious", "breakfast"],
  },
  {
    id: "recipe-5",
    slug: "pickle-paratha-platter",
    name: "Pickle Paratha Platter",
    description:
      "A weekend brunch idea: crispy layered parathas served with a trio of Naik pickles, curd, and salad. The ultimate comfort meal that showcases three different Konkan pickle styles.",
    image: "/pickle-paratha.jpg",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Easy",
    category: "Breakfast",
    isVeg: true,
    ingredients: [
      { name: "Whole wheat flour", quantity: "2 cups" },
      { name: "Ambat God Tikhat Loncha", quantity: "For serving", productId: "pickle-1" },
      { name: "Kairy Tikhat Loncha", quantity: "For serving", productId: "pickle-2" },
      { name: "Lemon Pickle", quantity: "For serving", productId: "pickle-4" },
      { name: "Curd", quantity: "1 cup" },
      { name: "Ghee/Butter", quantity: "For cooking" },
      { name: "Salt", quantity: "To taste" },
      { name: "Udid Papad", quantity: "4 pieces", productId: "papad-1" },
    ],
    steps: [
      "Knead wheat flour with salt and water into a smooth dough. Rest for 15 minutes.",
      "Divide into equal portions. Roll each into a thin round.",
      "Apply ghee, fold into layers, and roll again for flaky parathas.",
      "Cook on a hot tava with ghee until golden and crispy on both sides.",
      "Meanwhile, fry/roast the Udid Papads.",
      "Arrange parathas on a platter with small bowls of all three pickles, curd, sliced onions, and papads.",
      "Pro tip: Label each pickle bowl — guests love knowing the flavor profile!",
    ],
    tips: [
      "The three pickles cover sweet-sour-spicy (Ambat God), fiery (Kairy Tikhat), and tangy (Lemon) — a full flavor spectrum.",
      "Add Poha Chivda as a crunchy side for the ultimate brunch spread.",
      "This platter makes a great Instagram-worthy food photo!",
    ],
    tags: ["veg", "breakfast", "brunch", "pickles", "comfort-food"],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getRecipeProducts(recipe: Recipe): { ingredient: RecipeIngredient; product: Product }[] {
  return recipe.ingredients
    .filter((i) => i.productId)
    .map((i) => ({
      ingredient: i,
      product: getProductById(i.productId!)!,
    }))
    .filter((item) => item.product);
}
