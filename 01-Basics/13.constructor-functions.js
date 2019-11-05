/* Constructor Functions
    do not have any special syntax

    are invoked using the 'new' keyword
        var d = new Date()
        var nos = new Array(10,20,30)

    when invoked with new
        this -> a new object
        this -> returned by default

 */
    
function Employee(id, name, salary){
	//this -> new object
	this.id = id;
	this.name = name;
	this.salary = salary;

	this.display = function(){
		console.log('id = ', this.id, ' name = ', this.name, ' salary = ', this.salary);
    };
}

var Employee = (function(){
    function Employee(id, name, salary) {
        //this -> new object
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    Employee.prototype.display = function () {
        console.log('id = ', this.id, ' name = ', this.name, ' salary = ', this.salary);
    };
    return Employee;
})();

var emp = new Employee()