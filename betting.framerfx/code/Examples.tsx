import { Data, Override } from "framer"

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
})

export const fillData: Override = () => {
    return {
        events: data.events
    }
}
