function createRectangle(x, y) {
     if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
        throw ("Width and height must be positive numbers.");
    }

     function Area() {
        return x * y;
    }

     function Perimeter() {
        return 2 * (x + y);
    }

     
    function displayInfo() {
        console.log(`Rectangle Information:
        - Width: ${x}
        - Height: ${y}
        - Area: ${Area()}
        - Perimeter: ${Perimeter()}`);
    }
 
    return {
        Area: Area,
        Perimeter: Perimeter,
        displayInfo: displayInfo,
    };
}


var rectangle = createRectangle(5, 10);
    rectangle.displayInfo();
 
