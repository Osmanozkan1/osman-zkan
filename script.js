// Sayfa yüklendiğinde çalışacaklar
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Form gönderme butonuna tıklanırsa
  const gonderButonu = document.getElementById("contact-submit");
  if (gonderButonu) {
    gonderButonu.addEventListener("click", function () {
      const ad = document.querySelector('input[placeholder="Adınız"]').value.trim();
      const email = document.querySelector('input[placeholder="E-posta"]').value.trim();
      const konu = document.querySelector('input[placeholder="Konu"]').value.trim();
      const mesaj = document.querySelector('textarea[placeholder="Mesajınız"]').value.trim();

      if (!ad || !email || !mesaj) {
        alert("Lütfen gerekli tüm alanları doldurun.");
        return;
      }

      alert("Mesajınız başarıyla gönderildi. Teşekkür ederiz!");
      document.querySelector("form").reset();
    });
  }

  // ✅ Sayfa içi yumuşak geçiş (navbar bağlantıları gibi)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const hedef = document.querySelector(this.getAttribute("href"));
      if (hedef) {
        hedef.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ✅ Sosyal medya ikonları tıklama logları
  const github = document.querySelector('a[href*="github.com"]');
  const instagram = document.querySelector('a[href*="instagram.com"]');
  if (github) github.addEventListener("click", () => console.log("GitHub bağlantısına tıklandı."));
  if (instagram) instagram.addEventListener("click", () => console.log("Instagram bağlantısına tıklandı."));

  // ✅ İletişim bağlantıları tıklama logları
  const mail = document.querySelector('a[href^="mailto:"]');
  const tel = document.querySelector('a[href^="tel:"]');
  const map = document.querySelector('a[href*="maps"]');
  if (mail) mail.addEventListener("click", () => console.log("E-posta bağlantısına tıklandı."));
  if (tel) tel.addEventListener("click", () => console.log("Telefon bağlantısına tıklandı."));
  if (map) map.addEventListener("click", () => console.log("Konum bağlantısına tıklandı."));
});
