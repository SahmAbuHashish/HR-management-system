
function EmployeeInfo(ID, Name, Department, Level, Image, salary) {
    this.ID = ID;
    this.Name = Name;
    this.Department = Department;
    this.Level = Level;
    this.Img = Image;
    this.salary = salary;
}

let employee_1 = new EmployeeInfo("1000","Ghazi Samer","Administration","Senior","./images.png");
let employee_2 = new EmployeeInfo('1001','Lana Ali','Finance','Senior',"./images.png");
let employee_3 = new EmployeeInfo('1002','Tamara Ayoub','Marketing','Senior',"./images.png");
let employee_4 = new EmployeeInfo('1003','Safi Walid','Administration','Mid-Senior',"./images.png");
let employee_5 = new EmployeeInfo('1004','Omar Zaid','Development','Senior',"./images.png");
let employee_6 = new EmployeeInfo('1005','Rana Saleh','Development','Junior',"./images.png");
let employee_7 = new EmployeeInfo('1005','Hadi Ahmad','Finance','Mid-Senior',"./images.png");


EmployeeInfo.prototype.Salary = function () {

    if (this.Level == "Junior") {
        let netsalary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
        return netsalary = netsalary - Math.floor(netsalary * (7.5 / 100))
    }
    else if (this.Level == "Mid-Senior") {
        let netsalary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
        return netsalary = netsalary - Math.floor(netsalary * (7.5 / 100))
    }
    else if (this.Level == "Senior") {
        let netsalary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
        return netsalary = netsalary - Math.floor(netsalary * (7.5 / 100))
    }
};

EmployeeInfo.prototype.render = function () {
    document.write(`
    Employee ID: <strong>${this.ID}</strong>, 
    Full Name: <strong>${this.Name}</strong>, 
    Department: <strong>${this.Department}</strong>, 
    Level: <strong>${this.Level}</strong>, 
    Salary:<strong> ${this.Salary()}</strong>, 
    Image: <strong>${this.Img}</strong>. <br><br>`);
};


employee_1.render();
employee_2.render();
employee_3.render();
employee_4.render();
employee_5.render();
employee_6.render();
employee_7.render();




