import { results2025 } from '../model/data/results';
import './Results.css';

export default function Ergebnisse() {
  return (
    <section className="results-section" aria-labelledby="results-title">
      <h1 id="results-title">{results2025.year}</h1>
      {results2025.events.map(event => (
        <div key={event.name} className="ergebnisse-table-container">
          <h2 className="ergebnisse-table-title">{event.name}</h2>
          <table className="ergebnisse-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Zeit</th>
              </tr>
            </thead>
            <tbody>
              {event.results.map(result => (
                <tr key={result.name}>
                  <td>{result.name}</td>
                  <td>{result.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
}
