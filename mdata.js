var mongoose = require('mongoose');
var employeeschema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHours: Number,
});

employeeschema.methods.totalSalary = function(){
    console.log("total",this.hourlyrate*this.totalHours);
}

var employeeModel = mongoose.model('Employee', employeeschema);

var employee= new employeeModel({
    name: 'Arnab',
    email: 'info@gmail.com',
    etype: 'hourly', 
    hourlyrate: 10,
    totalHours: 16
});

// console.log(employee);
// employeeschema.totalSalary();
employee.totalSalary();