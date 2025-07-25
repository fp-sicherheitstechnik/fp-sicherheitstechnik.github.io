  export default () => `
  <!-- ========= Contact ========= -->
  <section id="kontakt">
    <h2>Kontaktieren Sie uns</h2>
    <form>
      <input type="text" name="name" placeholder="Name*" required>
      <input type="email" name="email" placeholder="E‑Mail*" required>
      <input type="tel" name="phone" placeholder="Telefon">
      <textarea name="message" rows="4" placeholder="Ihre Nachricht*" required></textarea>
      <button type="submit">Absenden</button>
    </form>
  </section>
`;

console.log("contact.js geladen");