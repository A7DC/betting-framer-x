import * as React from 'react';
import { Event } from './Event'
import { color, scale, typeScale } from './styles/variables'
import { type } from './styles/typography'

type Props = { 
  chosenBets: any,
}

export class BetSlipPreview extends React.Component<Props> {
  state = {
    totalBets: 0,
    nextLevelIn: 5,
    bonus: 10
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps !== this.props) {
      this.setState({
        totalBets: this.props.chosenBets.filter(x => Object.keys(x).length).length
      }, () => this.calculateWinBonus(this.state.totalBets) )
    }
  }

  calculateWinBonus(totalBets) {
    if (totalBets <= 5) {
      let nextLevelIn = 5
      for (let i = 0; i <= 5; i++) {
        if (totalBets === i) {
          // return '10%'
          this.setState({ 
            nextLevelIn: Math.abs(i - nextLevelIn),
            bonus: this.state.bonus,
          }, () => console.log(this.state.nextLevelIn, 'nextLevelIn'))
        }
      }
    } 
  }

  render() {
    const { chosenBets } = this.props

    return (
      <div style={style}>
        <h3 style={{
          fontSize: type.t2,
          color: color.yellow,
        }}>{this.state.bonus}% win bonus in {this.state.nextLevelIn} bets</h3>
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