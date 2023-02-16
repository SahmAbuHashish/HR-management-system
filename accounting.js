
function renderTable() {

    getData();

    let tab = document.getElementById('table_1')
    console.log(tab);

    let admiNum = document.getElementById('Admin-num')
    let admiAve = document.getElementById('Admin-ave')
    let admiTotal = document.getElementById('Admin-salary')
    let numberOfEmployees = 0
    let adminAvarage = 0
    let adminTotalSalary = 0

    let marketingNum = document.getElementById('mark-num')
    let marketingAve = document.getElementById('mark-ave')
    let marketingTotal = document.getElementById('mark-salary')
    let MarknumberOfEmployees = 0
    let markAvarage = 0
    let markTotalSalary = 0

    let divNum = document.getElementById('div-num')
    let divAve = document.getElementById('div-ave')
    let divTotal = document.getElementById('div-salary')
    let divrOfEmployees = 0
    let divTotalSalary = 0
    let divAvarage = 0

    let financeNum = document.getElementById('finance-num')
    let financeAve = document.getElementById('finance-ave')
    let financeTotal = document.getElementById('finance-salary')
    let financeOfEmployees = 0
    let financeTotalSalary = 0
    let financeAvarage = 0

    let TotalNum = document.getElementById('total-num')
    let TotalAve = document.getElementById('total-ave')
    let TotalSalary = document.getElementById('total-salary')
    let totalOfEmployees = 0
    let total_Salary = 0
    let totalAvarage = 0

    if (emploData == null) {
        emploData = []
    }

    for (let i = 0; i < emploData.length; i++) {

        if (emploData[i].Department == "Administration") {

            numberOfEmployees += 1
            adminTotalSalary += emploData[i].salary
            adminAvarage = adminTotalSalary / numberOfEmployees

            admiNum.textContent = numberOfEmployees
            admiAve.textContent = adminAvarage
            admiTotal.textContent = adminTotalSalary
        }
        if (emploData[i].Department == "Marketing") {

            MarknumberOfEmployees += 1
            markTotalSalary += emploData[i].salary
            markAvarage = markTotalSalary / MarknumberOfEmployees

            marketingNum.textContent = MarknumberOfEmployees
            marketingAve.textContent = markAvarage
            marketingTotal.textContent = markTotalSalary
        }
        if (emploData[i].Department == "Development") {

            divrOfEmployees += 1
            divTotalSalary += emploData[i].salary
            divAvarage = divTotalSalary / divrOfEmployees

            divNum.textContent = divrOfEmployees
            divAve.textContent = divAvarage
            divTotal.textContent = divTotalSalary
        }
        if (emploData[i].Department == "Finance") {

            financeOfEmployees += 1
            financeTotalSalary += emploData[i].salary
            financeAvarage = financeTotalSalary / financeOfEmployees

            financeNum.textContent = financeOfEmployees
            financeAve.textContent = financeAvarage
            financeTotal.textContent = financeTotalSalary
        }
    totalOfEmployees = financeOfEmployees + divrOfEmployees + MarknumberOfEmployees + numberOfEmployees

    total_Salary = financeTotalSalary + divTotalSalary + markTotalSalary + adminTotalSalary

    totalAvarage = financeAvarage + divAvarage + markAvarage  + adminAvarage

    TotalNum.textContent = totalOfEmployees
    TotalAve.textContent = totalAvarage
    TotalSalary.textContent = total_Salary
    }
}

function getData() {
    let josinArr = localStorage.getItem('Emplo')
    emploData = JSON.parse(josinArr)
}
getData();
renderTable();
