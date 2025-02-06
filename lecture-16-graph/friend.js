const friendsRelationship = [
    [1],        //0: Sam
    [0,3],      //1: Aninne
    [3],        //2: Mac
    [1,2,4,5,6],//3: Jack
    [3],        //4: Doug
    [3],        //5: Harry
    [3]         //6: Howard
]

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
    return friendsRelationship[index].map(friendIndex => listMapping[friendIndex]);
}

console.log(listFriendsOf("Jack")); // [1,2,4,5,6] [ 'Aninne', 'Mac', 'Doug', 'Harry', 'Howard' ]