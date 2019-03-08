import * as React from "react";

type Props = { 
  chosenBets: any,
  events: any,
}


const Bet = ({ chosenBet, event }) => (
  <div>
    <h6>{event.home.name} - {event.away.name}</h6>
    <h5>{chosenBet.name}</h5>
    <h5>{chosenBet.odds}</h5>
  </div>
)

export class BetSlip extends React.Component<Props> {
  render() {
    const { chosenBets } = this.props
    return (
    <div style={style}>
        {chosenBets.map((val, i) => {
          if (val.name) {
            return (
                <Bet
                  key={i}
                  chosenBet={val}
                  event={this.props.events[i]}
                />
            )
          }
        })}
    </div>
    )
  }

}

// Define some standard CSS for your component
const style: React.CSSProperties = {
  color: "#333",
  fontSize: 20,
  width: "100%",
  display: "flex",
  flexDirection: 'column'
};