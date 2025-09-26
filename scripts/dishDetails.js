// scripts/dishDetails.js

/**
 * Dish Details Management
 * Handles the detailed view of dishes with sophisticated Barranquilla cuisine information
 */

class DishDetailsManager {
  constructor() {
    this.dishes = this.initializeDishes();
  }

  initializeDishes() {
    return {
      'cazuela-de-mariscos': {
        image: 'images/dishes/cazuela-mariscos.jpg',
        id: 'cazuela-de-mariscos',
        name: 'Cazuela de Mariscos Ivory',
        price: 45,
        category: 'Seafood Specialties',
        preparationTime: '25-30 minutes',
        servingSize: '2-3 people',
        spiceLevel: 'Medium',
        shortDescription: 'Premium seafood casserole with coastal spices',
        fullDescription: 'Our signature Cazuela de Mariscos represents the pinnacle of Caribbean coastal cuisine. This luxurious seafood casserole features the finest daily catches from Barranquilla\'s waters, including succulent shrimp, tender crab meat, and fresh mussels. Slowly simmered in a rich coconut broth infused with saffron and aromatic coastal spices, each spoonful delivers layers of complex flavors that dance on your palate. Served with our house-made coconut rice and warm artisanal bread.',
        ingredients: [
          'Fresh Caribbean jumbo shrimp (200g)',
          'Local blue crab meat (150g)',
          'Mediterranean mussels (300g)',
          'Premium coconut cream',
          'Spanish saffron threads',
          'Coastal herb blend (cilantro, oregano, thyme)',
          'Dry white wine',
          'Aromatic jasmine rice',
          'Sofrito base (onions, garlic, peppers)',
          'Fresh lime juice'
        ],
        nutritionalInfo: {
          calories: 485,
          protein: '38g',
          carbs: '32g',
          fat: '22g',
          fiber: '4g',
          sodium: '1200mg'
        },
        allergens: ['Shellfish', 'Fish'],
        dietaryOptions: ['Gluten-free available'],
        wineParings: [
          'Chardonnay - Enhances the coconut flavors',
          'Albariño - Complements the seafood',
          'Champagne - Elevates the dining experience'
        ],
        chefNotes: 'Our head chef recommends pairing this dish with our house-made plantain chips and a crisp white wine. The secret lies in the slow-simmering technique that allows the seafood flavors to meld perfectly with the coconut base.',
        origin: 'Inspired by traditional Barranquilla coastal cooking, elevated with modern culinary techniques.'
      },

      'pargo-rojo-grillado': {
        image: 'images/dishes/pargo-rojo.jpg',
        id: 'pargo-rojo-grillado',
        name: 'Pargo Rojo Grillado Caribe',
        price: 38,
        category: 'Grilled Specialties',
        preparationTime: '20-25 minutes',
        servingSize: '1 person',
        spiceLevel: 'Mild',
        shortDescription: 'Grilled red snapper with Caribbean herbs',
        fullDescription: 'Our Pargo Rojo Grillado showcases the natural flavors of fresh red snapper, expertly grilled over aromatic wood charcoal. The fish is marinated in our signature blend of Caribbean herbs and spices, creating a perfect balance of smoky and tropical flavors. Accompanied by perfectly caramelized plantains, fragrant coconut rice, and our vibrant house-made mango salsa that captures the essence of Barranquilla\'s tropical abundance.',
        ingredients: [
          'Fresh red snapper fillet (300g)',
          'Caribbean herb marinade',
          'Sweet plantains',
          'Coconut jasmine rice',
          'Fresh mango chunks',
          'Red onion julienne',
          'Fresh cilantro',
          'Lime zest and juice',
          'Extra virgin olive oil',
          'Sea salt and black pepper'
        ],
        nutritionalInfo: {
          calories: 420,
          protein: '45g',
          carbs: '28g',
          fat: '16g',
          fiber: '5g',
          sodium: '680mg'
        },
        allergens: ['Fish'],
        dietaryOptions: ['Naturally gluten-free', 'High in Omega-3'],
        wineParings: [
          'Sauvignon Blanc - Crisp acidity complements the fish',
          'Rosé - Perfect summer pairing',
          'Light Pinot Grigio - Enhances the tropical flavors'
        ],
        chefNotes: 'The key to this dish is the perfect char on the snapper while keeping the inside moist and flaky. We recommend letting the fish rest for 5 minutes after grilling to ensure optimal texture.',
        origin: 'A modern interpretation of traditional Caribbean grilled fish, featuring techniques passed down through generations of coastal fishermen.'
      },

      'arroz-con-coco-negro': {
        image: 'images/dishes/arroz-coco-negro.jpg',
        id: 'arroz-con-coco-negro',
        name: 'Arroz con Coco Negro Gourmet',
        price: 28,
        category: 'Traditional Elevated',
        preparationTime: '35-40 minutes',
        servingSize: '2-3 people',
        spiceLevel: 'Mild',
        shortDescription: 'Black coconut rice with premium ingredients',
        fullDescription: 'Our elevated version of the beloved coastal classic transforms simple ingredients into a sophisticated culinary experience. Premium jasmine rice is slowly cooked in rich black coconut milk, creating a striking visual presentation and deep, complex flavors. Enhanced with caramelized pearl onions, topped with house-made plantain chips, and finished with toasted coconut flakes for textural contrast that tells the story of Barranquilla\'s culinary heritage.',
        ingredients: [
          'Premium jasmine rice (200g)',
          'Black coconut milk',
          'Caramelized pearl onions',
          'Crispy plantain chips',
          'Toasted coconut flakes',
          'Himalayan sea salt',
          'Fresh coastal herbs',
          'Spiced coconut oil',
          'Brown sugar',
          'Lime zest'
        ],
        nutritionalInfo: {
          calories: 340,
          protein: '8g',
          carbs: '52g',
          fat: '18g',
          fiber: '6g',
          sodium: '420mg'
        },
        allergens: ['Tree nuts (coconut)'],
        dietaryOptions: ['Vegan', 'Gluten-free', 'High in fiber'],
        wineParings: [
          'Moscato - Sweet complement to coconut',
          'Riesling - Balances the richness',
          'Coconut water cocktail - Traditional pairing'
        ],
        chefNotes: 'The secret to perfect black coconut rice is patience. We slowly reduce fresh coconut milk until it caramelizes, creating the signature dark color and intense flavor.',
        origin: 'Rooted in Afro-Caribbean traditions, this dish represents the cultural fusion that defines Barranquilla\'s gastronomic identity.'
      },

      'ceviche-tropical': {
        image: 'images/dishes/ceviche-tropical.jpg',
        id: 'ceviche-tropical',
        name: 'Ceviche Tropical Ivory',
        price: 32,
        category: 'Fresh & Light',
        preparationTime: '15-20 minutes',
        servingSize: '2 people',
        spiceLevel: 'Medium',
        shortDescription: 'Fresh seafood marinated in tropical citrus',
        fullDescription: 'Our signature Ceviche Tropical celebrates the abundance of the Caribbean coast with the freshest white fish, "cooked" to perfection in a zesty blend of tropical citrus juices. Combined with chunks of ripe mango, creamy avocado, and crisp red onion, this refreshing dish embodies the vibrant spirit of Barranquilla. Served with our house-made plantain chips and garnished with delicate microgreens for an Instagram-worthy presentation.',
        ingredients: [
          'Fresh white fish (corvina or mahi-mahi) - 250g',
          'Fresh lime juice',
          'Sweet orange juice',
          'Ripe mango chunks',
          'Hass avocado',
          'Red onion julienne',
          'Ají amarillo peppers',
          'Fresh cilantro',
          'Microgreens for garnish',
          'Sea salt and white pepper'
        ],
        nutritionalInfo: {
          calories: 285,
          protein: '28g',
          carbs: '18g',
          fat: '12g',
          fiber: '7g',
          sodium: '320mg'
        },
        allergens: ['Fish'],
        dietaryOptions: ['Gluten-free', 'Low-carb', 'High in protein', 'Keto-friendly'],
        wineParings: [
          'Prosecco - Crisp bubbles enhance freshness',
          'Vermentino - Italian coastal wine',
          'Pisco Sour - Traditional South American pairing'
        ],
        chefNotes: 'The fish must be extremely fresh and cut into precise cubes. The acid "cooks" the protein, so timing is crucial - serve immediately after the fish turns opaque.',
        origin: 'While ceviche originates from Peru, our tropical version incorporates Caribbean ingredients and Barranquilla\'s love for fresh, vibrant flavors.'
      },

      'sancocho-de-gallina': {
        image: 'images/dishes/sancocho-gallina.jpg',
        id: 'sancocho-de-gallina',
        name: 'Sancocho de Gallina Premium',
        price: 35,
        category: 'Heritage Comfort',
        preparationTime: '45-60 minutes',
        servingSize: '3-4 people',
        spiceLevel: 'Mild',
        shortDescription: 'Traditional chicken stew elevated with premium ingredients',
        fullDescription: 'Our refined interpretation of Colombia\'s beloved Sancocho honors tradition while embracing sophistication. Free-range chicken is slow-cooked with premium root vegetables, creating a soul-warming stew that represents the heart of Barranquilla cuisine. Each bowl tells a story of family gatherings and coastal traditions, served with fragrant coconut rice and fresh avocado. This dish embodies comfort, heritage, and the warmth of Colombian hospitality.',
        ingredients: [
          'Free-range chicken pieces (400g)',
          'Yuca root (cassava)',
          'Sweet yellow plantains',
          'Calabaza pumpkin',
          'Fresh corn on the cob',
          'Cilantro and culantro',
          'Coconut rice',
          'Fresh Hass avocado',
          'Sofrito base',
          'Sazón seasoning blend'
        ],
        nutritionalInfo: {
          calories: 520,
          protein: '42g',
          carbs: '45g',
          fat: '20g',
          fiber: '8g',
          sodium: '890mg'
        },
        allergens: ['None (naturally allergen-free)'],
        dietaryOptions: ['Gluten-free', 'High in protein', 'Comfort food'],
        wineParings: [
          'Medium-bodied red wine - Complements the rich broth',
          'Tempranillo - Spanish influence',
          'Traditional Colombian beer - Authentic pairing'
        ],
        chefNotes: 'The soul of sancocho lies in the slow cooking process. We simmer for hours to develop deep flavors and ensure the chicken falls off the bone.',
        origin: 'Sancocho represents the melting pot of Colombian culture, with influences from Indigenous, African, and Spanish culinary traditions.'
      },

      'langostinos-al-ajillo': {
        image: 'images/dishes/langostinos-ajillo.jpg',
        id: 'langostinos-al-ajillo',
        name: 'Langostinos al Ajillo Mediterráneo',
        price: 42,
        category: 'Mediterranean Fusion',
        preparationTime: '12-15 minutes',
        servingSize: '1-2 people',
        spiceLevel: 'Mild',
        shortDescription: 'Garlic prawns with coastal herbs and spices',
        fullDescription: 'Our Langostinos al Ajillo represents a beautiful marriage between Mediterranean technique and Caribbean ingredients. Succulent jumbo prawns are sautéed in the finest Spanish olive oil with slowly roasted garlic, fresh coastal herbs, and a splash of crisp white wine. The simplicity of this dish allows the natural sweetness of the prawns to shine, while the aromatic garlic oil creates an irresistible foundation. Served with warm, crusty artisanal bread and coconut rice.',
        ingredients: [
          'Large Caribbean prawns (300g)',
          'Extra virgin Spanish olive oil',
          'Roasted garlic cloves',
          'Dry white wine (Albariño)',
          'Fresh coastal herbs mix',
          'Crusty sourdough bread',
          'Coconut jasmine rice',
          'Fresh lime wedges',
          'Red pepper flakes',
          'Sea salt and cracked pepper'
        ],
        nutritionalInfo: {
          calories: 395,
          protein: '35g',
          carbs: '15g',
          fat: '22g',
          fiber: '2g',
          sodium: '780mg'
        },
        allergens: ['Shellfish', 'Gluten (bread)'],
        dietaryOptions: ['Low-carb without bread', 'High in protein'],
        wineParings: [
          'Albariño - Perfect Spanish pairing',
          'Chablis - Crisp minerality',
          'Champagne - Luxurious combination'
        ],
        chefNotes: 'The key is not to overcook the prawns - they should be just pink and tender. The garlic should be golden, not brown, to avoid bitterness.',
        origin: 'A Mediterranean classic adapted for Caribbean palates, showcasing the international influences that shape modern Barranquilla cuisine.'
      }
    };
  }

  /**
   * Get dish data by ID
   * @param {string} dishId - The dish identifier
   * @returns {Object|null} Dish data object or null if not found
   */
  getDish(dishId) {
    return this.dishes[dishId] || null;
  }

  /**
   * Get all dishes
   * @returns {Object} All dishes data
   */
  getAllDishes() {
    return this.dishes;
  }

  /**
   * Get dishes by category
   * @param {string} category - Category to filter by
   * @returns {Array} Array of dishes in the category
   */
  getDishesByCategory(category) {
    return Object.values(this.dishes).filter(dish => dish.category === category);
  }

  /**
   * Search dishes by name or ingredients
   * @param {string} query - Search query
   * @returns {Array} Array of matching dishes
   */
  searchDishes(query) {
    const lowercaseQuery = query.toLowerCase();
    return Object.values(this.dishes).filter(dish => 
      dish.name.toLowerCase().includes(lowercaseQuery) ||
      dish.fullDescription.toLowerCase().includes(lowercaseQuery) ||
      dish.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(lowercaseQuery)
      )
    );
  }

  /**
   * Generate detailed HTML for a dish
   * @param {string} dishId - The dish identifier
   * @returns {string} HTML string for dish details
   */
  generateDishDetailHTML(dishId) {
    const dish = this.getDish(dishId);
    if (!dish) {
      return '<div class="dish-detail-error">Dish not found</div>';
    }

    return `
      <div class="dish-detail dish-page-wide">
        <div class="dish-detail-header">
          <div class="dish-detail-image">
            <img src="${dish.image}" alt="${dish.name}" />
          </div>

          <div class="dish-detail-info">
            <div class="dish-category">${dish.category}</div>
            <h1 class="dish-detail-name">${dish.name}</h1>
            <div class="dish-meta">
              <span class="dish-price">$${dish.price}</span>
              <span class="dish-time">⏱️ ${dish.preparationTime}</span>
              <span class="dish-serving">👥 ${dish.servingSize}</span>
              <span class="dish-spice">🌶️ ${dish.spiceLevel}</span>
            </div>
            <p class="lead">${dish.shortDescription}</p>
          </div>
        </div>

        <div class="dish-detail-body">
          <div class="dish-description">
            <h2>Description</h2>
            <p>${dish.fullDescription}</p>
          </div>

          <div class="dish-sections">
            <div class="dish-section">
              <h3>Premium Ingredients</h3>
              <ul class="ingredients-list">
                ${dish.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
              </ul>
            </div>

            <div class="dish-section">
              <h3>Nutritional Information</h3>
              <div class="nutrition-grid">
                ${Object.entries(dish.nutritionalInfo).map(([key, value]) => 
                  `<div class="nutrition-item">
                    <span class="nutrition-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span class="nutrition-value">${value}</span>
                  </div>`
                ).join('')}
              </div>
            </div>

            ${dish.wineParings ? `
              <div class="dish-section">
                <h3>Wine Pairings</h3>
                <ul class="pairing-list">
                  ${dish.wineParings.map(pairing => `<li>${pairing}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <div class="dish-section">
              <h3>Dietary Information</h3>
              <div class="dietary-info">
                <div class="allergens"><strong>Allergens:</strong> ${dish.allergens.length > 0 ? dish.allergens.join(', ') : 'None'}</div>
                <div class="dietary-options"><strong>Options:</strong> ${dish.dietaryOptions.join(', ')}</div>
              </div>
            </div>

            <div class="dish-section chef-section">
              <h3>Chef's Notes</h3>
              <div class="chef-notes"><p><em>"${dish.chefNotes}"</em></p></div>
            </div>

            <div class="dish-section origin-section">
              <h3>Origin & Tradition</h3>
              <div class="dish-origin"><p>${dish.origin}</p></div>
            </div>
          </div>
        </div>

        <div class="dish-detail-footer">
          <div class="dish-actions">
            <button class="btn btn-primary" onclick="DishDetailsManager.addToOrder('${dishId}')">Add to Order</button>
            <button class="btn btn-outline" onclick="DishDetailsManager.shareDish('${dishId}')">Share Dish</button>
            <a class="btn btn-ghost" href="index.html#menu">← Back to Menu</a>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Handle adding dish to order (placeholder for future functionality)
   * @param {string} dishId - The dish identifier
   */
  static addToOrder(dishId) {
    // This would integrate with a ordering system
    UIComponents.showToast({
      type: 'success',
      title: 'Added to Order!',
      message: 'Dish has been added to your order.',
      duration: 3000
    });
    
    console.log(`Added ${dishId} to order`);
  }

  /**
   * Handle sharing dish (placeholder for future functionality)
   * @param {string} dishId - The dish identifier
   */
  static shareDish(dishId) {
    const dish = window.dishManager.getDish(dishId);
    if (!dish) return;

    if (navigator.share) {
      navigator.share({
        title: `${dish.name} - The Ivory Restaurant`,
        text: dish.shortDescription,
        url: `${window.location.origin}/?dish=${dishId}`
      });
    } else {
      // Fallback for browsers without Web Share API
      const url = `${window.location.origin}/?dish=${dishId}`;
      navigator.clipboard.writeText(url).then(() => {
        UIComponents.showToast({
          type: 'success',
          title: 'Link Copied!',
          message: 'Share link copied to clipboard.',
          duration: 3000
        });
      });
    }
  }

  /**
   * Handle saving dish as favorite (placeholder for future functionality)
   * @param {string} dishId - The dish identifier
   */
  static saveFavorite(dishId) {
    // This would integrate with user preferences/local storage
    const favorites = JSON.parse(localStorage.getItem('ivory-favorites') || '[]');
    
    if (favorites.includes(dishId)) {
      const index = favorites.indexOf(dishId);
      favorites.splice(index, 1);
      UIComponents.showToast({
        type: 'info',
        title: 'Removed from Favorites',
        message: 'Dish removed from your favorites.',
        duration: 3000
      });
    } else {
      favorites.push(dishId);
      UIComponents.showToast({
        type: 'success',
        title: 'Added to Favorites!',
        message: 'Dish saved to your favorites.',
        duration: 3000
      });
    }
    
    // In a real app, this would sync with backend
    try {
      localStorage.setItem('ivory-favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
    
    console.log(`Toggled favorite for ${dishId}`, favorites);
  }

  /**
   * Handle image upload for dish (placeholder for future functionality)
   * @param {string} dishId - The dish identifier
   * @param {File} imageFile - The image file
   */
  static uploadDishImage(dishId, imageFile) {
    // This would integrate with an image upload service
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('dishId', dishId);
    
    UIComponents.showLoading('Uploading image...');
    
    // Simulate upload delay
    setTimeout(() => {
      UIComponents.hideLoading();
      UIComponents.showToast({
        type: 'success',
        title: 'Image Uploaded!',
        message: 'Dish image has been updated.',
        duration: 3000
      });
      
      // In a real app, you would update the UI with the new image
      console.log(`Image uploaded for ${dishId}`);
    }, 2000);
  }

  /**
   * Get recommended dishes based on current dish
   * @param {string} currentDishId - Current dish ID
   * @returns {Array} Array of recommended dishes
   */
  getRecommendations(currentDishId) {
    const currentDish = this.getDish(currentDishId);
    if (!currentDish) return [];

    // Simple recommendation logic based on category and price range
    const allDishes = Object.values(this.dishes);
    return allDishes
      .filter(dish => 
        dish.id !== currentDishId && 
        (dish.category === currentDish.category || 
         Math.abs(dish.price - currentDish.price) <= 10)
      )
      .slice(0, 3);
  }
}

// Initialize the dish manager
window.dishManager = new DishDetailsManager();

// Enhanced dish detail functions for global access
function openDishDetail(dishId) {
  const modal = document.getElementById('dish-modal');
  const modalBody = document.getElementById('modal-body');
  
  if (!modal || !modalBody) {
    console.error('Modal elements not found');
    return;
  }

  const dishHTML = window.dishManager.generateDishDetailHTML(dishId);
  modalBody.innerHTML = dishHTML;

  // Add image upload functionality
  const imagePlaceholder = modalBody.querySelector('.image-placeholder');
  if (imagePlaceholder) {
    imagePlaceholder.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          // Preview the image
          const reader = new FileReader();
          reader.onload = (e) => {
            imagePlaceholder.style.backgroundImage = `url(${e.target.result})`;
            imagePlaceholder.style.backgroundSize = 'cover';
            imagePlaceholder.style.backgroundPosition = 'center';
            imagePlaceholder.innerHTML = '';
          };
          reader.readAsDataURL(file);
          
          // Upload the image (placeholder functionality)
          DishDetailsManager.uploadDishImage(dishId, file);
        }
      };
      input.click();
    });
  }

  // Show modal with animation
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDishDetail() {
  const modal = document.getElementById('dish-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DishDetailsManager;
}