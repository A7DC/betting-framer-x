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
    ],
    getSelection: null,
    chosenBets: [
        {},
        {},
        {},
        {},
        // if you add more default props have to add more default empty objects
    ],
})

export const fillData: Override = () => {
    return {
        events: data.events,
        chosenBets: data.chosenBets,
        getSelection(val: object, matchNumber: number) {
            // 1. Make a shallow copy of the items
            let chosenBets = [...data.chosenBets]
            // // 2. Make a shallow copy of the item you want to mutate
            let bet = { ...chosenBets[matchNumber] }
            // // 3. Replace the property you're intested in
            bet = val
            // // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
            data.chosenBets[matchNumber] = bet
            // 5. Set the state to our new copy
            // console.log(data.chosenBets, 'data.chosenBets')
        }
    }
}
