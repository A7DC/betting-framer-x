import * as React from "react";
import { EventList } from './EventList'
import { BetSlip } from './BetSlip'
import { BetSlipPreview } from './BetSlipPreview'
import { Header } from './Header'
import { color, scale, typeScale } from './styles/variables'
import { Frame, Animatable, animate } from "framer";

type Props = { 
  events: any,
  getSelection: any,
  chosenBets: any,
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
    ],
    getSelection: null,
    chosenBets: [
      {},
      {},
      {},
      {},
      // if you add more default props have to add more default empty objects
    ],
  }

  state = {
    chosenBets: this.props.chosenBets,
    events: this.props.events,
  }

  static getDerivedStateFromProps(props: Props, state) {
    return {
      events: props.events,
      chosenBets: props.chosenBets,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
    }
    if (prevState !== this.state) {
      console.log(this.state, "state")
      console.log(prevState, "prevState")
    }
  }
  
  
  getSelection = (val: object, matchNumber: number) => {
    const { getSelection } = this.props
    getSelection && getSelection(val, matchNumber)
    this.forceUpdate()
  }

  aLeft = Animatable(0);
  render() {
    
    return (
      <div style={style}>
        <Header chosenBets={this.props.chosenBets} />
        <div style={outter}>
          <EventList 
            getSelection={this.getSelection}  
            chosenBets={this.props.chosenBets}
            events={this.state.events}
            />
        </div>
        <BetSlip
          chosenBets={this.state.chosenBets}
          events={this.props.events}
        />
        <BetSlipPreview chosenBets={this.state.chosenBets}/>
        {/* <Frame left={this.aLeft} onClick={() => animate(this.aLeft, 200)} /> */}
      </div>
    )
  }
}

// Define some standard CSS for your component
const style: React.CSSProperties = {
  height: "100%",
  // display: "flex",
  flexDirection: 'column',
  fontFamily: 'proxima-nova, sans-serif',
  background: 'rgb(237, 232, 237)'
};

const outter: React.CSSProperties = {
  padding: scale.s3,
  position: 'relative',
  // display: 'flex',
  height: '100%'
};

// font-family: proxima-nova, sans-serif;
// font-weight: 400;
// font-style: normal;