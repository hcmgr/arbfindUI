import { Arb } from "../../dtos";
import './teams_table.css';

type TeamsTableProps = {
  arb: Arb;
};

export function TeamsTable({ arb }: TeamsTableProps) {
  return (
    <div className="teams-table">
      <div className="teams-table-header">
        <span>Outcome</span>
        <span>Bookmaker</span>
        <span>Odd</span>
        <span>Stake</span>
        <span>Return</span>
      </div>
      {arb.outcomes.map((outcome, index) => (
        <div className="teams-table-row" key={index}>
          <span>{outcome.Name}</span>
          <a 
           href={outcome.BookmakerUrl}
           target="_blank"
           rel="noopener noreferrer" 
          >
            <span>{outcome.BookmakerTitle}</span>
          </a>
          <input 
            type="number"
            className="odd-input-per-team"
          />
          <input
            type="number"
            className="stake-input-per-team"
          />
          <span>---</span>
        </div>
      ))}
    </div>
  );
}
