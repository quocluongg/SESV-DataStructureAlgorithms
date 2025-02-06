const adjacencyMatrix = [
    //0  1  2  3  4  5  6
    [0, 1, 0, 0, 0, 0, 0], // Sam
    [1, 0, 0, 1, 0, 0, 0], // Aninne
    [0, 0, 0, 1, 0, 0, 0], // Mac
    [0, 1, 1, 0, 1, 1, 1], // Jack
    [0, 0, 0, 1, 0, 0, 0], // Doug
    [0, 0, 0, 1, 0, 0, 0], // Harry
    [0, 0, 0, 1, 0, 0, 0]  // Howard
];
const listMapping = {
    0: "Sam",
    1: "Aninne",
    2: "Mac",
    3: "Jack",
    4: "Doug",
    5: "Harry",
    6: "Howard"
}

const listFriendsOf = (name) => {
    //1. get index from name
    const index = Object.keys(listMapping).find(key => listMapping[key] === name);
    //2. get list friends name from index
    return adjacencyMatrix[index]
        .map((value, i) => (value === 1 ? listMapping[i] : null))
        .filter(name => name !== null);
};


console.log(listFriendsOf("Howard")); // [Jack]