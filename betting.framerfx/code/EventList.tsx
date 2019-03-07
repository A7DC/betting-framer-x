import * as React from "react";
import { Event } from './Event'

type Props = { 
  getSelection: any,
  chosenBets: any,
  events: any,
}

export class EventList extends React.Component<Props> {
  input: HTMLInputElement;

  state = {
    stake: undefined,
    totalOdds: 0,
    payout: 0,
  }

  componentDidUpdate(prevProps) {
    const newProps = this.props
    if (prevProps !== newProps) { 
      this.calculateTotal(this.state.stake, this.props.chosenBets)
      // this.calculateWinBonus()
    }
  }

  // calculateWinBonus = () => {
  //   const { chosenBets } = this.props
  //   if (chosenBets.length >= 5 && chosenBets.length <= 9) {
  //     console.log('5-9 legs')
  //   }
  //   if (chosenBets.length >= 10 && chosenBets.length <= 19) {
  //     console.log('10-19 legs')
  //   }
  //   if (chosenBets.length >= 20 && chosenBets.length <= 30) {
  //     console.log('20-30 legs')
  //   }
  // }
  
  calculateTotal = (stake, chosenBets) => {

    let oddsArray = []    
    chosenBets.map((val, i) => { oddsArray.push(val.odds) })
    
    const reducer = (acc, currVal) => acc + (isNaN(currVal) ? 0 : currVal);

    this.setState({ 
      totalOdds: oddsArray.reduce(reducer, 1),
      payout: this.state.totalOdds * this.state.stake,
    }, () => {
        console.log('')
    })
  }

  handleChange = (event) => {
    this.setState({ stake: event.target.value }, () => {
      this.calculateTotal(this.state.stake, this.props.chosenBets)
    })
  }

  render() {
    const { chosenBets, getSelection, events } = this.props
    const { totalOdds, payout } = this.state
    return (
      <div style={style}>
        {events.map((val, i) => {
          return (
            <Event
              key={i}
              matchNumber={i}
              home={val.home}
              away={val.away}
              draw={val.draw}
              getSelection={getSelection}
              chosenBet={
                chosenBets[i] ? chosenBets[i]["name"] : "none"
              }
            />
          )
        })}
        <input
          value={this.state.stake}
          onChange={this.handleChange}
          placeholder='Type something...'
          type='number'
          ref={(input) => { this.input = input }}
        />
        {`The total odds are ${totalOdds}`}
        {`The total payout is ${payout}`}
      </div>
    )
  }
}

// Define some standard CSS for your component
const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#8855FF",
  background: "rgba(136, 85, 255, 0.1)",
  overflow: "hidden"
};