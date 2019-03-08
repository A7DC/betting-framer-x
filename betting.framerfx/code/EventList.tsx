import * as React from "react";
import { Event } from './Event'

type Props = { 
  getSelection: any,
  chosenBets: any,
  events: any,
}

export class EventList extends React.Component<Props> {

  render() {
    const { chosenBets, getSelection, events } = this.props
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