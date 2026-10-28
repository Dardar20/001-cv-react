const experiences = [
  {
    id: "1",
    titre: "Application de gestion de colis",
    description: "Application Web en JavaScript avec Bootstrap, JQuery et DataTables.",
  },
  {
    id: "2",
    titre: "SEN-BOUTIQUE",
    description: "Système de gestion de ventes en Python.",
  },
];

function Experiences() {
  return (
    <section className="block">
        <h2>Expériences</h2>
        {experiences.map((experience) => (
          <div key={experience.id}>
            <h3>{experience.titre}</h3>
            <p>{experience.description}</p>
          </div>
        ))}
    </section>
    );
}
export default Experiences;