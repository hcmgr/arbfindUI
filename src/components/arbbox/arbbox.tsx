import { Arb } from "../../dtos";
import "./arbbox.css"

type ArbBoxProps = {
    arb: Arb;
    onClick: (arb: Arb) => void;
};

export function ArbBox({ arb, onClick }: ArbBoxProps) {
    const profitPercentage = Math.round((1 - arb.r) * 10000) / 100;
  
    return (
      <div className="arb-box" onClick={() => onClick(arb)}>
        <div><strong>{arb.sporttitle}</strong></div>
        <div>{arb.hometeam} vs {arb.awayteam}</div>
        <div style={{ color: 'green' }}>+{profitPercentage}%</div>
      </div>
    );
  }