import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <section>
      <ol className="shows">
        {shows.map((show) => (
          <li
            key={show.name}
            onClick={() => setSelectedShow(show)}
            className="show"
          >
            {show.name}
          </li>
        ))}
      </ol>
    </section>
  );
}
