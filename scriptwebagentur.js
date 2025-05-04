// scriptwebagentur.js
const form = document.getElementById('kontaktformular');
const dankemsg = document.getElementById('danke-nachricht');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // verhindert Weiterleitung

  const formData = new FormData(form);

  const response = await fetch("https://formspree.io/f/meogapaj", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    form.reset(); // leere das Formular
    dankemsg.style.display = 'block'; // zeige Dankemeldung
  } else {
    alert("Es gab ein Problem beim Absenden. Bitte versuch's nochmal.");
  }
});
