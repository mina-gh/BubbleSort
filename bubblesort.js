function bubbleSort (arr, comp = '>') {
    if (arr.length > 0) {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (comp !== '>' && typeof comp === 'function'){
                    if (comp(arr[j], arr[j + 1]) === 1){
                        let temp = arr[j + 1];
                        arr[j + 1] = arr[j];
                        arr[j] = temp;
                    }
                } else if (arr[j] > arr[j + 1]) {
                    let temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}

Array.prototype.bubbleSort = function(comp = ">"){
    if (this.length > 0) {
        for (let i = this.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (comp !== '>' && typeof comp === 'function'){
                    if (comp(this[j], this[j + 1]) === 1){
                        let temp = this[j + 1];
                        this[j + 1] = this[j];
                        this[j] = temp;
                    }
                } else if (this[j] > this[j + 1]) {
                    let temp = this[j + 1];
                    this[j + 1] = this[j];
                    this[j] = temp;
                }
            }
        }
    }
    return this;
}
