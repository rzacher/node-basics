// example of exporting a function as class

module.exports = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = function() {
		return firstName + " " + lastName;
	}
}