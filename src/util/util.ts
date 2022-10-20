export function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

export const tags = [
    {
        id: 1,
        name: "#Unbreakable",
        count: 1,
    },
    {
        id: 2,
        name: "#React",
        count: 142,
    },
    {
        id: 3,
        name: "#JavaScript",
        count: 305,
    },
    {
        id: 4,
        name: "#TypeScript",
        count: 293,
    },
    {
        id: 5,
        name: "#Go",
        count: 78,
    },
    {
        id: 6,
        name: "#TON",
        count: 53,
    },
]


