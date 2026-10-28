const competences = [
  "JavaScript",
  "C",
  "Python",
  "HTML/CSS",
];
function Competences() {
  return (
    <section className="block">
      <h2>Compétences</h2>
      <ul>
        {competences.map((competence, index) => (
          <li key={index}>{competence}</li>
        ))}
      </ul>
    </section>
  );
}

export default Competences;