export function renderProjectCard(project) {
  const badgeHtml = project.badges.map(badge =>
    `<span class="badge ${badge.class}">${badge.text}</span>`
  ).join(' ');

  return `
    <div class="col-md-6 col-lg-4">
      <article class="card">
        <img src="${project.img}" alt="${project.alt}" class="card-img">
        <div class="card-body">
          <h3 class="card-title">${project.title}</h3>
          <div>
            ${badgeHtml}
          </div>
          <p>${project.description}</p>
        </div>
        <div class="card-footer">
          <a href="${project.link}" class="btn btn-primary">Saiba Mais</a>
        </div>
      </article>
    </div>
  `;
}