import * as React from 'react';
import { Event } from './Event'
import { color, scale, typeScale } from './styles/variables'
import { type } from './styles/typography'

type Props = { 
  chosenBets: any,
}

export class BetSlipPreview extends React.Component<Props> {
  state = {
    totalBets: 0
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps !== this.props) {
      this.setState({
        totalBets: this.props.chosenBets.filter(x => Object.keys(x).length).length
      })
    }
  }

  render() {
    const { chosenBets } = this.props
    // console.log(this.state.totalBets, 'this.state.totalBets')
    return (
      <div style={style}>
        <h3 style={{
          fontSize: type.t2,
          color: color.yellow,
        }}>10% win bonus in 3 bets</h3>
        <div style={{display: 'flex'}}>
          <span>{this.state.totalBets} bets in slip</span>
          <span style={{ marginLeft: 'auto' }}>Price: $price</span>
        </div>
      </div>
    )
  }
}

// Define some standard CSS for your component
const style: React.CSSProperties = {
  padding: scale.s3,
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  background: color.black,
  color: color.white,
};