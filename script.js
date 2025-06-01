
document.addEventListener("DOMContentLoaded", () => {

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
//sayfa güzel dursun diye int den aldım

  const github = document.querySelector('a[href*="github.com"]');
  const instagram = document.querySelector('a[href*="instagram.com"]');
  if (github) github.addEventListener("click", () => console.log("GitHub bağlantısına tıklandı."));
  if (instagram) instagram.addEventListener("click", () => console.log("Instagram bağlantısına tıklandı."));

  const mail = document.querySelector('a[href^="mailto:"]');
  const tel = document.querySelector('a[href^="tel:"]');
  const map = document.querySelector('a[href*="maps"]');
  if (mail) mail.addEventListener("click", () => console.log("E-posta bağlantısına tıklandı."));
  if (tel) tel.addEventListener("click", () => console.log("Telefon bağlantısına tıklandı."));
  if (map) map.addEventListener("click", () => console.log("Konum bağlantısına tıklandı."));
});
