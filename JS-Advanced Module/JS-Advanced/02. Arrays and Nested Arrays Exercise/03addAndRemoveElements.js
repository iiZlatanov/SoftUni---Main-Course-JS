function addAndRemove(cmdList) {
    let result = [];
    let index = 1;

    cmdList.forEach(cmd => {
        if (cmd === "add") {
            result.push(index);
        } else {
            result.pop();
        }
        index ++;
    });

    let output = result.length >= 1 ? result.join("\n") : "Empty"
    console.log(output);
}

addAndRemove(
['add',
'add',
'remove',
'add',
'add'])
//  1
//  4 
//  5