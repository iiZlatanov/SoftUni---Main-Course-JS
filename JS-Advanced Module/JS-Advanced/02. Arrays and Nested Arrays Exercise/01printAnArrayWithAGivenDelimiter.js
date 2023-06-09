function printByDelimiter(array, delimiter){
    let output = array.join(delimiter);
    console.log(output)
}

printByDelimiter(
['One',
'Two',
'Three',
'Four',
'Five'],
'-')
//One-Two-Three-Four-Five

printByDelimiter(
['How about no?',
'I',
'will',
'not',
'do',
'it!'],
'_'
)
//How about no?_I_will_not_do_it!
