function Phone(brand, price, color, camera) {
	this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
	this.camera = camera;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + "Phone have camera with: " + this.camera + "Mpx.");
}

var samsungGalaxyS6 = new Phone("Samsung", 2000, "blue", 14);
var iPhone6S = new Phone("Apple", 2250, "silver", 15);
var onePlusOne = new Phone("OnePlus", 1500, "black", 13);

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();