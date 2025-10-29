import { initNavigation } from './modules/navigation.js';
import { initSpa } from './modules/spa.js';
import { initThemeToggle } from './modules/theme.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSpa();
  initThemeToggle();
});