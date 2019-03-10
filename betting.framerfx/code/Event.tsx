import * as React from 'react'
import { color, scale } from './styles/variables'

type Props = {
    home?: any,
    away?: any,
    draw?: any,
    getSelection?: any,
    matchNumber?: any,
    chosenBet?: any,
}

export class Event extends React.Component<Props> {
    render() {
        const { home, away, draw, matchNumber, chosenBet, getSelection } = this.props
        console.log(matchNumber, ' matchNumber')
        return (
            <div style={container}>
                <Button 
                    chosenBet={chosenBet}
                    matchNumber={matchNumber}
                    type={home}
                    getSelection={getSelection}
                />
                <Button 
                    chosenBet={chosenBet}
                    matchNumber={matchNumber}
                    type={draw}
                    getSelection={getSelection}
                />
                <Button 
                    chosenBet={chosenBet}
                    matchNumber={matchNumber}
                    type={away}
                    getSelection={getSelection}
                />
            </div>
        )
    }
}

const Button = ({ chosenBet, matchNumber, type, getSelection}) => (
    <button
        style={button}
        onClick={() => getSelection(type, matchNumber)}
    >
        <span style={{
            ...icon,
            background: chosenBet == type.name ? color.darkerlime : color.moonGray,
            color: chosenBet == type.name ? color.white : color.lightSilver,
            }}>1</span>
        <span style={{
            background: chosenBet == type.name ? color.lime : color.nearWhite,
            color: chosenBet == type.name ? color.white : color.black,
            ...content
        }}>
            {type.name}
        </span>
    </button>
)

// Define some standard CSS for your component
const container: React.CSSProperties = {
    overflow: 'hidden',
    display: 'flex',
}

// Define some standard CSS for your component
const button: React.CSSProperties = {
    display: 'flex',
    border: 'none',
    borderRadius: scale.s1,
    padding: 0,
}

// Define some standard CSS for your component
const content: React.CSSProperties = {
    padding: scale.s2,
}

// Define some standard CSS for your component
const icon: React.CSSProperties = {
    borderRadius: `${scale.s1} 0 0 ${scale.s1}`,
    padding: scale.s2,
}