import { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import food_items from "../food";
import { ImLeaf } from "react-icons/im";
import { GiChickenOven } from "react-icons/gi";
import { dataContext } from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify";

const Card = () => {
  const { selectedCategory, searchTerm, cartCount, setCartCount } =
    useContext(dataContext);
  const dispatch = useDispatch();

  // State for veg/non-veg filter
  const [dietaryFilter, setDietaryFilter] = useState("all");

  // Reset dietary filter to 'all' when searching
  useEffect(() => {
    if (searchTerm !== "") {
      setDietaryFilter("all");
    }
  }, [searchTerm]);

  // Categorize food items as veg or non-veg
  const categorizeFood = (item) => {
    const vegItems = [
      "pizza",
      "pasta",
      "salad",
      "ice cream",
      "fries",
      "smoothie",
      "chocolate cake",
      "coffee",
      "pancakes",
      "fried rice",
      "grilled cheese",
      "noodles",
      "soup",
      "samosa",
      "barfi",
      "gulab jamun",
      "juju dhau",
      "lassi",
      "milk tea",
      "cold coffee",
      "sel roti",
      "mix veg",
      "dessert",
    ];

    const explicitNonVegItems = [
      "burger",
      "sushi",
      "tacos",
      "steak",
      "curry",
      "dumplings",
      "burrito",
      "chicken",
      "momo",
      "caesar",
    ];

    const itemName = item.name.toLowerCase();

    // First check if it's explicitly non-veg
    if (
      explicitNonVegItems.some((nonVegItem) => itemName.includes(nonVegItem))
    ) {
      return "non-veg";
    }

    // Then check if it's in our veg list
    if (vegItems.some((vegItem) => itemName.includes(vegItem))) {
      return "veg";
    }

    // If description contains meat-related words, mark as non-veg
    const nonVegKeywords = ["meat", "beef", "chicken", "pork", "fish"];
    if (
      nonVegKeywords.some((keyword) =>
        item.description.toLowerCase().includes(keyword)
      )
    ) {
      return "non-veg";
    }

    // Default to veg if unsure
    return "veg";
  };

  // Filter items based on selected category, search term, and dietary preference
  const filteredItems = food_items.filter((item) => {
    // Category filter
    let matchesCategory = true;
    if (selectedCategory !== "All") {
      matchesCategory = item.category === selectedCategory;
    }

    // Search filter
    const matchesSearch =
      searchTerm === "" ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Dietary filter (veg/non-veg)
    let matchesDietary = true;
    if (dietaryFilter !== "all") {
      const itemType = categorizeFood(item);
      matchesDietary = itemType === dietaryFilter;
    }

    return matchesCategory && matchesSearch && matchesDietary;
  });

  const handleAddToCart = (item) => {
    dispatch(
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
      })
    );
    setCartCount(cartCount + 1);
  };

  // Handle dietary filter change
  const handleDietaryFilter = (filterType) => {
    setDietaryFilter(filterType);
  };

  return (
    <div className="w-full px-4 py-8">
      {/* Category Filter Section - Hidden during search */}
      {searchTerm === "" && (
        <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => handleDietaryFilter("all")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
              dietaryFilter === "all"
                ? "bg-green-500 text-white"
                : "bg-white text-gray-600 shadow-md hover:shadow-lg hover:bg-blue-50"
            }`}
          >
            All Items
          </button>

          <button
            onClick={() => handleDietaryFilter("veg")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg ${
              dietaryFilter === "veg"
                ? "bg-green-500 text-white"
                : "bg-white text-gray-600 hover:bg-green-50"
            }`}
          >
            <ImLeaf className="w-5 h-5" />
            Vegetarian
          </button>

          <button
            onClick={() => handleDietaryFilter("non-veg")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg ${
              dietaryFilter === "non-veg"
                ? "bg-red-500 text-white"
                : "bg-white text-gray-600 hover:bg-red-50"
            }`}
          >
            <GiChickenOven className="w-5 h-5" />
            Non-Vegetarian
          </button>
        </div>
      )}

      {/* Food Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredItems.map((item) => {
          const isVeg = categorizeFood(item) === "veg";

          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer overflow-hidden hover:border-2 hover:border-green-300"
            >
              {/* Food Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Food Name and Category Badge */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1 ${
                      isVeg
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {isVeg ? (
                      <ImLeaf className="w-3 h-3" />
                    ) : (
                      <GiChickenOven className="w-3 h-3" />
                    )}
                    {isVeg ? "VEG" : "NON-VEG"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>

                {/* Price and Add Button */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    {item.price}
                  </span>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 hover:shadow-md"
                    onClick={() => {
                      handleAddToCart(item);
                      toast.success("Item added to cart!");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* No items found message */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-green-400 text-lg mb-2">No items found</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
