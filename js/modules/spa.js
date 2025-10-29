import { projectsData } from '../data/projects.js';
import { renderProjectCard } from './templating.js';
import { initFormValidation } from './validation.js';

const mainContent = document.getElementById('main-content');
const cache = new Map();

async function loadPage(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Falha ao carregar a página.');
    
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const newTitle = doc.querySelector('title').innerText;
    const newMainContent = doc.getElementById('main-content').innerHTML;

    const pageData = { title: newTitle, content: newMainContent };
    cache.set(url, pageData);
    return pageData;

  } catch (error) {
    console.error('Erro na SPA:', error);
    mainContent.innerHTML = `<h1>Erro ao carregar. Tente novamente.</h1>`;
    return null;
  }
}

function updatePage(pageData) {
  if (!pageData) return;
  document.title = pageData.title;
  mainContent.innerHTML = pageData.content;
  
  runPageScripts();
}

function runPageScripts() {
  const path = window.location.pathname;

  if (path.includes('projetos.html') || path === '/') {
    const grid = document.getElementById('project-grid');
    if (grid) {
      grid.innerHTML = projectsData.map(renderProjectCard).join('');
    }
  }

  if (path.includes('cadastro.html')) {
    initFormValidation();
  }
}

async function handleLinkClick(event) {
  if (event.metaKey || event.ctrlKey) return;
  
  const link = event.target.closest('a.nav-spa-link');
  if (!link) return;

  event.preventDefault();
  const url = link.href;

  if (window.location.href === url) return;

  const pageData = await loadPage(url);
  updatePage(pageData);
  history.pushState({ path: url }, pageData.title, url);
}

async function handlePopState(event) {
  const url = event.state ? event.state.path : window.location.href;
  const pageData = await loadPage(url);
  updatePage(pageData);
}

export function initSpa() {
  document.body.addEventListener('click', handleLinkClick);
  window.addEventListener('popstate', handlePopState);
  
  runPageScripts();
}