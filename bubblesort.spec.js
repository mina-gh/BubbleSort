describe('Bubble Sort', function() {
    it('handles an empty array', function() {
        expect(bubbleSort([])).toEqual([]);
    });

    beforeEach(function(){
      spyOn(Array.prototype, 'sort');
    });

    it('handles an array with only one item', function() {
        let array = [10];

        expect(bubbleSort(array)).toEqual([10]);
        expect(Array.prototype.sort.calls.count()).toEqual(0);
    });

    it('handles an array which is already sorted', function() {
        let array = [1, 2, 3, 5, 6, 9, 10];

        expect(bubbleSort(array)).toEqual([1, 2, 3, 5, 6, 9, 10]);
        expect(Array.prototype.sort.calls.count()).toEqual(0);
    });

    it('handles an array which is not sorted yet', function() {
        let array = [5, 1, 2, 7, 3, 9, 11, 60, 3, 4, 1000, 0];

        expect(bubbleSort(array)).toEqual([0, 1, 2, 3, 3, 4, 5, 7, 9, 11, 60, 1000]);
        expect(Array.prototype.sort.calls.count()).toEqual(0);
    });

    it('A case of trying to sort a String array', function() {
        let array = ['a', 'd', 'h', 'a', 'c'];

        expect(bubbleSort(array)).toEqual(['a', 'a', 'c', 'd', 'h']);
        expect(Array.prototype.sort.calls.count()).toEqual(0);
    });



    it("testing a custom comparator function", function(){
      let array = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
      let comparator = function (a, b) {
        if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
        if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
        return 0; // returning 0 means "a and b are equivalent"
      };

      expect(bubbleSort(array, comparator)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
        expect(Array.prototype.sort.calls.count()).toEqual(0);


    });

    /*it('', function(){
      let array = randomArray();
      spyOn(array, 'sort');
      expect(array.sort).toHaveBeenCalledTimes(0);

      for(let i = 0; i < array.length -2; i++){
        // test a[i] <= a[i+1];
      }
    });

    function randomArray(n){
      //returns a random
    }*/
});
