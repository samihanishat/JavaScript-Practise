let yourMark = 85;
let yourFriendMark = 75;
if (yourMark >= 80) {
    if (yourFriendMark >= 80) {
        console.log("Go For A Lunch.");
    }
    else if (yourFriendMark >= 60 && yourFriendMark < 80) {
        console.log("Tell your friend, good luck next time.");
    }
    else if (yourFriendMark >= 40 && yourFriendMark < 60) {
        console.log("Keep your friend's massage unseen.");
    }
    else if (yourFriendMark < 40) {
        console.log("Block Your Friend.");
    }
}
else{
    console.log("Go to home and sleep and act sad.");
}
