import * as React from "react";

type Props = {
    home?: any,
    away?: any,
    draw?: any,
    getSelection?: any,
    matchNumber?: any,
    chosenBet?: any,
};

export class Event extends React.Component<Props> {
    render() {
        const { home, away, draw, matchNumber, chosenBet } = this.props;

        return (
            <div style={style}>
                <button
                    style={{ background: chosenBet == home.name ? "lightblue" : "white" }}
                    onClick={() => this.props.getSelection(home, matchNumber)}
                >
                    {home.name}
                </button>
                <button
                    style={{ background: chosenBet == draw.name ? "lightblue" : "white" }}
                    onClick={() => this.props.getSelection(draw, matchNumber)}
                >
                    {draw.name}
                </button>
                <button
                    style={{ background: chosenBet == away.name ? "lightblue" : "white" }}
                    onClick={() => this.props.getSelection(away, matchNumber)}
                >
                    {away.name}
                </button>
            </div>
        );
    }
}

// Define some standard CSS for your component
const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden"
};