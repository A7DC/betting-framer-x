import * as React from 'react';
import { Logo } from './canvas'
import {color, scale, typeScale} from './styles/variables'

type Props = {
    chosenBets: any
};

export class Header extends React.Component<Props> {
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
        // console.log(this.props.chosenBets.filter(x => Object.keys(x).length).length, ' dfdg')
        return (
            <header style={container}>
                <Logo />
                <button style={button}>{this.state.totalBets} bets</button>
            </header>
        );
    }
}

// Define some standard CSS for your component
const container: React.CSSProperties = {
    height: 92,
    paddingTop: scale.s2, 
    paddingRight: scale.s3, 
    display: 'flex',
    textAlign: 'center',
    color: '#8855FF',
    background: color.black,
    overflow: 'hidden'
}

// Define some standard CSS for your component
const button: React.CSSProperties = {
    background: color.yellow,
    color: color.black,
    borderRadius: scale.s1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    height: scale.s3 + scale.s1,
    marginTop: scale.s2,
    fontSize: typeScale.t1,
    marginLeft: 'auto',
    textTransform: 'uppercase'
}