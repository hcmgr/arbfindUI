import { Outcome } from "./dtos";

export type Bet = {
    // input
    outcomes: Outcome[];
    totalStake: number;

    // output
    idealRoundedStakes: number[];
    returns: number[];
    guaranteedProfit: number
};

/**
 * Input: 
 *      outcomes
 *      stake
 * 
 * Output:
 *      stake list 
 */
export function calcIdealStakes(outcomes: Outcome[], totalStake: number): number[] {
    const r = outcomes.reduce((acc, o) => acc + 1 / o.Price, 0);

    // Unrounded stakes
    const stakes = outcomes.map(o => (totalStake / o.Price) * (1 / r));

    // Rounded stakes (to represent real money bets)
    const roundedStakes = stakes.map(s => Math.round(s * 100) / 100);

    // Calculate actual returns for each outcome
    const returns = roundedStakes.map((stake, i) => stake * outcomes[i].Price);

    // Find worst-case return and compute actual profit
    const worstReturn = Math.min(...returns);
    const totalRoundedStake = roundedStakes.reduce((acc, s) => acc + s, 0);
    const actualProfit = worstReturn - totalRoundedStake;

    return roundedStakes;
}