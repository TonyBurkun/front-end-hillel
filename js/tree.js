const treeLevels = 25;

for (let i = treeLevels-1, j = 1; i >=0; i--, j+=2){
    let emptyElements = new Array(i).fill(' ');
    let filledElements = new Array(j).fill('*');
    let treeLevel = emptyElements.join('') + filledElements.join('');
    console.log(treeLevel)
}




