// ==================== 1. DETAILED MENU & NUTRITION DATASET (10 ITEMS) ==================== // Section comment introducing the rich menu and nutrition dataset
const menuItems = [ // Declares a constant array holding all 10 drinks, pastries, and lunch items sold by Bean & Brew
    { // Opens the object for Menu Item 1
        id: "drink-1", // Unique identifier for the Flat White
        name: "Artisan Oat Flat White", // Display name of the drink
        category: "Hot Drinks", // Category used by the filter buttons
        price: 3.40, // Numeric price in GBP (£) used for basket calculations
        calories: 145, // Energy in kilocalories (kcal) per standard 8oz cup
        kj: 607, // Energy in kilojoules (kJ) per standard serving
        protein: "2.8g", // Protein content per serving
        carbs: "14.2g", // Total carbohydrate content per serving
        sugars: "6.8g", // Sugars content per serving
        fat: "7.2g", // Total fat content per serving
        satFat: "0.9g", // Saturated fat content per serving
        fibre: "1.6g", // Dietary fibre content per serving
        salt: "0.18g", // Salt content per serving
        caffeineMg: 136, // Caffeine content in milligrams (double ristretto shot)
        dietaryTags: ["Vegan", "Dairy-Free", "Nut-Free", "Low Calorie"], // Dietary suitability tags used for badges and filtering
        allergens: ["Oats (Gluten)"], // UK 14 Major Allergens present in default preparation
        origin: "Single-Origin Huila Colombian Arabica & British Oats", // Sourcing origin note
        ingredients: "Filtered Yorkshire Water, British Oat Base (Water, Wholegrain Oats 12%, Rapeseed Oil, Sea Salt), Double-Shot 100% Arabica Espresso.", // Full ingredients list in descending weight order
        crossContamNote: "Steamed using a dedicated plant-based pitcher; gluten-free soy or coconut milk available in dropdown.", // Kitchen allergen note
        icon: "☕", // Visual emoji icon displayed on the card
        altText: "Hot steaming coffee cup", // Accessible description of the icon for screen readers
        description: "Double-shot Colombian house espresso with velvety micro-foamed barista oat milk.", // Customer-facing description
        optionLabel: "Milk & Espresso Choice:", // Label for the customisation dropdown on this card
        options: ["Barista Oat Milk (Default - Vegan)", "Organic Whole Milk", "Skimmed Milk", "Gluten-Free Soy Milk", "Coconut Milk", "Decaf Espresso + Oat Milk"] // Array of customisation choices
    }, // Closes the object for Menu Item 1
    { // Opens the object for Menu Item 2
        id: "drink-2", // Unique identifier for the Caramel Latte
        name: "Yorkshire Salted Caramel Latte", // Display name of the drink
        category: "Hot Drinks", // Category used by the filter buttons
        price: 3.75, // Numeric price in GBP (£)
        calories: 210, // Energy in kilocalories (kcal) per 12oz cup
        kj: 879, // Energy in kilojoules (kJ)
        protein: "7.8g", // Protein content
        carbs: "26.4g", // Carbohydrate content
        sugars: "23.5g", // Sugars content
        fat: "7.6g", // Total fat content
        satFat: "4.8g", // Saturated fat content
        fibre: "0.2g", // Dietary fibre content
        salt: "0.45g", // Salt content (from Whitby sea salt caramel)
        caffeineMg: 136, // Caffeine in milligrams
        dietaryTags: ["Vegetarian", "Nut-Free", "Low Calorie"], // Dietary suitability tags
        allergens: ["Milk (Dairy)"], // UK Major Allergens present
        origin: "Colombian Espresso, Yorkshire Pasture Milk & Whitby Sea Salt", // Sourcing origin
        ingredients: "Organic Yorkshire Whole Milk (78%), Double-Shot Arabica Espresso, House Caramel Syrup (Unrefined Cane Sugar, Water, Whitby Sea Salt, Natural Vanilla Extract).", // Full ingredients list
        crossContamNote: "Can be made 100% Vegan and Dairy-Free by selecting Oat, Soy, or Coconut Milk in the customisation box.", // Kitchen allergen note
        icon: "🍯", // Visual emoji icon displayed on the card
        altText: "Honeycomb and caramel pot", // Accessible description of the icon
        description: "Smooth house espresso blended with small-batch Whitby sea-salted caramel and steamed milk.", // Customer-facing description
        optionLabel: "Milk & Syrup Option:", // Label for the customisation dropdown
        options: ["Whole Milk + Standard Syrup", "Oat Milk + Standard Syrup (Vegan)", "Skimmed Milk + Sugar-Free Syrup (115 kcal)", "Decaf + Oat Milk"] // Array of customisation choices
    }, // Closes the object for Menu Item 2
    { // Opens the object for Menu Item 3
        id: "drink-3", // Unique identifier for the Hot Chocolate
        name: "70% Single-Origin Peruvian Hot Chocolate", // Display name of the drink
        category: "Hot Drinks", // Category used by the filter buttons
        price: 3.65, // Numeric price in GBP (£)
        calories: 235, // Energy in kilocalories (kcal)
        kj: 983, // Energy in kilojoules (kJ)
        protein: "6.4g", // Protein content
        carbs: "24.0g", // Carbohydrate content
        sugars: "19.2g", // Sugars content
        fat: "11.5g", // Total fat content
        satFat: "6.9g", // Saturated fat content
        fibre: "3.1g", // High cocoa fibre content
        salt: "0.21g", // Salt content
        caffeineMg: 18, // Natural theobromine/caffeine trace from dark cocoa
        dietaryTags: ["Vegan", "Dairy-Free", "Nut-Free", "Low Calorie"], // Dietary suitability tags
        allergens: ["Oats (Gluten)"], // Allergens present in default oat milk preparation
        origin: "Fairtrade San Martín Peruvian Cacao & Barista Oat Milk", // Sourcing origin
        ingredients: "Barista Oat Milk (82%), Peruvian 70% Dark Chocolate Flakes (Cocoa Mass, Raw Cane Sugar, Cocoa Butter, Sunflower Lecithin), Organic Dutch Cocoa Dusting.", // Full ingredients list
        crossContamNote: "Naturally gluten-free when ordered with Soy, Coconut, or Dairy Milk instead of Oat Milk.", // Kitchen allergen note
        icon: "🍫", // Visual emoji icon
        altText: "Rich dark chocolate bar", // Accessible description
        description: "Melted 70% Peruvian dark chocolate flakes whisked into velvety steamed oat milk.", // Customer-facing description
        optionLabel: "Milk & Topping:", // Label for dropdown
        options: ["Steamed Oat Milk (Vegan)", "Organic Whole Milk + Vegan Marshmallows", "Coconut Milk (Gluten-Free)", "Skimmed Milk (No Topping)"] // Customisation choices
    }, // Closes the object for Menu Item 3
    { // Opens the object for Menu Item 4
        id: "drink-4", // Unique identifier for the Chai Latte
        name: "Spiced Masala Rooibos Chai Latte", // Display name of the drink
        category: "Hot Drinks", // Category used by the filter buttons
        price: 3.55, // Numeric price in GBP (£)
        calories: 155, // Energy in kilocalories (kcal)
        kj: 649, // Energy in kilojoules (kJ)
        protein: "2.4g", // Protein content
        carbs: "21.0g", // Carbohydrate content
        sugars: "14.5g", // Sugars content
        fat: "5.8g", // Fat content
        satFat: "0.7g", // Saturated fat content
        fibre: "1.2g", // Fibre content
        salt: "0.15g", // Salt content
        caffeineMg: 0, // 100% Caffeine-free herbal rooibos base
        dietaryTags: ["Vegan", "Dairy-Free", "Nut-Free", "Low Calorie", "Caffeine-Free"], // Dietary tags
        allergens: ["Oats (Gluten)"], // Allergens present
        origin: "Cederberg South African Rooibos, Whole Green Cardamom & Cinnamon", // Sourcing origin
        ingredients: "Steamed Barista Oat Milk (80%), House Chai Reduction (Filtered Water, Organic Rooibos Leaf, Fresh Ginger Root, Ceylon Cinnamon, Cardamom Pods, Cloves, Raw Agave Nectar).", // Full ingredients list
        crossContamNote: "100% Caffeine-Free herbal infusion; safe for evening enjoyment or caffeine sensitivity.", // Kitchen allergen note
        icon: "🫖", // Visual emoji icon
        altText: "Teapot with warm spices", // Accessible description
        description: "Caffeine-free South African rooibos brewed with fresh ginger, cardamom, and cinnamon.", // Customer-facing description
        optionLabel: "Milk & Spice Level:", // Label for dropdown
        options: ["Oat Milk + Cinnamon Dusting (Vegan)", "Coconut Milk (Gluten-Free & Vegan)", "Organic Whole Milk", "Unsweetened Spicy Chai + Oat Milk"] // Customisation choices
    }, // Closes the object for Menu Item 4
    { // Opens the object for Menu Item 5
        id: "drink-5", // Unique identifier for the Iced Matcha
        name: "Iced Ceremonial Matcha Latte", // Display name of the drink
        category: "Iced Drinks", // Category used by the filter buttons
        price: 3.90, // Numeric price in GBP (£)
        calories: 115, // Energy in kilocalories (kcal)
        kj: 481, // Energy in kilojoules (kJ)
        protein: "1.4g", // Protein content
        carbs: "11.2g", // Carbohydrate content
        sugars: "6.4g", // Sugars content
        fat: "5.2g", // Fat content
        satFat: "3.8g", // Saturated fat content
        fibre: "1.5g", // Fibre content
        salt: "0.12g", // Salt content
        caffeineMg: 68, // Gentle slow-release L-theanine matcha caffeine
        dietaryTags: ["Vegan", "Dairy-Free", "Gluten-Free", "Nut-Free", "Low Calorie"], // Dietary tags
        allergens: ["None (14-Allergen Free)"], // Completely free from all 14 major UK allergens with coconut milk
        origin: "First-Harvest Uji Kyoto Ceremonial Grade Matcha", // Sourcing origin
        ingredients: "Chilled Barista Coconut Milk (75%), Filtered Ice Cubes, Whisked Uji Ceremonial Matcha Green Tea Powder (100% Pure Stone-Ground Camellia Sinensis).", // Full ingredients list
        crossContamNote: "Prepared with bamboo chasen whisk in a dedicated allergen-free cold drinks bay.", // Kitchen allergen note
        icon: "🍵", // Visual emoji icon displayed on the card
        altText: "Green matcha tea cup", // Accessible description of the icon
        description: "Bamboo-whisked organic Japanese Uji green tea poured over ice with cold plant milk.", // Customer-facing description
        optionLabel: "Milk & Ice Level:", // Label for the customisation dropdown
        options: ["Coconut Milk (14-Allergen Free & Vegan)", "Barista Oat Milk (Contains Gluten)", "Organic Whole Milk", "Less Ice + Coconut Milk"] // Array of customisation choices
    }, // Closes the object for Menu Item 5
    { // Opens the object for Menu Item 6
        id: "drink-6", // Unique identifier for the Cold Brew
        name: "Vanilla Bean 18-Hour Cold Brew", // Display name of the drink
        category: "Iced Drinks", // Category used by the filter buttons
        price: 3.50, // Numeric price in GBP (£)
        calories: 85, // Very low calorie iced coffee
        kj: 356, // Energy in kilojoules (kJ)
        protein: "0.8g", // Protein content
        carbs: "10.5g", // Carbohydrate content
        sugars: "8.2g", // Sugars content
        fat: "3.1g", // Fat content
        satFat: "0.4g", // Saturated fat content
        fibre: "0.0g", // Fibre content
        salt: "0.05g", // Salt content
        caffeineMg: 155, // Smooth cold-steeped caffeine boost
        dietaryTags: ["Vegan", "Dairy-Free", "Nut-Free", "Low Calorie"], // Dietary tags
        allergens: ["Oats (Gluten)"], // Allergens in oat vanilla cream
        origin: " Ethiopian Yirgacheffe Washed Arabica & Madagascar Bourbon Vanilla", // Sourcing origin
        ingredients: "18-Hour Cold-Steeped Arabica Coffee (85%), Filtered Ice, Madagascar Vanilla Oat Cream (Oat Base, Raw Cane Sugar, Pure Bourbon Vanilla Bean Seeds).", // Full ingredients list
        crossContamNote: "Select 'Served Black Over Ice' for a 5 kcal, 0g sugar, 100% allergen-free drink.", // Kitchen allergen note
        icon: "🧊", // Visual emoji icon displayed on the card
        altText: "Chilled ice cube", // Accessible description of the icon
        description: "Steeped cold for 18 hours for a naturally sweet, low-acid coffee topped with oat vanilla cream.", // Customer-facing description
        optionLabel: "Serving Style:", // Label for the customisation dropdown
        options: ["With Vegan Oat Vanilla Cream (85 kcal)", "Splash of Coconut Milk (Gluten-Free)", "Served Black Over Ice (5 kcal - Zero Sugar)"] // Array of customisation choices
    }, // Closes the object for Menu Item 6
    { // Opens the object for Menu Item 7
        id: "drink-7", // Unique identifier for the Berry Cooler
        name: "Yorkshire Raspberry & Mint Hibiscus Iced Tea", // Display name of the drink
        category: "Iced Drinks", // Category used by the filter buttons
        price: 3.35, // Numeric price in GBP (£)
        calories: 65, // Refreshing low-calorie iced fruit infusion
        kj: 272, // Energy in kilojoules (kJ)
        protein: "0.3g", // Protein content
        carbs: "15.2g", // Carbohydrate content
        sugars: "13.8g", // Natural fruit sugars
        fat: "0.1g", // Fat content
        satFat: "0.0g", // Saturated fat content
        fibre: "0.8g", // Fibre content
        salt: "0.01g", // Salt content
        caffeineMg: 0, // 100% Caffeine-free botanical infusion
        dietaryTags: ["Vegan", "Dairy-Free", "Gluten-Free", "Nut-Free", "Low Calorie", "Caffeine-Free"], // Dietary tags
        allergens: ["None (14-Allergen Free)"], // Free from all 14 major allergens
        origin: "Vale of York Summer Raspberries, Garden Mint & Organic Hibiscus Flowers", // Sourcing origin
        ingredients: "Cold-Infused Hibiscus & Rosehip Botanical Tea (82%), Pressed Yorkshire Raspberry Puree (14%), Unrefined Beet Sugar, Crushed Ice, Fresh Garden Mint Leaves.", // Full ingredients list
        crossContamNote: "Prepared in our allergen-free fruit cooler station; suitable for all dietary requirements.", // Kitchen allergen note
        icon: "🫐", // Visual emoji icon
        altText: "Fresh berries and mint", // Accessible description
        description: "Sparkling or still cold-brewed hibiscus flower tea muddled with Yorkshire raspberries and mint.", // Customer-facing description
        optionLabel: "Water & Ice Style:", // Label for dropdown
        options: ["Still Hibiscus Infusion + Ice", "Sparkling Harrogate Spring Water + Ice", "No Ice (Chilled Still)"] // Customisation choices
    }, // Closes the object for Menu Item 7
    { // Opens the object for Menu Item 8
        id: "food-1", // Unique identifier for the Butter Croissant
        name: "All-Butter Laminated French Croissant", // Display name of the pastry
        category: "Bakery & Food", // Category used by the filter buttons
        price: 2.60, // Numeric price in GBP (£)
        calories: 310, // Energy in kilocalories (kcal)
        kj: 1297, // Energy in kilojoules (kJ)
        protein: "6.2g", // Protein content
        carbs: "34.0g", // Carbohydrate content
        sugars: "6.5g", // Sugars content
        fat: "16.8g", // Total fat content
        satFat: "10.9g", // Saturated fat content
        fibre: "1.9g", // Fibre content
        salt: "0.68g", // Salt content
        caffeineMg: 0, // Caffeine-free bakery item
        dietaryTags: ["Vegetarian", "Nut-Free", "Caffeine-Free"], // Dietary tags
        allergens: ["Wheat (Gluten)", "Milk (Dairy)", "Eggs"], // UK Major Allergens present
        origin: "Stoneground Yorkshire Wheat Flour & Normandy PDO Cultured Butter", // Sourcing origin
        ingredients: "Organic Wheat Flour (Wheat Flour, Calcium Carbonate, Iron, Niacin, Thiamin), Normandy Cultured Butter (Milk) (28%), Whole Milk, Free-Range Egg Wash, Cane Sugar, Fresh Baker's Yeast, Sea Salt.", // Full ingredients list
        crossContamNote: "Baked in our main pastry deck oven; handle with dedicated tongs.", // Kitchen allergen note
        icon: "🥐", // Visual emoji icon displayed on the card
        altText: "Golden flaky croissant", // Accessible description of the icon
        description: "Baked fresh at 6:00 AM in our café bakery with 27 flaky layers of Normandy butter.", // Customer-facing description
        optionLabel: "Preparation & Preserve:", // Label for the customisation dropdown
        options: ["Warmed in Bakery Oven", "Room Temperature", "Warmed + Yorkshire Strawberry Jam (+£0.00)", "Warmed + Marmalade (+£0.00)"] // Array of customisation choices
    }, // Closes the object for Menu Item 8
    { // Opens the object for Menu Item 9
        id: "food-2", // Unique identifier for the Sourdough Toastie
        name: "Chargrilled Pepper & Lemon Hummus Sourdough", // Display name of the sandwich
        category: "Bakery & Food", // Category used by the filter buttons
        price: 5.25, // Numeric price in GBP (£)
        calories: 420, // Energy in kilocalories (kcal)
        kj: 1757, // Energy in kilojoules (kJ)
        protein: "13.5g", // High plant protein content
        carbs: "58.0g", // Complex carbohydrate content
        sugars: "4.8g", // Low sugar content
        fat: "12.4g", // Healthy unsaturated fat content
        satFat: "1.6g", // Low saturated fat
        fibre: "7.8g", // High dietary fibre content
        salt: "1.15g", // Salt content
        caffeineMg: 0, // Caffeine-free lunch item
        dietaryTags: ["Vegan", "Dairy-Free", "Nut-Free", "Caffeine-Free"], // Dietary tags
        allergens: ["Wheat/Rye (Gluten)", "Sesame (Tahini)"], // UK Major Allergens present
        origin: "36-Hour Fermented House Sourdough & Sicilian Lemon Chickpea Hummus", // Sourcing origin
        ingredients: "Artisan Sourdough Bread (Organic Wheat Flour, Wholegrain Rye Flour, Water, Wild Sourdough Starter, Sea Salt), House Lemon Hummus (Chickpeas, Sesame Tahini Paste, Extra Virgin Olive Oil, Sicilian Lemon Juice, Garlic), Roasted Red Peppers, Baby Leaf Spinach.", // Full ingredients list
        crossContamNote: "Gluten-free seeded loaf swap available in the dropdown (prepared on a separate clean grill press liner).", // Kitchen allergen note
        icon: "🥪", // Visual emoji icon displayed on the card
        altText: "Toasted artisan sandwich", // Accessible description of the icon
        description: "Our signature hand-scored sourdough filled with roasted peppers, spinach, and lemon hummus.", // Customer-facing description
        optionLabel: "Bread & Toasting Option:", // Label for the customisation dropdown
        options: ["Toasted Hot & Crispy on Sourdough", "Lightly Warmed on Sourdough", "Cold (Not Toasted)", "Gluten-Free Seeded Bread Swap (Toasted on Safe Liner)"] // Array of customisation choices
    }, // Closes the object for Menu Item 9
    { // Opens the object for Menu Item 10
        id: "food-3", // Unique identifier for the Flapjack
        name: "Gluten-Free Cranberry & Pumpkin Seed Oat Bar", // Display name of the bakery slice
        category: "Bakery & Food", // Category used by the filter buttons
        price: 2.85, // Numeric price in GBP (£)
        calories: 245, // Energy in kilocalories (kcal)
        kj: 1025, // Energy in kilojoules (kJ)
        protein: "5.6g", // Protein content
        carbs: "29.5g", // Carbohydrate content
        sugars: "11.2g", // Sugars content
        fat: "10.8g", // Fat content
        satFat: "3.4g", // Saturated fat content
        fibre: "4.5g", // High oat beta-glucan fibre
        salt: "0.22g", // Salt content
        caffeineMg: 0, // Caffeine-free bakery item
        dietaryTags: ["Vegan", "Dairy-Free", "Gluten-Free", "Nut-Free", "Low Calorie", "Caffeine-Free"], // Dietary tags
        allergens: ["None (Certified Gluten-Free Oats)"], // Prepared with certified gluten-free purity-protocol oats
        origin: "Scottish Gluten-Free Rolled Oats, Roasted Pumpkin Seeds & Tangy Cranberries", // Sourcing origin
        ingredients: "Certified Gluten-Free Scottish Jumbo Oats (54%), Cold-Pressed Coconut Oil, Pure Maple Syrup, Dried Cranberries (12%), Toasted Pumpkin Seeds (9%), Sunflower Seeds, Ground Cinnamon, Sea Salt.", // Full ingredients list
        crossContamNote: "Baked and individually wrapped in our sealed allergen-safe bakery zone.", // Kitchen allergen note
        icon: "🍓", // Visual emoji icon
        altText: "Berry and seed oat bar", // Accessible description
        description: "Chewy Scottish gluten-free jumbo oats baked with maple syrup, cranberries, and pumpkin seeds.", // Customer-facing description
        optionLabel: "Serving Style:", // Label for dropdown
        options: ["Individually Wrapped (Allergen Sealed)", "Served on Plate at Counter", "Gently Warmed in Wrapper"] // Customisation choices
    } // Closes the object for Menu Item 10
]; // Closes the menuItems constant array

// ==================== 2. APPLICATION STATE VARIABLES (WITH LOCALSTORAGE) ==================== // Section comment for state tracking across pages
let basket = JSON.parse(localStorage.getItem("beanBrewBasket")) || []; // Loads saved basket items from browser storage so they persist across all 4 pages
let activeCategory = "all"; // Tracks which category filter is active on the Pre-Order page (index.html)
let menuSearchQuery = ""; // Tracks the user's live search text on the Pre-Order page (index.html)
let activeNutritionDiet = "all"; // Tracks which dietary filter button is active on the Nutrition page (nutrition.html)
let nutritionSearchQuery = ""; // Tracks the user's live search text on the Nutrition page (nutrition.html)

// ==================== 3. DOM ELEMENT REFERENCES ==================== // Section comment for HTML element references
const menuGrid = document.getElementById("menu-grid"); // Finds the HTML container where menu cards are inserted (on index.html)
const menuSearchInput = document.getElementById("menu-search"); // Finds the live menu search input box (on index.html)
const basketList = document.getElementById("basket-list"); // Finds the <ul> element that displays items inside the basket (on index.html)
const basketTotal = document.getElementById("basket-total"); // Finds the <strong> element that displays the £ total price (on index.html)
const basketCalories = document.getElementById("basket-calories"); // Finds the <strong> element that displays total basket kcal (on index.html)
const basketBadge = document.getElementById("basket-badge"); // Finds the counter badge inside the Pre-Order navigation link (on all 4 pages)
const branchSelect = document.getElementById("cafe-branch"); // Finds the café branch dropdown in the top header (on all 4 pages)
const currentBranchLabel = document.getElementById("current-branch-label"); // Finds the branch text label inside the page content (on all 4 pages)
const branchStripName = document.getElementById("branch-strip-name"); // Finds the branch name span inside the info strip (on index.html)
const statusBanner = document.getElementById("status-banner"); // Finds the green notification banner at the top of main content (on all 4 pages)
const statusMessage = document.getElementById("status-message"); // Finds the paragraph inside the notification banner (on all 4 pages)
const closeBannerBtn = document.getElementById("close-banner-btn"); // Finds the button that dismisses the notification banner (on all 4 pages)
const contrastToggleBtn = document.getElementById("contrast-toggle"); // Finds the High Contrast accessibility toggle button
const textSizeToggleBtn = document.getElementById("text-size-toggle"); // Finds the Large Text accessibility toggle button
const dyslexiaToggleBtn = document.getElementById("dyslexia-toggle"); // Finds the Dyslexia Font accessibility toggle button
const motionToggleBtn = document.getElementById("motion-toggle"); // Finds the Reduce Motion accessibility toggle button
const ttsToggleBtn = document.getElementById("tts-toggle"); // Finds the Read Page Aloud (Text-to-Speech) button
const resetA11yBtn = document.getElementById("reset-a11y-btn"); // Finds the Reset Access button
const nutritionTableBody = document.getElementById("nutrition-table-body"); // Finds the <tbody> of the nutrition table (on nutrition.html)
const nutritionCardsGrid = document.getElementById("nutrition-cards-grid"); // Finds the grid for detailed ingredient cards (on nutrition.html)
const nutritionSearchInput = document.getElementById("nutrition-search"); // Finds the live search input on the Nutrition page (on nutrition.html)

// ==================== 4. RENDER MENU ITEMS FUNCTION (INDEX.HTML) ==================== // Section comment for rendering menu cards on index.html
function renderMenu() { // Defines a function that draws the filtered menu cards onto the Pre-Order page
    if (!menuGrid) { // Checks if we are on a page without a menu grid (such as table.html, baking.html, or nutrition.html)
        return; // Exits the function safely if menuGrid does not exist on the current page
    } // Closes the safety check

    menuGrid.innerHTML = ""; // Clears out any existing menu cards inside the grid before redrawing

    const filteredItems = menuItems.filter(function(item) { // Filters the menuItems array based on category/Vegan button and search text
        const matchesCategory = (activeCategory === "all") || // True if "All Items" is selected
            (item.category === activeCategory) || // Or if the item's category matches the clicked button
            (activeCategory === "Vegan" && item.dietaryTags.includes("Vegan")); // Or if the "Vegan Suitable" filter is active and the item is Vegan

        const query = menuSearchQuery.toLowerCase().trim(); // Converts the user's search query to lowercase for case-insensitive matching
        const matchesSearch = (query === "") || // True if the search box is empty
            item.name.toLowerCase().includes(query) || // Or if the item name matches the search text
            item.description.toLowerCase().includes(query) || // Or if the description matches
            item.ingredients.toLowerCase().includes(query) || // Or if an ingredient matches
            item.dietaryTags.join(" ").toLowerCase().includes(query) || // Or if a dietary tag (e.g. "gluten-free") matches
            item.allergens.join(" ").toLowerCase().includes(query); // Or if an allergen name matches

        return matchesCategory && matchesSearch; // Keeps the item only if it passes both the button filter and search box
    }); // Closes the filter callback function

    if (filteredItems.length === 0) { // Checks if no menu items matched the user's search query
        menuGrid.innerHTML = `<p class="empty-basket-msg">No menu items matched "${menuSearchQuery}". Try clearing the search box or switching category.</p>`; // Displays a helpful message
        return; // Exits early since there are no cards to draw
    } // Closes the empty search check

    filteredItems.forEach(function(item) { // Loops through each filtered menu item to build its detailed HTML card
        const card = document.createElement("article"); // Creates a semantic <article> element for the menu card
        card.className = "menu-card"; // Assigns the CSS class "menu-card" for styling

        let optionsHtml = ""; // Declares an empty string to hold the <option> tags for the customisation dropdown
        item.options.forEach(function(opt) { // Loops through each customisation choice for this item
            optionsHtml += `<option value="${opt}">${opt}</option>`; // Appends an HTML <option> tag to the string
        }); // Closes the options loop

        let badgesHtml = `<span class="meta-pill">${item.calories} kcal</span>`; // Starts the badge row with the item's calorie count
        if (item.caffeineMg > 0) { // Checks if the item contains caffeine
            badgesHtml += `<span class="meta-pill">${item.caffeineMg}mg Caffeine</span>`; // Adds a caffeine pill
        } else { // Otherwise if the item has 0mg caffeine
            badgesHtml += `<span class="meta-pill">Caffeine-Free</span>`; // Adds a Caffeine-Free pill
        } // Closes the caffeine check

        item.dietaryTags.slice(0, 2).forEach(function(tag) { // Loops through the first two dietary tags (e.g. Vegan, Nut-Free)
            badgesHtml += `<span class="dietary-pill">${tag}</span>`; // Appends a green dietary badge
        }); // Closes the dietaryTags loop

        badgesHtml += `<span class="allergen-pill">Allergens: ${item.allergens.join(", ")}</span>`; // Appends an explicit amber allergen warning pill

        card.innerHTML = ` // Sets the inner HTML template of the menu card using a template literal
            <div> <!-- Top wrapper holding the item details and nutrition pills -->
                <div class="menu-card-header"> <!-- Row containing the emoji icon and formatted price -->
                    <span class="item-icon" role="img" aria-label="${item.altText}">${item.icon}</span> <!-- Accessible icon with aria-label -->
                    <span class="item-price">&pound;${item.price.toFixed(2)}</span> <!-- Formats price to 2 decimal places (e.g. £3.40) -->
                </div> <!-- Closes menu-card-header -->
                <h3>${item.name}</h3> <!-- Displays the name of the drink or food item -->
                <p>${item.description}</p> <!-- Displays the item description -->
                <div class="badge-row" aria-label="Nutritional and allergen highlights"> <!-- Container for nutrition and allergen pills -->
                    ${badgesHtml} <!-- Inserts the calorie, caffeine, dietary, and allergen badges -->
                </div> <!-- Closes badge-row -->
                <div class="item-origin"> <!-- Row showing ingredient origin and a link to the full Nutrition page -->
                    <span><strong>Origin:</strong> ${item.origin}</span> <!-- Shows bean or bakery origin -->
                    <a href="nutrition.html" class="nutrition-link">Full Nutrition &amp; Ingredients &rarr;</a> <!-- Direct link to nutrition.html -->
                </div> <!-- Closes item-origin -->
            </div> <!-- Closes top wrapper -->
            <div class="customise-group"> <!-- Wrapper for the customisation dropdown and Add button -->
                <label for="select-${item.id}">${item.optionLabel}</label> <!-- Accessible label tied to this item's dropdown -->
                <select id="select-${item.id}"> <!-- Dropdown allowing the user to customise milk or preparation -->
                    ${optionsHtml} <!-- Inserts the generated <option> tags -->
                </select> <!-- Closes the customisation select dropdown -->
                <button type="button" class="primary-btn full-width add-to-basket-btn" data-id="${item.id}"> <!-- Button to add this item to the basket -->
                    Add to Order (&pound;${item.price.toFixed(2)}) <!-- Button label showing action and price -->
                </button> <!-- Closes the Add to Order button -->
            </div> <!-- Closes customise-group wrapper -->
        `; // Finishes the template literal assignment

        menuGrid.appendChild(card); // Appends the newly created card into the menu grid on the webpage
    }); // Closes the filteredItems.forEach loop

    attachAddButtonListeners(); // Calls helper function to attach click listeners to the newly created "Add to Order" buttons
} // Closes the renderMenu function

// ==================== 5. BASKET MANAGEMENT FUNCTIONS ==================== // Section comment for adding/removing basket items
function saveBasket() { // Defines a helper function to save the current basket array into browser localStorage
    localStorage.setItem("beanBrewBasket", JSON.stringify(basket)); // Converts the basket array to a JSON string and stores it
} // Closes the saveBasket function

function attachAddButtonListeners() { // Defines a function to wire up all "Add to Order" buttons
    const addButtons = document.querySelectorAll(".add-to-basket-btn"); // Selects all buttons with the class "add-to-basket-btn"
    addButtons.forEach(function(button) { // Loops through each button
        button.addEventListener("click", function() { // Listens for a mouse click or keyboard Enter/Space press
            const itemId = button.getAttribute("data-id"); // Reads the unique item ID stored in the button's data-id attribute
            const selectElement = document.getElementById(`select-${itemId}`); // Finds the matching customisation dropdown for this item
            const chosenOption = selectElement ? selectElement.value : "Standard Preparation"; // Reads which milk or preparation option the customer selected
            addToBasket(itemId, chosenOption); // Calls addToBasket with the item ID and chosen customisation
        }); // Closes the click event listener
    }); // Closes the addButtons.forEach loop
} // Closes the attachAddButtonListeners function

function addToBasket(itemId, customOption) { // Defines a function that adds a chosen item into the basket array
    const foundItem = menuItems.find(function(item) { // Searches the menuItems array for the matching ID
        return item.id === itemId; // Returns true when the item ID matches
    }); // Closes the find method

    if (!foundItem) { // Safety check: if no matching item was found
        return; // Exits the function early
    } // Closes the safety check

    const basketEntry = { // Creates a new object representing this specific item in the customer's basket
        uid: Date.now() + Math.random(), // Generates a unique ID so individual items can be removed cleanly
        name: foundItem.name, // Copies the item name
        price: foundItem.price, // Copies the item price
        calories: foundItem.calories || 0, // Copies the item calorie count for the live basket calorie estimator
        customisation: customOption // Stores the customer's selected milk or preparation option
    }; // Closes the basketEntry object

    basket.push(basketEntry); // Adds the new entry to the end of the basket array
    saveBasket(); // Saves the updated basket to localStorage so it persists across pages
    updateBasketUI(); // Refreshes the basket display and navigation badge on the screen
} // Closes the addToBasket function

function removeFromBasket(uidToRemove) { // Defines a function to remove a single item from the basket by its unique ID
    basket = basket.filter(function(entry) { // Filters the basket array
        return entry.uid !== uidToRemove; // Keeps every item except the one whose uid matches uidToRemove
    }); // Closes the filter method
    saveBasket(); // Saves the updated basket to localStorage
    updateBasketUI(); // Refreshes the basket display and navigation badge on the screen
} // Closes the removeFromBasket function

function updateBasketUI() { // Defines a function to redraw the basket list, total calories, total price, and navigation badge
    if (basketBadge) { // Checks that the navigation badge exists in the header
        basketBadge.textContent = basket.length.toString(); // Updates the badge counter on the Pre-Order link with the number of items
    } // Closes the badge check

    if (!basketList || !basketTotal) { // Checks if we are on table.html, baking.html, or nutrition.html where the basket sidebar is not shown
        return; // Exits early after updating the top navigation badge
    } // Closes the basket sidebar check

    basketList.innerHTML = ""; // Clears the current list of HTML items inside the basket

    if (basket.length === 0) { // Checks if the basket is currently empty
        basketList.innerHTML = `<li class="empty-basket-msg">Your basket is currently empty. Add a drink or snack to begin!</li>`; // Shows the empty message
        basketTotal.innerHTML = "&pound;0.00"; // Resets the total price display to £0.00
        if (basketCalories) { // Checks if the basket calorie counter element exists
            basketCalories.textContent = "0 kcal"; // Resets total calories to 0 kcal
        } // Closes the basketCalories check
        return; // Exits the function since there are no items to loop through
    } // Closes the empty basket check

    let runningTotal = 0; // Declares a variable to add up the total cost (£) of all items in the basket
    let runningCalories = 0; // Declares a variable to add up the total energy (kcal) of all items in the basket

    basket.forEach(function(entry) { // Loops through each item currently in the basket
        runningTotal += entry.price; // Adds this item's price to the running total
        runningCalories += (entry.calories || 0); // Adds this item's calories to the running calorie count

        const li = document.createElement("li"); // Creates a new <li> list item element for the basket row
        li.className = "basket-item"; // Assigns the "basket-item" CSS class for styling
        li.innerHTML = ` // Sets the HTML content of the basket row
            <div> <!-- Left container showing item name, customisation, calories, and price -->
                <strong>${entry.name}</strong><br> <!-- Displays item name in bold -->
                <small>${entry.customisation} &bull; ${entry.calories || 0} kcal &mdash; &pound;${entry.price.toFixed(2)}</small> <!-- Displays customisation, calories, and price -->
            </div> <!-- Closes left container -->
            <button type="button" class="remove-item-btn" aria-label="Remove ${entry.name} from basket">Remove</button> <!-- Accessible remove button -->
        `; // Finishes the template literal

        const removeBtn = li.querySelector(".remove-item-btn"); // Finds the Remove button inside this new list item
        removeBtn.addEventListener("click", function() { // Listens for a click on the Remove button
            removeFromBasket(entry.uid); // Calls removeFromBasket with this item's unique ID
        }); // Closes the Remove button event listener

        basketList.appendChild(li); // Appends the list item to the basket <ul> on the page
    }); // Closes the basket.forEach loop

    basketTotal.innerHTML = `&pound;${runningTotal.toFixed(2)}`; // Updates the total price on screen formatted to 2 decimal places
    if (basketCalories) { // Checks that the calorie counter element exists
        basketCalories.textContent = `${runningCalories} kcal`; // Updates the total basket calories display
    } // Closes the basketCalories check
} // Closes the updateBasketUI function

// ==================== 6. MENU CATEGORY FILTERS & SEARCH (INDEX.HTML) ==================== // Section comment for filtering the menu on index.html
const filterButtons = document.querySelectorAll(".filter-btn:not(.nutrition-filter-btn)"); // Selects category filter buttons on the Pre-Order page
filterButtons.forEach(function(btn) { // Loops through each filter button
    btn.addEventListener("click", function() { // Listens for a click on a filter button
        filterButtons.forEach(function(b) { // Loops through all filter buttons to reset their active state
            b.classList.remove("active"); // Removes the "active" highlight class from all filter buttons
        }); // Closes the inner reset loop
        btn.classList.add("active"); // Adds the "active" highlight class to the clicked button
        activeCategory = btn.getAttribute("data-category"); // Updates the activeCategory state variable
        renderMenu(); // Redraws the menu grid showing only the selected category
    }); // Closes the filter button click listener
}); // Closes the filterButtons loop

if (menuSearchInput) { // Checks if the live menu search box exists on the current page (index.html)
    menuSearchInput.addEventListener("input", function() { // Listens for every keystroke in the search input
        menuSearchQuery = menuSearchInput.value; // Updates the menuSearchQuery state variable
        renderMenu(); // Redraws the menu cards immediately to match the search text
    }); // Closes the search input listener
} // Closes the menuSearchInput check

// ==================== 7. NUTRITION & ALLERGENS PAGE RENDERING (NUTRITION.HTML) ==================== // Section comment for populating nutrition.html
function renderNutritionPage() { // Defines a function to populate both the nutrition table and ingredient cards on nutrition.html
    if (!nutritionTableBody || !nutritionCardsGrid) { // Checks if we are on a page other than nutrition.html
        return; // Exits safely if the nutrition containers do not exist on this page
    } // Closes the safety check

    nutritionTableBody.innerHTML = ""; // Clears existing rows in the nutrition table body
    nutritionCardsGrid.innerHTML = ""; // Clears existing cards in the ingredient cards grid

    const filteredNutritionItems = menuItems.filter(function(item) { // Filters menuItems by the active dietary button and search box
        let matchesDiet = true; // Starts assuming the item matches the dietary filter
        if (activeNutritionDiet === "Vegan") { // Checks if the user clicked "Vegan Suitable"
            matchesDiet = item.dietaryTags.includes("Vegan"); // Keeps only items tagged Vegan
        } else if (activeNutritionDiet === "Nut-Free") { // Checks if the user clicked "Nut-Free"
            matchesDiet = item.dietaryTags.includes("Nut-Free"); // Keeps only items tagged Nut-Free
        } else if (activeNutritionDiet === "Low Calorie") { // Checks if the user clicked "Under 250 kcal"
            matchesDiet = item.calories < 250; // Keeps only items with fewer than 250 calories
        } else if (activeNutritionDiet === "Caffeine-Free") { // Checks if the user clicked "Caffeine-Free / Food"
            matchesDiet = item.caffeineMg === 0; // Keeps only items with 0mg caffeine
        } // Closes the dietary filter checks

        const query = nutritionSearchQuery.toLowerCase().trim(); // Normalises the nutrition search query to lowercase
        const matchesSearch = (query === "") || // True if the search input is empty
            item.name.toLowerCase().includes(query) || // Matches item name
            item.ingredients.toLowerCase().includes(query) || // Matches full ingredients list
            item.allergens.join(" ").toLowerCase().includes(query) || // Matches allergen names
            item.dietaryTags.join(" ").toLowerCase().includes(query) || // Matches dietary tags
            item.origin.toLowerCase().includes(query); // Matches sourcing origin

        return matchesDiet && matchesSearch; // Keeps the item if it satisfies both filters
    }); // Closes the filter callback

    if (filteredNutritionItems.length === 0) { // Checks if no items matched the filter/search
        nutritionTableBody.innerHTML = `<tr><td colspan="8" class="empty-basket-msg">No items matched your search or dietary filter.</td></tr>`; // Shows empty message in table
        return; // Exits early
    } // Closes the empty check

    filteredNutritionItems.forEach(function(item) { // Loops through each matching item to build its table row and ingredient card
        let badgesHtml = ""; // Builds the dietary and allergen pills HTML string
        item.dietaryTags.forEach(function(tag) { // Loops through all dietary tags for this item
            badgesHtml += `<span class="dietary-pill">${tag}</span> `; // Adds a green dietary badge
        }); // Closes dietaryTags loop
        badgesHtml += `<span class="allergen-pill">Allergens: ${item.allergens.join(", ")}</span>`; // Adds the amber allergen pill

        const tr = document.createElement("tr"); // Creates a new table row <tr> for the macronutrient table
        tr.innerHTML = ` // Populates the 8 table cells for this item
            <td><strong>${item.icon} ${item.name}</strong><br><small>${item.category} &bull; &pound;${item.price.toFixed(2)}</small></td> <!-- Cell 1: Item name & category -->
            <td><strong>${item.calories} kcal</strong><br><small>${item.kj} kJ</small></td> <!-- Cell 2: Energy in kcal and kJ -->
            <td>${item.protein}</td> <!-- Cell 3: Protein -->
            <td>${item.carbs}<br><small>(Sugars: ${item.sugars})</small></td> <!-- Cell 4: Carbs and sugars -->
            <td>${item.fat}<br><small>(Sat: ${item.satFat})</small></td> <!-- Cell 5: Fat and saturated fat -->
            <td>Fibre: ${item.fibre}<br><small>Salt: ${item.salt}</small></td> <!-- Cell 6: Fibre and salt -->
            <td>${item.caffeineMg > 0 ? item.caffeineMg + " mg" : "0 mg (Caffeine-Free)"}</td> <!-- Cell 7: Caffeine -->
            <td><div class="badge-row">${badgesHtml}</div></td> <!-- Cell 8: Dietary & allergen badges -->
        `; // Finishes table row HTML
        nutritionTableBody.appendChild(tr); // Appends the row into the nutrition table body

        const card = document.createElement("article"); // Creates a detailed ingredient card <article>
        card.className = "lesson-card"; // Reuses the clean card styling
        card.innerHTML = ` // Populates the ingredient breakdown card
            <div> <!-- Top wrapper for card details -->
                <div class="lesson-tag">${item.category} &bull; ${item.calories} kcal</div> <!-- Category and calorie pill -->
                <h3>${item.icon} ${item.name}</h3> <!-- Item heading -->
                <div class="badge-row">${badgesHtml}</div> <!-- Dietary and allergen badges -->
                <ul class="lesson-meta"> <!-- List of sourcing, ingredients, and cross-contamination details -->
                    <li><strong>Sourcing Origin:</strong> ${item.origin}</li> <!-- Origin info -->
                    <li><strong>Full Ingredients:</strong> ${item.ingredients}</li> <!-- Full Natasha's Law ingredient list -->
                    <li><strong>Allergen &amp; Kitchen Note:</strong> ${item.crossContamNote}</li> <!-- Cross-contamination advice -->
                </ul> <!-- Closes metadata list -->
            </div> <!-- Closes top wrapper -->
            <a href="index.html" class="secondary-btn" style="text-align:center; text-decoration:none;">Pre-Order This Item (&pound;${item.price.toFixed(2)})</a> <!-- Link to order this item on index.html -->
        `; // Finishes card HTML
        nutritionCardsGrid.appendChild(card); // Appends the card into the ingredient cards grid
    }); // Closes the filteredNutritionItems loop
} // Closes the renderNutritionPage function

const nutritionFilterBtns = document.querySelectorAll(".nutrition-filter-btn"); // Selects dietary filter buttons on nutrition.html
nutritionFilterBtns.forEach(function(btn) { // Loops through each dietary filter button
    btn.addEventListener("click", function() { // Listens for clicks on a dietary filter button
        nutritionFilterBtns.forEach(function(b) { // Loops through all dietary buttons to remove active state
            b.classList.remove("active"); // Removes the "active" class
        }); // Closes inner loop
        btn.classList.add("active"); // Highlights the clicked dietary button
        activeNutritionDiet = btn.getAttribute("data-diet"); // Updates the activeNutritionDiet filter state
        renderNutritionPage(); // Redraws the nutrition table and ingredient cards
    }); // Closes click listener
}); // Closes nutritionFilterBtns loop

if (nutritionSearchInput) { // Checks if the nutrition search input exists on the page (nutrition.html)
    nutritionSearchInput.addEventListener("input", function() { // Listens for typing in the nutrition search bar
        nutritionSearchQuery = nutritionSearchInput.value; // Updates the nutritionSearchQuery state variable
        renderNutritionPage(); // Immediately filters both the table and ingredient cards
    }); // Closes the input listener
} // Closes the nutritionSearchInput check

// ==================== 8. CAFÉ BRANCH SELECTOR SYNC (ACROSS ALL 4 PAGES) ==================== // Section comment for syncing the chosen café location
const savedBranch = localStorage.getItem("beanBrewBranch"); // Checks if the customer previously selected a café branch on another page
if (savedBranch && branchSelect) { // If a saved branch exists and the dropdown is present
    branchSelect.value = savedBranch; // Sets the header dropdown to the saved café branch
} // Closes the savedBranch check

function syncBranchLabels() { // Helper function to update all branch name labels on the current page
    if (!branchSelect) { // Safety check if branchSelect is missing
        return; // Exits early
    } // Closes safety check
    if (currentBranchLabel) { // Checks if the main branch label exists on the page
        currentBranchLabel.textContent = branchSelect.value; // Updates the main branch text label
    } // Closes currentBranchLabel check
    if (branchStripName) { // Checks if the info strip branch label exists on the page
        branchStripName.textContent = branchSelect.value; // Updates the info strip branch name
    } // Closes branchStripName check
} // Closes syncBranchLabels function

syncBranchLabels(); // Runs immediately on page load so all branch labels match the selected branch

if (branchSelect) { // Checks that the branch selector dropdown exists
    branchSelect.addEventListener("change", function() { // Listens for when the user selects a different café branch in the header
        localStorage.setItem("beanBrewBranch", branchSelect.value); // Saves the chosen branch in localStorage so all pages remember it
        syncBranchLabels(); // Updates the branch labels on the current page
    }); // Closes the branchSelect change listener
} // Closes the branchSelect check

// ==================== 9. TABLE SEATING ZONE & BAKING LESSON QUICK-SELECTS ==================== // Section comment for card quick-select buttons
const selectZoneButtons = document.querySelectorAll(".select-zone-btn"); // Selects all "Choose This Seating Zone" buttons on table.html
const tableAreaSelect = document.getElementById("table-area"); // Finds the seating preference dropdown on table.html

selectZoneButtons.forEach(function(btn) { // Loops through each seating zone card button
    btn.addEventListener("click", function() { // Listens for a click on "Choose This Seating Zone"
        const zoneName = btn.getAttribute("data-zone"); // Reads the zone name stored in the button's data-zone attribute
        if (tableAreaSelect) { // Checks that the seating dropdown exists on this page
            tableAreaSelect.value = zoneName; // Automatically selects that seating zone in the reservation form
            tableAreaSelect.focus(); // Moves keyboard focus smoothly down to the seating dropdown field
        } // Closes tableAreaSelect check
    }); // Closes click listener
}); // Closes selectZoneButtons loop

const selectLessonButtons = document.querySelectorAll(".select-lesson-btn"); // Selects all "Select This Lesson" buttons on baking.html
const bakingClassSelect = document.getElementById("baking-class-select"); // Finds the workshop dropdown in the baking booking form
const bakingParticipantsInput = document.getElementById("baking-participants"); // Finds the number of places input on baking.html
const bakingPriceEstimate = document.getElementById("baking-price-estimate"); // Finds the live total price display on baking.html

function updateBakingPriceEstimate() { // Calculates and updates the live total cost for a baking workshop booking
    if (!bakingClassSelect || !bakingParticipantsInput || !bakingPriceEstimate) { // Checks if we are on baking.html
        return; // Exits safely if not on baking.html
    } // Closes safety check
    const selectedOption = bakingClassSelect.options[bakingClassSelect.selectedIndex]; // Gets the currently selected <option> element
    const unitPrice = parseFloat(selectedOption.getAttribute("data-price")) || 45; // Reads the per-person price from data-price
    const places = parseInt(bakingParticipantsInput.value, 10) || 1; // Reads the number of places chosen (defaults to 1)
    const totalCost = unitPrice * places; // Multiplies unit price by number of participants
    bakingPriceEstimate.innerHTML = `&pound;${totalCost.toFixed(2)} (${places} &times; &pound;${unitPrice.toFixed(2)})`; // Displays the formatted total and breakdown
} // Closes updateBakingPriceEstimate function

selectLessonButtons.forEach(function(btn) { // Loops through each workshop card button on baking.html
    btn.addEventListener("click", function() { // Listens for a click on "Select This Lesson"
        const lessonName = btn.getAttribute("data-lesson"); // Reads the workshop name stored in data-lesson
        if (bakingClassSelect) { // Checks that the workshop dropdown exists
            bakingClassSelect.value = lessonName; // Selects that workshop in the form dropdown below
            updateBakingPriceEstimate(); // Updates the live workshop price total immediately
            bakingClassSelect.focus(); // Moves keyboard and screen focus smoothly down to the workshop form field
        } // Closes bakingClassSelect check
    }); // Closes click listener
}); // Closes selectLessonButtons loop

if (bakingClassSelect && bakingParticipantsInput) { // Checks if the baking form inputs exist on the current page
    bakingClassSelect.addEventListener("change", updateBakingPriceEstimate); // Recalculates total when the user changes the workshop dropdown
    bakingParticipantsInput.addEventListener("input", updateBakingPriceEstimate); // Recalculates total when the user changes the number of places
    updateBakingPriceEstimate(); // Runs once on page load to show the initial price breakdown
} // Closes the baking price listeners check

// ==================== 10. CONFIRMATION BANNER HELPER ==================== // Section comment for showing accessible status notifications
function showConfirmation(messageText) { // Defines a helper function to display a green confirmation message
    statusMessage.textContent = messageText; // Inserts the confirmation text into the banner paragraph
    statusBanner.classList.remove("hidden"); // Makes the status banner visible
    statusBanner.scrollIntoView({ behavior: "smooth", block: "center" }); // Scrolls the page smoothly so the user sees the confirmation
} // Closes the showConfirmation function

if (closeBannerBtn) { // Checks that the dismiss notification button exists on the page
    closeBannerBtn.addEventListener("click", function() { // Listens for a click on the "Dismiss Notification" button
        statusBanner.classList.add("hidden"); // Hides the confirmation banner when dismissed
    }); // Closes the closeBannerBtn listener
} // Closes the closeBannerBtn check

// ==================== 11. FORM SUBMISSIONS (ORDER, TABLE, BAKING) ==================== // Section comment for handling the 3 forms across pages
const checkoutForm = document.getElementById("checkout-form"); // Finds the Pre-Order collection checkout form (on index.html)
if (checkoutForm) { // Checks if the Pre-Order checkout form is on the current page
    checkoutForm.addEventListener("submit", function(event) { // Listens for when the user submits the Pre-Order form
        event.preventDefault(); // Prevents the browser from reloading the webpage on form submit

        if (basket.length === 0) { // Checks if the user tried to submit an empty basket
            showConfirmation("⚠️ Your collection basket is empty! Please add at least one drink or bakery item before ordering."); // Warns the user
            return; // Stops form submission
        } // Closes the empty basket check

        const customerName = document.getElementById("order-name").value; // Reads the customer's name from the form
        const pickupTime = document.getElementById("pickup-time").value; // Reads the chosen collection time slot
        const cupChoice = document.getElementById("cup-choice").value; // Reads the chosen cup/packaging preference
        const branch = branchSelect.value; // Reads the currently selected Bean & Brew café branch
        const itemCount = basket.length; // Counts how many items were ordered
        const orderRef = "BB-" + Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit collection order reference number

        showConfirmation(`✅ Pre-Order Confirmed (Ref: ${orderRef})! Thank you, ${customerName}. Your ${itemCount} item(s) (${cupChoice}) will be freshly prepared at Bean & Brew ${branch} for collection ${pickupTime}.`); // Displays personalised confirmation

        basket = []; // Empties the basket array after a successful order
        saveBasket(); // Clears the saved basket in localStorage
        updateBasketUI(); // Resets the basket UI back to empty (£0.00 and 0 kcal)
        checkoutForm.reset(); // Clears the text inputs in the checkout form
    }); // Closes the checkoutForm submit listener
} // Closes the checkoutForm check

const tableBookingForm = document.getElementById("table-booking-form"); // Finds the Table Reservation form (on table.html)
if (tableBookingForm) { // Checks if the Table Reservation form is on the current page
    tableBookingForm.addEventListener("submit", function(event) { // Listens for when the user submits a table reservation
        event.preventDefault(); // Prevents page reload

        const guestName = document.getElementById("table-name").value; // Reads the guest's name
        const visitDate = document.getElementById("table-date").value; // Reads the chosen date
        const visitTime = document.getElementById("table-time").value; // Reads the chosen time slot
        const duration = document.getElementById("table-duration").value; // Reads the chosen stay duration
        const guests = document.getElementById("table-guests").value; // Reads the number of guests
        const area = document.getElementById("table-area").value; // Reads the chosen seating zone
        const branch = branchSelect.value; // Reads the chosen café branch
        const checkedAccess = Array.from(document.querySelectorAll('input[name="table-access"]:checked')).map(function(cb) { // Finds all ticked accessibility checkboxes
            return cb.value; // Extracts the text value of each ticked checkbox
        }); // Closes checkbox array mapping
        const accessNote = checkedAccess.length > 0 ? ` Access arrangements noted: ${checkedAccess.join(", ")}.` : ""; // Formats access note if any boxes were ticked
        const bookingRef = "TBL-" + Math.floor(1000 + Math.random() * 9000); // Generates a unique table booking reference

        showConfirmation(`✅ Table Reserved (Ref: ${bookingRef})! We look forward to welcoming ${guestName} (Party of ${guests}, ${duration}) to Bean & Brew ${branch} on ${visitDate} at ${visitTime} in the ${area}.${accessNote}`); // Shows confirmation message
        tableBookingForm.reset(); // Clears the table booking form fields
    }); // Closes the tableBookingForm submit listener
} // Closes the tableBookingForm check

const bakingBookingForm = document.getElementById("baking-booking-form"); // Finds the Baking Lesson booking form (on baking.html)
if (bakingBookingForm) { // Checks if the Baking Lesson form is on the current page
    bakingBookingForm.addEventListener("submit", function(event) { // Listens for when the user submits a baking lesson booking
        event.preventDefault(); // Prevents page reload

        const participantName = document.getElementById("baking-name").value; // Reads the participant's name
        const chosenClass = document.getElementById("baking-class-select").value; // Reads the selected baking workshop
        const classDate = document.getElementById("baking-date").value; // Reads the chosen workshop date
        const places = document.getElementById("baking-participants").value; // Reads how many places were booked
        const level = document.getElementById("baking-experience").value; // Reads the participant's experience level
        const branch = branchSelect.value; // Reads the chosen café branch
        const checkedAdjustments = Array.from(document.querySelectorAll('input[name="baking-access"]:checked')).map(function(cb) { // Finds all ticked workstation checkboxes
            return cb.value; // Extracts the text value of each ticked checkbox
        }); // Closes checkbox array mapping
        const adjustmentNote = checkedAdjustments.length > 0 ? ` Workstation setup: ${checkedAdjustments.join(", ")}.` : ""; // Formats workstation setup note
        const classRef = "BAKE-" + Math.floor(1000 + Math.random() * 9000); // Generates a unique baking booking reference

        showConfirmation(`✅ Baking Lesson Booked (Ref: ${classRef})! ${participantName} (${level}), we have reserved ${places} place(s) for "${chosenClass}" on ${classDate} at our ${branch} Bakery School.${adjustmentNote}`); // Shows confirmation message
        bakingBookingForm.reset(); // Clears the baking lesson form fields
        updateBakingPriceEstimate(); // Resets the live price estimate display back to 1 place
    }); // Closes the bakingBookingForm submit listener
} // Closes the bakingBookingForm check

// ==================== 12. EXPANDED ACCESSIBILITY TOOLBAR CONTROLS (6 FEATURES) ==================== // Section comment for all 6 accessibility controls
function applySavedAccessibilitySettings() { // Restores all saved accessibility modes from localStorage when any page loads
    const isHighContrast = localStorage.getItem("beanBrewHighContrast") === "true"; // Checks if High Contrast mode is saved as true
    document.body.classList.toggle("high-contrast", isHighContrast); // Applies or removes the "high-contrast" class on <body>
    if (contrastToggleBtn) { // Checks that the High Contrast button exists
        contrastToggleBtn.setAttribute("aria-pressed", isHighContrast.toString()); // Syncs the ARIA state for screen readers
    } // Closes contrastToggleBtn check

    const isLargeText = localStorage.getItem("beanBrewLargeText") === "true"; // Checks if Large Text mode is saved as true
    document.documentElement.classList.toggle("large-text", isLargeText); // Applies or removes the "large-text" class on <html>
    if (textSizeToggleBtn) { // Checks that the Large Text button exists
        textSizeToggleBtn.setAttribute("aria-pressed", isLargeText.toString()); // Syncs the ARIA state
    } // Closes textSizeToggleBtn check

    const isDyslexia = localStorage.getItem("beanBrewDyslexia") === "true"; // Checks if Dyslexia Font mode is saved as true
    document.body.classList.toggle("dyslexia-mode", isDyslexia); // Applies or removes the "dyslexia-mode" class on <body>
    if (dyslexiaToggleBtn) { // Checks that the Dyslexia Font button exists
        dyslexiaToggleBtn.setAttribute("aria-pressed", isDyslexia.toString()); // Syncs the ARIA state
    } // Closes dyslexiaToggleBtn check

    const isReduceMotion = localStorage.getItem("beanBrewReduceMotion") === "true"; // Checks if Reduce Motion mode is saved as true
    document.body.classList.toggle("reduce-motion", isReduceMotion); // Applies or removes the "reduce-motion" class on <body>
    if (motionToggleBtn) { // Checks that the Reduce Motion button exists
        motionToggleBtn.setAttribute("aria-pressed", isReduceMotion.toString()); // Syncs the ARIA state
    } // Closes motionToggleBtn check
} // Closes applySavedAccessibilitySettings function

applySavedAccessibilitySettings(); // Applies saved accessibility preferences immediately when the script loads

if (contrastToggleBtn) { // Checks that the High Contrast button exists
    contrastToggleBtn.addEventListener("click", function() { // Listens for clicks on the High Contrast button
        const isHighContrast = document.body.classList.toggle("high-contrast"); // Toggles the "high-contrast" CSS class on <body>
        contrastToggleBtn.setAttribute("aria-pressed", isHighContrast.toString()); // Updates aria-pressed ("true" or "false")
        localStorage.setItem("beanBrewHighContrast", isHighContrast.toString()); // Saves preference across all 4 pages
    }); // Closes High Contrast click listener
} // Closes contrastToggleBtn check

if (textSizeToggleBtn) { // Checks that the Large Text button exists
    textSizeToggleBtn.addEventListener("click", function() { // Listens for clicks on the Large Text button
        const isLargeText = document.documentElement.classList.toggle("large-text"); // Toggles the "large-text" CSS class on <html>
        textSizeToggleBtn.setAttribute("aria-pressed", isLargeText.toString()); // Updates aria-pressed ("true" or "false")
        localStorage.setItem("beanBrewLargeText", isLargeText.toString()); // Saves preference across all 4 pages
    }); // Closes Large Text click listener
} // Closes textSizeToggleBtn check

if (dyslexiaToggleBtn) { // Checks that the Dyslexia Font button exists
    dyslexiaToggleBtn.addEventListener("click", function() { // Listens for clicks on the Dyslexia Font button
        const isDyslexia = document.body.classList.toggle("dyslexia-mode"); // Toggles the "dyslexia-mode" CSS class on <body>
        dyslexiaToggleBtn.setAttribute("aria-pressed", isDyslexia.toString()); // Updates aria-pressed ("true" or "false")
        localStorage.setItem("beanBrewDyslexia", isDyslexia.toString()); // Saves preference across all 4 pages
    }); // Closes Dyslexia Font click listener
} // Closes dyslexiaToggleBtn check

if (motionToggleBtn) { // Checks that the Reduce Motion button exists
    motionToggleBtn.addEventListener("click", function() { // Listens for clicks on the Reduce Motion button
        const isReduceMotion = document.body.classList.toggle("reduce-motion"); // Toggles the "reduce-motion" CSS class on <body>
        motionToggleBtn.setAttribute("aria-pressed", isReduceMotion.toString()); // Updates aria-pressed ("true" or "false")
        localStorage.setItem("beanBrewReduceMotion", isReduceMotion.toString()); // Saves preference across all 4 pages
    }); // Closes Reduce Motion click listener
} // Closes motionToggleBtn check

if (ttsToggleBtn) { // Checks that the Read Page Aloud (Text-to-Speech) button exists
    ttsToggleBtn.addEventListener("click", function() { // Listens for clicks on the Read Page Aloud button
        if (!("speechSynthesis" in window)) { // Checks if the user's browser supports the Web Speech API
            showConfirmation("⚠️ Sorry, your current web browser does not support built-in Text-to-Speech audio."); // Informs the user if unsupported
            return; // Exits early
        } // Closes browser support check

        if (window.speechSynthesis.speaking) { // Checks if the browser is currently reading aloud
            window.speechSynthesis.cancel(); // Stops the speech audio immediately
            ttsToggleBtn.setAttribute("aria-pressed", "false"); // Resets the button ARIA state to false
            ttsToggleBtn.textContent = "Read Page Aloud"; // Restores the original button label
            return; // Exits after stopping speech
        } // Closes active speech check

        const headingEl = document.getElementById("page-heading"); // Finds the main heading of the current page
        const introParagraph = document.querySelector(".section-intro p"); // Finds the introductory description paragraph
        const branchName = branchSelect ? branchSelect.value : "Harrogate Central"; // Gets the active café branch name
        const textToRead = `Bean and Brew Café, ${branchName} branch. ${headingEl ? headingEl.textContent : ""}. ${introParagraph ? introParagraph.textContent : ""}`; // Combines the key page information into a clear spoken summary

        const utterance = new SpeechSynthesisUtterance(textToRead); // Creates a new speech request with the page summary text
        utterance.lang = "en-GB"; // Sets British English pronunciation
        utterance.rate = 0.95; // Sets a clear, slightly measured speaking pace
        utterance.onend = function() { // Runs automatically when the browser finishes reading the text aloud
            ttsToggleBtn.setAttribute("aria-pressed", "false"); // Resets aria-pressed to false
            ttsToggleBtn.textContent = "Read Page Aloud"; // Restores the button text
        }; // Closes onend callback

        ttsToggleBtn.setAttribute("aria-pressed", "true"); // Marks the button as active while speaking
        ttsToggleBtn.textContent = "Stop Reading"; // Changes button text so the user knows clicking again will stop audio
        window.speechSynthesis.speak(utterance); // Starts speaking the page summary aloud through the user's speakers
    }); // Closes Read Page Aloud click listener
} // Closes ttsToggleBtn check

if (resetA11yBtn) { // Checks that the Reset Access button exists
    resetA11yBtn.addEventListener("click", function() { // Listens for clicks on Reset Access
        localStorage.removeItem("beanBrewHighContrast"); // Clears saved High Contrast setting
        localStorage.removeItem("beanBrewLargeText"); // Clears saved Large Text setting
        localStorage.removeItem("beanBrewDyslexia"); // Clears saved Dyslexia Font setting
        localStorage.removeItem("beanBrewReduceMotion"); // Clears saved Reduce Motion setting
        if ("speechSynthesis" in window) { // Checks if Web Speech API is available
            window.speechSynthesis.cancel(); // Stops any active speech playback
        } // Closes speech check
        if (ttsToggleBtn) { // Checks if the Read Page Aloud button exists
            ttsToggleBtn.setAttribute("aria-pressed", "false"); // Resets Read Page Aloud ARIA state
            ttsToggleBtn.textContent = "Read Page Aloud"; // Restores Read Page Aloud label
        } // Closes ttsToggleBtn check
        applySavedAccessibilitySettings(); // Resets all visual accessibility classes and button states back to default
    }); // Closes Reset Access click listener
} // Closes resetA11yBtn check

// ==================== 13. INITIALISE PAGE ON LOAD ==================== // Section comment for initial page setup
const todayIsoString = new Date().toISOString().split("T")[0]; // Gets today's date in YYYY-MM-DD format so users cannot book dates in the past
const tableDateInput = document.getElementById("table-date"); // Looks for the Table Booking date picker (on table.html)
if (tableDateInput) { // Checks if the Table Booking date picker is on the current page
    tableDateInput.setAttribute("min", todayIsoString); // Sets the minimum selectable date on the Table Booking calendar
} // Closes the tableDateInput check

const bakingDateInput = document.getElementById("baking-date"); // Looks for the Baking Lesson date picker (on baking.html)
if (bakingDateInput) { // Checks if the Baking Lesson date picker is on the current page
    bakingDateInput.setAttribute("min", todayIsoString); // Sets the minimum selectable date on the Baking Lesson calendar
} // Closes the bakingDateInput check

updateBasketUI(); // Restores the basket items, total calories, and navigation badge counter from localStorage when any page loads
renderMenu(); // Renders the 10 drink and food menu cards if we are on the Pre-Order page (index.html)
renderNutritionPage(); // Renders the macronutrient table and ingredient cards if we are on the Nutrition page (nutrition.html)
