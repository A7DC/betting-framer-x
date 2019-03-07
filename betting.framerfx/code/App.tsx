import * as React from "react";
import { Data, Override } from 'framer';
import { EventList } from './EventList'
import { BetSlip } from './BetSlip'

const data = Data({ 
  
  events: [
    {
      home: {
        name: 'Real Madrid',
        odds: 1.69
      },
      away: {
        name: 'Ajax',
        odds: 5.00
      },
      draw: {
        name: 'Draw',
        odds: 4.20
      },
    },
    {
      home: {
        name: 'Derby County',
        odds: 2.00
      },
      away: {
        name: 'Wigan Athletic',
        odds: 3.00
      },
      draw: {
        name: 'Draw',
        odds: 4.35
      },
    },
    {
      home: {
        name: 'Fullham',
        odds: 3.00
      },
      away: {
        name: 'Chelsea FC',
        odds: 5.00
      },
      draw: {
        name: 'Draw',
        odds: 4.35
      },
    },
    {
      home: {
        name: 'Celtic',
        odds: 3.00
      },
      away: {
        name: 'Rangers',
        odds: 4.00
      },
      draw: {
        name: 'Draw',
        odds: 4.35
      },
    },
  ]
});


export const fillData: Override = () => {
  return {
    events: data.events
  };
};

type Props = { 
  events: any
 }

export class App extends React.Component<Props> {

  static defaultProps: Props = {
    events: [
      {
        home: {
          name: 'Real Madrid',
          odds: 1.69
        },
        away: {
          name: 'Ajax',
          odds: 5.00
        },
        draw: {
          name: 'Draw',
          odds: 4.20
        },
      },
      {
        home: {
          name: 'Derby County',
          odds: 2.00
        },
        away: {
          name: 'Wigan Athletic',
          odds: 3.00
        },
        draw: {
          name: 'Draw',
          odds: 4.35
        },
      },
      {
        home: {
          name: 'Fullham',
          odds: 3.00
        },
        away: {
          name: 'Chelsea FC',
          odds: 5.00
        },
        draw: {
          name: 'Draw',
          odds: 4.35
        },
      },
      {
        home: {
          name: 'Celtic',
          odds: 3.00
        },
        away: {
          name: 'Rangers',
          odds: 4.00
        },
        draw: {
          name: 'Draw',
          odds: 4.35
        },
      },
    ]
  };


  state = {
    chosenBets: [
      {},
      {},
      {},
      {},
      // if you add more default props have to add more default empty objects
    ],
    events: this.props.events
  }

  componentDidMount() {
    console.log(this.state.events)
  }

  static getDerivedStateFromProps(props: Props, state) {
    return {
      events: props.events
    };
  }

  getSelection = (val: object, matchNumber: number) => {
    // // 1. Make a shallow copy of the items
    let chosenBets = [...this.state.chosenBets]
    // // 2. Make a shallow copy of the item you want to mutate
    let bet = { ...chosenBets[matchNumber] }
    // // 3. Replace the property you're intested in
    bet = val
    // // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    chosenBets[matchNumber] = bet
    // // 5. Set the state to our new copy
    this.setState({ chosenBets: chosenBets }, () => console.log(this.state, 'state'))
  }

  renderBetslip = (chosenBets, events) => {
    if (chosenBets.filter(e => e.name).length > 0) {
      return (
        <BetSlip
          chosenBets={chosenBets}
          events={events}
        />
      )
    } else {
      return <h1>nothing</h1>
    }
  }

  render() {
    return (
      <div>
        <EventList 
          getSelection={this.getSelection}  
          chosenBets={this.state.chosenBets}
          events={this.state.events}
          />
        {this.renderBetslip(this.state.chosenBets, this.props.events)}
      </div>
    )
  }
}
