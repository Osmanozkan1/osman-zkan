// Scroll animasyonlarını başlat (sadece bir kez çağrılmalı)
AOS.init();

// Form gönderim işlemi
function handleSubmit(event) {
  event.preventDefault();
  alert('Mesajınız gönderildi! Teşekkürler.');
  return false;
}

// Dinamik projeler dizisi
const projects = [
  {
    icon: 'fa-laptop-code',
    title: 'Kişisel Portföy Web Sitesi',
    desc: 'HTML5, CSS3, Bootstrap ile hazırlanmış kişisel site.'
  },
  {
    icon: 'fa-palette',
    title: 'UI Kit Tasarımı',
    desc: 'Butonlar, kartlar, renk paleti ve grid sistemleri içerir.'
  },
  {
    icon: 'fa-database',
    title: 'Backend API',
    desc: 'Node.js ve Express.js kullanılarak geliştirilen RESTful API.'
  }
];


window.onload = function() {
  const container = document.getElementById('project-cards');
  if (container) {
    projects.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';
      col.innerHTML = `
        <div class="card project-card p-3 text-center">
          <i class="fas ${p.icon} fa-3x mb-3 text-success"></i>
          <h5 class="card-title">${p.title}</h5>
          <p>${p.desc}</p>
        </div>
      `;
      container.appendChild(col);
    });
  }

  // Proje kartlarına animasyon ve tıklama
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector(".card-title")?.textContent || "Proje";
      console.log(`"${title}" projesine tıklandı.`);
    });

    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.02)";
      card.style.transition = "all 0.3s ease-in-out";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
};
