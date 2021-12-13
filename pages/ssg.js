const API = "https://61b73054c95dd70017d4135c.mockapi.io/people";

function Ssg({ people }) {
  return (
    <div>
      <h1>People:</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>Name: {person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const people = await fetch(API).then((res) => res.json());

  return {
    props: {
      people,
    }, 
  };
}

export default Ssg;
