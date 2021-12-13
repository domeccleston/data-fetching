const API = "https://61b73054c95dd70017d4135c.mockapi.io/people";

function Ssr({ people }) {
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

export async function getServerSideProps() {
  const people = await fetch(API).then((res) => res.json());

  return {
    props: {
      people,
    }, 
  };
}

export default Ssr;
