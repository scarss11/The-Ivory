// scripts/components.js

/**
 * Reusable UI Components for The Ivory Restaurant
 * These components can be reused throughout the application
 */

class UIComponents {
  /**
   * Creates a dish card component
   * @param {Object} dish - Dish data object
   * @returns {string} HTML string for dish card
   */
  static createDishCard(dish) {
    return `
      <div class="dish-card" onclick="openDishDetail('${dish.id}')">
        <div class="dish-image">
          <div class="image-placeholder" style="background-image: url('${dish.image || ''}')">
            ${dish.icon || `
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
              </svg>
            `}
          </div>
        </div>
        <div class="dish-info">
          <h3 class="dish-name">${dish.name}</h3>
          <p class="dish-description">${dish.shortDescription}</p>
          <span class="dish-price">${dish.price}</span>
        </div>
        <div class="dish-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
      </div>
    `;
  }

  /**
   * Creates a feature card component
   * @param {Object} feature - Feature data object
   * @returns {string} HTML string for feature card
   */
  static createFeatureCard(feature) {
    return `
      <div class="feature-card">
        <div class="feature-icon">
          ${feature.icon || `
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
          `}
        </div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </div>
    `;
  }

  /**
   * Creates a contact info card component
   * @param {Object} contact - Contact data object
   * @returns {string} HTML string for contact card
   */
  static createContactCard(contact) {
    return `
      <div class="contact-item">
        <div class="contact-icon">
          ${contact.icon || `
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/>
            </svg>
          `}
        </div>
        <h3>${contact.title}</h3>
        <p>${contact.content}</p>
      </div>
    `;
  }

  /**
   * Creates a statistics item component
   * @param {Object} stat - Statistics data object
   * @returns {string} HTML string for stat item
   */
  static createStatItem(stat) {
    return `
      <div class="stat-item">
        <h3>${stat.number}</h3>
        <p>${stat.label}</p>
      </div>
    `;
  }

  /**
   * Creates a loading spinner component
   * @param {string} size - Size of the spinner (sm, md, lg)
   * @returns {string} HTML string for loading spinner
   */
  static createLoadingSpinner(size = 'md') {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12'
    };

    return `
      <div class="loading-spinner ${sizeClasses[size]}">
        <svg class="animate-spin" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
          <path d="M4 12a8 8 0 018-8V2.5" stroke="currentColor" stroke-width="4"/>
        </svg>
      </div>
    `;
  }

  /**
   * Creates a toast notification component
   * @param {Object} toast - Toast data object
   * @returns {string} HTML string for toast notification
   */
  static createToast(toast) {
    const typeClasses = {
      success: 'toast-success',
      error: 'toast-error',
      warning: 'toast-warning',
      info: 'toast-info'
    };

    const icons = {
      success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
                </svg>`,
      error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
              </svg>`,
      warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" stroke-width="2"/>
                </svg>`,
      info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
               <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
             </svg>`
    };

    return `
      <div class="toast ${typeClasses[toast.type] || 'toast-info'}" data-toast-id="${toast.id || Date.now()}">
        <div class="toast-icon">
          ${icons[toast.type] || icons.info}
        </div>
        <div class="toast-content">
          <div class="toast-title">${toast.title}</div>
          ${toast.message ? `<div class="toast-message">${toast.message}</div>` : ''}
        </div>
        <button class="toast-close" onclick="UIComponents.closeToast(this)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
    `;
  }

  /**
   * Creates a button component
   * @param {Object} button - Button data object
   * @returns {string} HTML string for button
   */
  static createButton(button) {
    const variants = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
      ghost: 'btn-ghost'
    };

    const sizes = {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg'
    };

    return `
      <button 
        class="btn ${variants[button.variant] || 'btn-primary'} ${sizes[button.size] || 'btn-md'} ${button.className || ''}"
        ${button.onClick ? `onclick="${button.onClick}"` : ''}
        ${button.disabled ? 'disabled' : ''}
        ${button.id ? `id="${button.id}"` : ''}
      >
        ${button.icon ? `<span class="btn-icon">${button.icon}</span>` : ''}
        <span>${button.text}</span>
        ${button.endIcon ? `<span class="btn-end-icon">${button.endIcon}</span>` : ''}
      </button>
    `;
  }

  /**
   * Creates an input field component
   * @param {Object} input - Input data object
   * @returns {string} HTML string for input field
   */
  static createInput(input) {
    return `
      <div class="input-group">
        ${input.label ? `<label class="input-label" for="${input.id}">${input.label}</label>` : ''}
        <div class="input-wrapper">
          ${input.startIcon ? `<span class="input-start-icon">${input.startIcon}</span>` : ''}
          <input
            type="${input.type || 'text'}"
            id="${input.id}"
            name="${input.name || input.id}"
            placeholder="${input.placeholder || ''}"
            class="input-field ${input.startIcon ? 'has-start-icon' : ''} ${input.endIcon ? 'has-end-icon' : ''}"
            ${input.required ? 'required' : ''}
            ${input.disabled ? 'disabled' : ''}
            ${input.value ? `value="${input.value}"` : ''}
          />
          ${input.endIcon ? `<span class="input-end-icon">${input.endIcon}</span>` : ''}
        </div>
        ${input.helperText ? `<span class="input-helper">${input.helperText}</span>` : ''}
        ${input.errorText ? `<span class="input-error">${input.errorText}</span>` : ''}
      </div>
    `;
  }

  /**
   * Creates a card component
   * @param {Object} card - Card data object
   * @returns {string} HTML string for card
   */
  static createCard(card) {
    return `
      <div class="card ${card.className || ''}" ${card.onClick ? `onclick="${card.onClick}"` : ''}>
        ${card.image ? `
          <div class="card-image">
            <img src="${card.image}" alt="${card.imageAlt || ''}" />
          </div>
        ` : ''}
        <div class="card-content">
          ${card.title ? `<h3 class="card-title">${card.title}</h3>` : ''}
          ${card.subtitle ? `<p class="card-subtitle">${card.subtitle}</p>` : ''}
          ${card.content ? `<div class="card-body">${card.content}</div>` : ''}
          ${card.actions ? `
            <div class="card-actions">
              ${card.actions.map(action => this.createButton(action)).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // Utility Methods

  /**
   * Shows a toast notification
   * @param {Object} toast - Toast configuration
   */
  static showToast(toast) {
    const toastContainer = this.getOrCreateToastContainer();
    const toastElement = document.createElement('div');
    toastElement.innerHTML = this.createToast(toast);
    
    toastContainer.appendChild(toastElement.firstElementChild);

    // Auto remove after duration
    if (toast.duration !== 0) {
      setTimeout(() => {
        this.closeToast(toastElement.firstElementChild);
      }, toast.duration || 5000);
    }
  }

  /**
   * Closes a toast notification
   * @param {Element} toastElement - Toast element or close button
   */
  static closeToast(toastElement) {
    const toast = toastElement.closest('.toast');
    if (toast) {
      toast.classList.add('toast-exit');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }
  }

  /**
   * Gets or creates the toast container
   * @returns {Element} Toast container element
   */
  static getOrCreateToastContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  }

  /**
   * Creates a modal dialog
   * @param {Object} modal - Modal configuration
   */
  static createModal(modal) {
    const modalHTML = `
      <div class="modal ${modal.size ? `modal-${modal.size}` : ''}" id="${modal.id}">
        <div class="modal-backdrop" onclick="UIComponents.closeModal('${modal.id}')"></div>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">${modal.title}</h2>
              <button class="modal-close" onclick="UIComponents.closeModal('${modal.id}')">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2"/>
                </svg>
              </button>
            </div>
            <div class="modal-body">
              ${modal.content}
            </div>
            ${modal.actions ? `
              <div class="modal-footer">
                ${modal.actions.map(action => this.createButton(action)).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    return document.getElementById(modal.id);
  }

  /**
   * Shows a modal dialog
   * @param {string} modalId - Modal ID
   */
  static showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * Closes a modal dialog
   * @param {string} modalId - Modal ID
   */
  static closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /**
   * Creates a loading overlay
   * @param {string} message - Loading message
   */
  static showLoading(message = 'Loading...') {
    const loadingHTML = `
      <div class="loading-overlay" id="loading-overlay">
        <div class="loading-content">
          ${this.createLoadingSpinner('lg')}
          <p class="loading-text">${message}</p>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', loadingHTML);
  }

  /**
   * Hides the loading overlay
   */
  static hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
      overlay.remove();
    }
  }

  /**
   * Animates an element into view
   * @param {Element} element - Element to animate
   * @param {string} animation - Animation type
   */
  static animateIn(element, animation = 'fadeInUp') {
    element.classList.add('animate-in', animation);
  }

  /**
   * Animates an element out of view
   * @param {Element} element - Element to animate
   * @param {string} animation - Animation type
   */
  static animateOut(element, animation = 'fadeOut') {
    element.classList.add('animate-out', animation);
    
    setTimeout(() => {
      element.remove();
    }, 300);
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UIComponents;
}

// Make available globally
window.UIComponents = UIComponents;