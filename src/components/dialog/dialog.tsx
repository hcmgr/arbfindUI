import { useState } from "react";
import { Arb } from "../../dtos";
import './dialog.css'
import { TeamsTable } from "./teams_table";


export type DialogProps = {
    arb: Arb | null;
    onClose: () => void;
}

export function Dialog({ arb, onClose }: DialogProps) {
    if (!arb) return null;
    const [totalStake, setTotalStake] = useState("");

    const minProfit = 10
    const maxProfit = 15

    const minProfitPerc = 2.5
    const maxProfitPerc = 3.6
  
    return (
        <div className="dialog-backdrop" onClick={onClose}>
          <div className="dialog" onClick={e => e.stopPropagation()}>
            <div className="close-btn" onClick={onClose}>×</div>
    
            {/* Match details header */}
            <div className="dialog-header">
              <h2 className="sport-title">{arb.sporttitle}</h2>
              <p className="match-title">{arb.outcomes.map(o => o.Name).join(' vs ')}</p>
              <p className="commence-time">{new Date(arb.commencetime).toLocaleString()} (UTC)</p>
            </div>
    
            {/* Total stake */}
            <div className="stake-container">
              <label htmlFor="stake-input">Total Stake</label>
              <input
                id="stake-input"
                type="number"
                value={totalStake}
                onChange={e => setTotalStake(e.target.value)}
                placeholder="Enter total stake"
                className="stake-input"
              />
            </div>

            {/* Teams table */}
            <TeamsTable arb={arb}/>

            {/* Profit stats */ }
            <div className="profit-fields">
              <div className="profit-field">
                <label htmlFor="min-profit">Min. Profit = </label>
                <span className="profit-value" id="min-profit">${minProfit} (+{minProfitPerc}%)</span>
              </div>
              <div className="profit-field">
                <label htmlFor="max-profit">Max. Profit = </label>
                <span className="profit-value" id="max-profit">${maxProfit} (+{maxProfitPerc}%)</span>
              </div>
            </div>

          </div>
        </div>
      );
    }