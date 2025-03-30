import { Arb } from "../../dtos";
import './teams_table.css';

type TeamsTableProps = {
  arb: Arb;
};

export function TeamsTable({ arb }: TeamsTableProps) {
  return (
    <div className="teams-table">
      <div className="teams-table-header">
        <span>Team</span>
        <span>Odd</span>
        <span>Bookmaker</span>
        <span>Stake</span>
        {/* <span>Return</span> */}
      </div>
      {arb.outcomes.map((outcome, index) => (
        <div className="teams-table-row" key={index}>
          <span>{outcome.Name}</span>
          <span>{outcome.Price}</span>
          <span>{outcome.BookmakerKey}</span>
          <input
            type="number"
            className="stake-input-per-team"
          />
          {/* <span>Placeholder</span> */}
        </div>
      ))}
    </div>
  );
}
