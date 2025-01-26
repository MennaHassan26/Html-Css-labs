         function test(x, y) {
             if (arguments.length !== 2) {
                throw("The function accepts only 2 parameters.");
            }
             console.log(arguments)
        }


        function add() {
            for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] !== 'number') {
                    throw ("All parameters must be numbers.");
                }
            }
        
            var sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
        
            console.log(sum);
        }

    test(10,30)
    
    add(1, 2, 3, 4);  
    add(5, 10, -2);   
    add(1, "one", 3);  
    