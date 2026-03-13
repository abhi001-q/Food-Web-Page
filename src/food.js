const food_items = [
  {
    id: 1,
    name: "Pizza",
    image: "https://i.pinimg.com/736x/ea/cd/64/eacd64ea4c0091462bdf2e7dc710edcb.jpg",
    price: "NPR 699",
    description: "Delicious cheese pizza with fresh toppings.",
    category: "Fast Food"
  },
  {
    id: 2,
    name: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    price: "NPR 299",
    description: "Juicy beef burger with lettuce and tomato.",
    category: "Fast Food"
  },
  {
    id: 3,
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
    price: "NPR 99",
    description: "Creamy pasta with garlic and herbs.",
    category: "Main Course"
  },
  {
    id: 4,
    name: "Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    price: "NPR 99",
    description: "Fresh garden salad with vinaigrette dressing.",
    category: "Salads"
  },
  {
    id: 5,
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    price: "NPR 199",
    description: "Assorted sushi rolls with wasabi and soy sauce.",
    category: "Main Course"
  },
  {
    id: 6,
    name: "Tacos",
    image: "https://i.pinimg.com/736x/c0/72/28/c07228e668e84a21aa403c18e0dd4844.jpg",
    price: "NPR 199",
    description: "Spicy chicken tacos with salsa and guacamole.",
    category: "Fast Food"
  },
  {
    id: 7,
    name: "Ice Cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    price: "NPR 69",
    description: "Creamy vanilla ice cream with chocolate sauce.",
    category: "Dessert"
  },
  {
    id: 8,
    name: "Steak",
    image: "https://i.pinimg.com/736x/84/cb/6a/84cb6a5c9f9a592d5b7fad7047502aa7.jpg",
    price: "NPR 299",
    description: "Grilled steak with garlic butter and herbs.",
    category: "Main Course"
  },
  {
    id: 9,
    name: "Fries",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=300&fit=crop",
    price: "NPR 49",
    description: "Crispy French fries with a side of ketchup.",
    category: "Snacks"
  },
  {
    id: 10,
    name: "Smoothie",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
    price: "NPR 99",
    description: "Refreshing fruit smoothie with yogurt.",
    category: "Beverages"
  },
  {
    id: 11,
    name: "Sandwich",
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop",
    price: "NPR 49",
    description: "Turkey and cheese sandwich with lettuce and mayo.",
    category: "Fast Food"
  },
  {
    id: 12,
    name: "Curry",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    price: "NPR1,399",
    description: "Spicy chicken curry with rice and naan.",
    category: "Main Course"
  },
  {
    id: 13,
    name: "Dumplings",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
    price: "NPR 99",
    description: "Steamed dumplings filled with pork and vegetables.",
    category: "Snacks"
  },
  {
    id: 14,
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    price: "NPR 59",
    description: "Rich chocolate cake with creamy frosting.",
    category: "Dessert"
  },
  {
    id: 15,
    name: "Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    price: "NPR 90",
    description: "Freshly brewed coffee with a hint of vanilla.",
    category: "Beverages"
  },
  {
    id: 16,
    name: "Burrito",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
    price: "NPR1,299",
    description: "Beef burrito with beans, rice, and salsa.",
    category: "Main Course"
  },
  {
    id: 17,
    name: "Pancakes",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
    price: "NPR 99",
    description: "Fluffy pancakes with maple syrup and butter.",
    category: "Breakfast"
  },
  {
    id: 18,
    name: "Fried Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    price: "NPR 199",
    description: "Vegetable fried rice with soy sauce and sesame oil.",
    category: "Main Course"
  },
  {
    id: 19,
    name: "Grilled Cheese",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
    price: "NPR 199",
    description: "Classic grilled cheese sandwich with crispy bread.",
    category: "Fast Food"
  },
  {
    id: 20,
    name: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    price: "NPR 199",
    description: "Caesar salad with romaine lettuce, croutons, and parmesan cheese.",
    category: "Salads"
  },
  {
    id: 21,
    name: "Noodles",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    price: "NPR 99",
    description: "Stir-fried noodles with vegetables and soy sauce.",
    category: "Main Course"
  },
  {
    id: 22,
    name: "Chicken Wings",
    image: "https://i.pinimg.com/736x/ec/8a/ee/ec8aee3d078af75d59d2065bb774903b.jpg",
    price: "NPR 299",
    description: "Crispy chicken wings tossed in spicy sauce.",
    category: "Snacks"
  },
  {
    id: 23,
    name: "Dessert",
    image: "https://i.pinimg.com/736x/e8/bb/58/e8bb581f70265667f98543a212e0f73b.jpg",
    price: "रु 99",
    description: "Stir-fried noodles with vegetables and soy sauce.",
    category: "Dessert"
  },
  {
    id: 24,
    name: "Mix Veg Noodles",
    image: "https://i.pinimg.com/736x/05/29/0c/05290c652d8d63a5693698cb7dbf8e82.jpg",
    price: "NPR 99",
    description: "Stir-fried noodles with vegetables and soy sauce.",
    category: "Main Course"
  },
  {
    id: 25,
    name: "Momo",
    image: "https://i.pinimg.com/736x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg",
    price: "NPR 49",
    description: "Nepali steamed dumplings filled with spiced meat or vegetables.",
    category: "Snacks"
  },
  {
    id: 26,
    name: "Sel Roti",
    image: "https://i.pinimg.com/736x/c5/43/fe/c543febbf4c3fc6e38f4abc4a1159f64.jpg",
    price: "NPR 199",
    description: "Traditional Nepali rice flour doughnut, crispy outside and soft inside.",
    category: "Snacks"
  },
  {
    id: 27,
    name: "Lassi (दही)",
    image: "https://i.pinimg.com/736x/e6/40/47/e64047ec9918e40bce7cf2e1cfebd72f.jpg",
    price: "NPR 59",
    description: "Refreshing yogurt-based drink, sweet or salty.",
    category: "Beverages"
  },
  {
    id: 28,
    name: "Milk Tea",
    image: "https://i.pinimg.com/736x/1e/54/af/1e54afeaa85c39ac3464a613b911e61e.jpg",
    price: "NPR 49",
    description: "Hot Nepali milk tea with spices.",
    category: "Beverages"
  },
  {
    id: 29,
    name: "Juju Dhau",
    image: "https://i.pinimg.com/736x/5d/f1/9b/5df19b6c61f99ccb75b249ec499d999c.jpg",
    price: "NPR 99",
    description: "Famous Nepali sweet yogurt from Bhaktapur.",
    category: "Dessert"
  },
  {
    id: 30,
    name: "Gulab Jamun",
    image: "https://i.pinimg.com/736x/07/06/84/070684d7ee21575d262b138be7a0b549.jpg",
    price: "NPR 49",
    description: "Soft milk-solid balls soaked in sweet syrup.",
    category: "Dessert"
  },
  {
    id: 31,
    name: "Fanta ",
    image: "https://i.pinimg.com/736x/2b/d1/b9/2bd1b99ae997b97d8578baa00be69a5d.jpg",
    price: "NPR 99",
    description: "Chilled orange flavored soft drink.",
    category: "Beverages"
  },
  {
    id: 32,
    name: "Samosa",
    image: "https://i.pinimg.com/736x/64/16/73/6416733eeda35bf65bfa757d6d4c39c0.jpg",
    price: "NPR 79",
    description: "Deep-fried pastry filled with spicy potatoes and peas.",
    category: "Snacks"
  },
  {
    id: 33,
    name: "Barfi",
    image: "https://i.pinimg.com/736x/07/61/80/076180ad6fb8de92a72857f16c6311c5.jpg",
    price: "NPR 69",
    description: "Sweet, dense milk-based dessert flavored with cardamom.",
    category: "Dessert"
  },
  {
    id: 34,
    name: "Cold Coffee",
    image: "https://i.pinimg.com/736x/cd/ef/91/cdef918639470b34d6123c0faa9868b2.jpg",
    price: "NPR 99",
    description: "Iced coffee blended with milk and sugar.",
    category: "Beverages"
  },
  {
    id: 35,
    name: "Soup",
    image: "https://i.pinimg.com/736x/ef/39/cd/ef39cdb7f9f7cf4f4c78593068d2e145.jpg",
    price: "NPR 99",
    description: "Warm and comforting soup with seasonal vegetables.",
    category: "Appetizers"
  },
  {
    id: 36,
    name: "Biryani",
    image: "https://i.pinimg.com/736x/6a/cc/f3/6accf3cefbe7f9779d151e3696018990.jpg",
    price: "NPR 299",
    description: "Fragrant rice dish with marinated meat and spices.",
    category: "Main Course"
  },
  {
    id: 37,
    name: "Paneer Tikka",
    image: "https://i.pinimg.com/736x/15/6e/15/156e15eff41d5a78d36b483523dd6b16.jpg",
    price: "NPR 199",
    description: "Grilled paneer cubes marinated in spices.",
    category: "Appetizers"
  },
  {
    id: 38,
    name: "Chole Bhature",
    image: "https://i.pinimg.com/736x/d6/60/25/d660255e0ac13e20bc3c674ee3d11ac4.jpg",
    price: "NPR 199",
    description: "Spicy chickpeas served with deep-fried bread.",
    category: "Main Course"
  },
  {
    id: 39,
    name: "Pav Bhaji",
    image: "https://i.pinimg.com/736x/f3/bb/57/f3bb577112e29ba59c4f44507898b26e.jpg",
    price: "NPR 199",
    description: "Spicy vegetable mash served with buttered bread rolls.",
    category: "Main Course"
  }
];

export default food_items;