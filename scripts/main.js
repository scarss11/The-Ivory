// scripts/main.js

class TheIvoryApp {
  constructor() {
    this.currentPage = 'home';
    this.isMenuOpen = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupScrollEffects();
    this.setupAnimations();
    this.showPage('home');
  }

  setupEventListeners() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        this.navigateToPage(page);
      });
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        this.closeMobileMenu();
      }
    });

    // Modal close events
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDishDetail();
      }
    });

    // Close modal when clicking outside
    const modal = document.getElementById('dish-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeDishDetail();
        }
      });
    }
  }

  setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      // Add/remove scrolled class for navbar styling
      if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    });

    // Intersection Observer for animations
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const elementsToObserve = document.querySelectorAll(
      '.feature-card, .dish-card, .contact-item, .stat-item'
    );

    elementsToObserve.forEach(el => {
      observer.observe(el);
    });
  }

  setupAnimations() {
    // Add staggered animation delays
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });

    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }

  navigateToPage(pageId) {
    if (pageId === this.currentPage) return;

    // Hide current page
    const currentPageEl = document.getElementById(`${this.currentPage}-page`);
    if (currentPageEl) {
      currentPageEl.classList.remove('active');
    }

    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      }
    });

    // Show new page with delay for smooth transition
    setTimeout(() => {
      this.showPage(pageId);
    }, 150);

    this.currentPage = pageId;
    this.closeMobileMenu();

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });

    // Show requested page
    const pageEl = document.getElementById(`${pageId}-page`);
    if (pageEl) {
      pageEl.classList.add('active');
      
      // Re-trigger animations for the new page
      setTimeout(() => {
        this.setupIntersectionObserver();
      }, 100);
    }
  }

  toggleMobileMenu() {
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');

    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      hamburger.classList.add('active');
      navMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');

    this.isMenuOpen = false;
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  openDishDetail(dishId) {
    const modal = document.getElementById('dish-modal');
    const modalBody = document.getElementById('modal-body');

    // Get dish data
    const dishData = this.getDishData(dishId);
    if (!dishData) return;

    // Generate modal content
    modalBody.innerHTML = this.generateDishDetailHTML(dishData);

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Add entrance animation
    setTimeout(() => {
      modal.querySelector('.modal-content').style.transform = 'scale(1)';
    }, 10);
  }

  closeDishDetail() {
    const modal = document.getElementById('dish-modal');
    const modalContent = modal.querySelector('.modal-content');

    // Add exit animation
    modalContent.style.transform = 'scale(0.8)';

    setTimeout(() => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }, 300);
  }

  getDishData(dishId) {
    const dishes = {
      'cazuela-de-mariscos': {
        name: 'Cazuela de Mariscos',
        price: 45,
        description: 'A luxurious seafood casserole featuring the finest catches from the Caribbean coast. Tender shrimp, succulent crab meat, and fresh mussels are slowly simmered in a rich coconut broth infused with aromatic coastal spices, served with perfectly seasoned rice.',
        ingredients: [
          'Fresh Caribbean shrimp',
          'Local crab meat',
          'Mediterranean mussels',
          'Coconut cream',
          'Saffron',
          'Coastal herbs',
          'White wine',
          'Aromatic rice'
        ],
        features: [
          'Locally sourced seafood',
          'Traditional cooking methods',
          'Gluten-free option available',
          'Served with house-made bread'
        ]
      },
      'pargo-rojo-grillado': {
        name: 'Pargo Rojo Grillado',
        price: 38,
        description: 'Premium red snapper grilled to perfection and seasoned with our signature blend of Caribbean herbs and spices. Served with roasted plantains, coconut rice, and a vibrant mango salsa that captures the essence of tropical Barranquilla.',
        ingredients: [
          'Fresh red snapper fillet',
          'Caribbean herb blend',
          'Roasted plantains',
          'Coconut rice',
          'Fresh mango',
          'Red onion',
          'Cilantro',
          'Lime juice'
        ],
        features: [
          'Daily fresh catch',
          'Grilled over wood charcoal',
          'Omega-3 rich',
          'House-made mango salsa'
        ]
      },
      'arroz-con-coco-negro': {
        name: 'Arroz con Coco Negro',
        price: 28,
        description: 'An elevated version of the traditional coastal dish, featuring premium jasmine rice cooked in rich black coconut milk. Enhanced with caramelized onions, crispy plantain chips, and topped with toasted coconut flakes for an unforgettable texture experience.',
        ingredients: [
          'Premium jasmine rice',
          'Black coconut milk',
          'Caramelized onions',
          'Plantain chips',
          'Toasted coconut flakes',
          'Sea salt',
          'Fresh herbs',
          'Spiced oil'
        ],
        features: [
          'Traditional recipe elevated',
          'Vegan-friendly',
          'Gluten-free',
          'Rich in fiber and nutrients'
        ]
      },
      'ceviche-tropical': {
        name: 'Ceviche Tropical',
        price: 32,
        description: 'Fresh white fish marinated in a zesty blend of tropical citrus juices, combined with diced mango, avocado, and red onion. Served with crispy plantain chips and garnished with microgreens for a refreshing and sophisticated appetizer.',
        ingredients: [
          'Fresh white fish',
          'Lime juice',
          'Orange juice',
          'Fresh mango',
          'Ripe avocado',
          'Red onion',
          'Jalapeño peppers',
          'Microgreens'
        ],
        features: [
          'No cooking required',
          'High in protein',
          'Light and refreshing',
          'Perfect for sharing'
        ]
      },
      'sancocho-de-gallina': {
        name: 'Sancocho de Gallina',
        price: 35,
        description: 'Our refined take on the beloved traditional stew, featuring free-range chicken slow-cooked with premium root vegetables, plantains, and aromatic herbs. Served with coconut rice and fresh avocado, this dish represents the soul of Barranquilla cuisine.',
        ingredients: [
          'Free-range chicken',
          'Yuca root',
          'Sweet plantains',
          'Pumpkin',
          'Corn on the cob',
          'Cilantro',
          'Coconut rice',
          'Fresh avocado'
        ],
        features: [
          'Traditional family recipe',
          'Comfort food elevated',
          'Rich in vegetables',
          'Generous portion size'
        ]
      },
      'langostinos-al-ajillo': {
        name: 'Langostinos al Ajillo',
        price: 42,
        description: 'Succulent prawns sautéed in premium olive oil with roasted garlic, coastal herbs, and a hint of white wine. Served with crusty artisanal bread and a side of coconut rice, this dish showcases the pure flavors of the Caribbean coast.',
        ingredients: [
          'Large Caribbean prawns',
          'Premium olive oil',
          'Roasted garlic',
          'White wine',
          'Coastal herbs',
          'Crusty bread',
          'Coconut rice',
          'Lime wedges'
        ],
        features: [
          'Premium sized prawns',
          'Simple yet elegant preparation',
          'Mediterranean influence',
          'Perfect for wine pairing'
        ]
      }
    };

    return dishes[dishId] || null;
  }

  generateDishDetailHTML(dish) {
    return `
      <div class="dish-detail">
        <div class="dish-detail-image">
          <div class="image-placeholder">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <h2 class="dish-detail-name">${dish.name}</h2>
        <div class="dish-detail-price">$${dish.price}</div>
        <p class="dish-detail-description">${dish.description}</p>
        
        <div class="dish-ingredients">
          <h4>Premium Ingredients</h4>
          <div class="ingredients-list">
            ${dish.ingredients.map(ingredient => 
              `<div class="ingredient-item">${ingredient}</div>`
            ).join('')}
          </div>
        </div>
        
        <div class="dish-ingredients">
          <h4>Special Features</h4>
          <div class="ingredients-list">
            ${dish.features.map(feature => 
              `<div class="ingredient-item">${feature}</div>`
            ).join('')}
          </div>
        </div>
      </div>
    `;
  }
}

// Global functions for onclick handlers
function navigateToPage(pageId) {
  if (window.app) {
    window.app.navigateToPage(pageId);
  }
}

function openDishDetail(dishId) {
  if (window.app) {
    window.app.openDishDetail(dishId);
  }
}

function closeDishDetail() {
  if (window.app) {
    window.app.closeDishDetail();
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new TheIvoryApp();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading animation
  document.body.classList.add('loaded');
});

// Performance optimizations
window.addEventListener('load', () => {
  // Preload critical images
  const imageUrls = [
    // Add your actual image URLs here when you replace the placeholders
  ];

  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
});

// Service worker registration for PWA capabilities (future enhancement)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment when you add a service worker
    // navigator.serviceWorker.register('/sw.js');
  });
}