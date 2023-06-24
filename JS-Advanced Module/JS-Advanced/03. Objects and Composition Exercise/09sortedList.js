function createSortedList() {
    let result = {
        numbersList: [],
        add: function (element) {
            this.numbersList.push(element);
            this.numbersList.sort((a, b) => a - b);
            this.size += 1;

            return result;
        },

        get: function (index) {
            this._validate(index);
            return this.numbersList[index];
        },

        remove: function (index) {
            this._validate(index);
            this.numbersList.splice(index, 1);
            this.size -= 1;

            return result;
        },

        size: 0,

        _validate: function (index) {
            if (index < 0 || index >= this.numbersList.length) {
                throw new Error("Index is out of bounds")
            }
        }
    };

    return result;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
// 6
// 7