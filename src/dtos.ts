export type Outcome = {
    BookmakerTitle:   string;
    BookmakerUrl:   string;
    Name:           string;
    Price:          number;
}

export type Arb = {
    sportkey:       string;
    sporttitle:     string;
    commencetime:   string;
    hometeam:       string;
    awayteam:       string;
    outcomes:       Outcome[];
    r:              number;
};