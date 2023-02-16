let Id = 1000;
let emploData = [];

const Salary = function (emploo) {

        if (emploo.Level == "Junior") {
            let netsalary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
            return (netsalary = netsalary - Math.floor(netsalary * (7.5 / 100)));
        } else if (emploo.Level == "Mid-Senior") {
            let netsalary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
            return (netsalary = netsalary - Math.floor(netsalary * (7.5 / 100)));
        } else if (emploo.Level == "Senior") {
            let netsalary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
            return (netsalary = netsalary - Math.floor(netsalary * (7.5 / 100)));
        
    }
};

function EmployeeInfo(Name, Department, Level, Image,salary) {
    this.ID = Id;
    this.Name = Name;
    this.Department = Department;
    this.Level = Level;
    this.Img = Image;
    this.salary = salary
    emploData.push(this)
}
console.log(emploData);

// EmployeeInfo.prototype.Salary = function () {
//     if (this.Level == "Junior") {
//         let netsalary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
//         return (netsalary = netsalary - Math.floor(netsalary * (7.5 / 100)));
//     } else if (this.Level == "Mid-Senior") {
//         let netsalary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
//         return (netsalary = netsalary - Math.floor(netsalary * (7.5 / 100)));
//     } else if (this.Level == "Senior") {
//         let netsalary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
//         return (netsalary = netsalary - Math.floor(netsalary * (7.5 / 100)));
//     }return netsalary
// };

function render_2() {

    let employeeDiv = document.getElementById("employeeDiv");
    employeeDiv.innerHTML = "";

    getData();
    

    if (emploData == null) {
        emploData = []
    }
    console.log(emploData);

    for (let i = 0; i < emploData.length; i++) {
        console.log(emploData[i].salary);

        let divFinance = document.createElement("div");
        let divAdministration = document.createElement("div");
        let divMarketing = document.createElement("div");
        let divDevelopment = document.createElement("div");
        let card = document.createElement("div");

        card.setAttribute("class", "Cadrs");

        let arr = [];
        arr.push(emploData[i].Name);
        for (let i = 0; i < arr.length; i++) {
            Id += 1;
        }

        //----------------------------------
        if (emploData[i].Department == "Finance") {

            let titleDiv = document.createElement("h4");
            divFinance.appendChild(titleDiv);
            titleDiv.textContent = "Finance Department";

            employeeDiv.appendChild(divFinance);
            divFinance.appendChild(card);

            let img = document.createElement("Img");
            img.setAttribute("src", emploData[i].Img);
            img.Width = "150";
            img.height = "350";
            img.borderRadius = "50%";
            card.appendChild(img);

            let parag = document.createElement("p");
            card.appendChild(parag);

            parag.textContent = `Employee ID: ${Id},
                Full Name: ${emploData[i].Name},
                Department: ${emploData[i].Department},
                Level: ${emploData[i].Level},
                Salary: ${emploData[i].salary},`;
        }
        //-------------------------------------
        if (emploData[i].Department == "Administration") {

            let titleDiv = document.createElement("h4");
            divAdministration.appendChild(titleDiv);
            titleDiv.textContent = "Administration Department";

            employeeDiv.appendChild(divAdministration);
            divAdministration.appendChild(card);

            let img = document.createElement("Img");
            img.setAttribute("src", emploData[i].Img);
            img.Width = "150";
            img.height = "350";
            img.borderRadius = "50%";
            card.appendChild(img);

            let parag = document.createElement("p");
            card.appendChild(parag);

            parag.textContent = `Employee ID: ${Id},
                Full Name: ${emploData[i].Name},
                Department: ${emploData[i].Department},
                Level: ${emploData[i].Level},
                Salary: ${emploData[i].salary},`;
        }
        //------------------------------------
        if (emploData[i].Department == "Marketing") {

            let titleDiv = document.createElement("h4");
            divMarketing.appendChild(titleDiv);
            titleDiv.textContent = "Marketing Department";

            employeeDiv.appendChild(divMarketing);
            divMarketing.appendChild(card);

            let img = document.createElement("Img");
            img.setAttribute("src", emploData[i].Img);
            img.Width = "150";
            img.height = "350";
            img.borderRadius = "50%";
            card.appendChild(img);

            let parag = document.createElement("p");
            card.appendChild(parag);

            parag.textContent = `Employee ID: ${Id},
                    Full Name: ${emploData[i].Name},
                    Department: ${emploData[i].Department},
                    Level: ${emploData[i].Level},
                    Salary: ${emploData[i].salary},`;
        }
        //------------------------------------
        if (emploData[i].Department == "Development") {

            let titleDiv = document.createElement("h4");
            divDevelopment.appendChild(titleDiv);
            titleDiv.textContent = "Development Department";

            employeeDiv.appendChild(divDevelopment);
            divDevelopment.appendChild(card);

            let img = document.createElement("Img");
            img.setAttribute("src", emploData[i].Img);
            img.Width = "150";
            img.height = "350";
            img.borderRadius = "50%";
            card.appendChild(img);

            let parag = document.createElement("p");
            card.appendChild(parag);

            parag.textContent = `Employee ID: ${Id},
                    Full Name: ${emploData[i].Name},
                    Department: ${emploData[i].Department},
                    Level: ${emploData[i].Level},
                    Salary: ${emploData[i].salary},`;
        }
    }
}

let form = document.getElementById("formId");
form.addEventListener("submit", showData);

function showData(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let Department = event.target.department.value;
    let Level = event.target.Level.value;
    let Image = event.target.Image.value;
    // let salary = Salary();


    let nweEmplo = new EmployeeInfo(name, Department, Level, Image);
    // nweEmplo.render();
    nweEmplo.salary = Salary(nweEmplo);


    let josinArr = JSON.stringify(emploData)
    localStorage.setItem('Emplo', josinArr)
    render_2();
}

function getData() {
    let josinArr = localStorage.getItem('Emplo')
    emploData = JSON.parse(josinArr)
}

getData();
render_2();
//---------------------------------------------------------------------

// EmployeeInfo.prototype.render = function () {

//     let employeeDiv = document.getElementById("employeeDiv");

//     let divFinance = document.createElement("div");
//     let divAdministration = document.createElement("div");
//     let divMarketing = document.createElement("div");
//     let divDevelopment = document.createElement("div");
//     let card = document.createElement("div");

//     card.setAttribute("class", "Cadrs");

//     let arr = [];
//     arr.push(this.Name);
//     for (let i = 0; i < arr.length; i++) {
//         Id += 1;
//     }
//     //----------------------------------
//     if (this.Department == "Finance") {

//         let titleDiv = document.createElement("h4");
//         divFinance.appendChild(titleDiv);
//         titleDiv.textContent = "Finance Department";

//         employeeDiv.appendChild(divFinance);
//         divFinance.appendChild(card);

//         let img = document.createElement("Img");
//         img.setAttribute("src", this.Img);
//         img.Width = "150";
//         img.height = "350";
//         img.borderRadius = "50%";
//         card.appendChild(img);

//         let parag = document.createElement("p");
//         card.appendChild(parag);

//         parag.textContent = `Employee ID: ${Id},
//     Full Name: ${this.Name},
//     Department: ${this.Department},
//     Level: ${this.Level},
//     Salary: ${this.Salary()},`;
//     }
//     //-------------------------------------
//     if (this.Department == "Administration") {

//         let titleDiv = document.createElement("h4");
//         divAdministration.appendChild(titleDiv);
//         titleDiv.textContent = "Administration Department";

//         employeeDiv.appendChild(divAdministration);
//         divAdministration.appendChild(card);

//         let img = document.createElement("Img");
//         img.setAttribute("src", this.Img);
//         img.Width = "150";
//         img.height = "350";
//         img.borderRadius = "50%";
//         card.appendChild(img);

//         let parag = document.createElement("p");
//         card.appendChild(parag);

//         parag.textContent = `Employee ID: ${Id},
//     Full Name: ${this.Name},
//     Department: ${this.Department},
//     Level: ${this.Level},
//     Salary: ${this.Salary()},`;
//     }
//     //------------------------------------
//     if (this.Department == "Marketing") {

//         let titleDiv = document.createElement("h4");
//         divMarketing.appendChild(titleDiv);
//         titleDiv.textContent = "Marketing Department";

//         employeeDiv.appendChild(divMarketing);
//         divMarketing.appendChild(card);

//         let img = document.createElement("Img");
//         img.setAttribute("src", this.Img);
//         img.Width = "150";
//         img.height = "350";
//         img.borderRadius = "50%";
//         card.appendChild(img);

//         let parag = document.createElement("p");
//         card.appendChild(parag);

//         parag.textContent = `Employee ID: ${Id},
//     Full Name: ${this.Name},
//     Department: ${this.Department},
//     Level: ${this.Level},
//     Salary: ${this.Salary()},`;
//     }
//     //------------------------------------
//     if (this.Department == "Development") {

//         let titleDiv = document.createElement("h4");
//         divDevelopment.appendChild(titleDiv);
//         titleDiv.textContent = "Development Department";

//         employeeDiv.appendChild(divDevelopment);
//         divDevelopment.appendChild(card);

//         let img = document.createElement("Img");
//         img.setAttribute("src", this.Img);
//         img.Width = "150";
//         img.height = "350";
//         img.borderRadius = "50%";
//         card.appendChild(img);

//         let parag = document.createElement("p");
//         card.appendChild(parag);

//         parag.textContent = `Employee ID: ${Id},
//     Full Name: ${this.Name},
//     Department: ${this.Department},
//     Level: ${this.Level},
//     Salary: ${this.Salary()},`;
//     }
// };




//----------------------------------------------------------------------------
// EmployeeInfo.prototype.render = function () {
//     document.write(`
//     Employee ID: <strong>${this.uniqueID()}</strong>,
//     Full Name: <strong>${this.Name}</strong>,
//     Department: <strong>${this.Department}</strong>,
//     Level: <strong>${this.Level}</strong>,
//     Salary:<strong> ${this.Salary()}</strong>,
//     Image: <strong>${this.Img}</strong>. <br><br>`);
// };

// let employee_1 = new EmployeeInfo("Ghazi Samer", "Administration", "Senior", "./images.png");
// let employee_2 = new EmployeeInfo('1001','Lana Ali','Finance','Senior',"./images.png");
// let employee_3 = new EmployeeInfo('1002','Tamara Ayoub','Marketing','Senior',"./images.png");
// let employee_4 = new EmployeeInfo('1003','Safi Walid','Administration','Mid-Senior',"./images.png");
// let employee_5 = new EmployeeInfo('1004','Omar Zaid','Development','Senior',"./images.png");
// let employee_6 = new EmployeeInfo('1005','Rana Saleh','Development','Junior',"./images.png");
// let employee_7 = new EmployeeInfo('1005', 'Hadi Ahmad', 'Finance', 'Mid-Senior', "./images.png");

// employee_1.render();
// employee_2.render();
// employee_3.render();
// employee_4.render();
// employee_5.render();
// employee_6.render();
// employee_7.render();
