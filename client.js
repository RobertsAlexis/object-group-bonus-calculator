// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let testEmployee =  {
  name: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5
};


// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) { 
  console.log("employee info:", employee);
   let reviewRating = employee.reviewRating;
   let employeeName = employee.name;

  // your logic here
  let bonusRate = 0
  switch (reviewRating){
    case reviewRating<=2:
      console.log("No bonus");
      bonusRate = 0;
      break;
    case (3):
      //bonus rate 4% of annual salary
      console.log("4% bonus");
      bonusRate = .04;
      break;
    case (4):
      // bonus rate of 6% of annual salary
      console.log("6% bonus")
      bonusRate = .06;
      break;
    case (5):
        // bonus rate of 10% of annual salary
        console.log("10% bonus");
        bonusRate = .1;
        break;
  }
  if(employee.employeeNumber.length===4){
    bonusRate += 0.5;
  };
  if(employee.annualSalary>65000){
    bonusRate -= .01;
  }
  if(bonusRate>0.13){
    bonusRate = 0.13;
  }
  if(bonusRate<=0){
    bonusRate = 0;
  }
  console.log(bonusRate);
  let totalBonus = Number(employee.annualSalary) * bonusRate;
  let totalCompensation = Number(employee.annualSalary) + totalBonus;
  console.log(employee.name);
  // return new object with bonus results
  return { employeeName, bonusRate, totalBonus, totalCompensation}

}
console.log("bonus for ", calculateIndividualEmployeeBonus(testEmployee));

for(let employee of employees){
  calculateIndividualEmployeeBonus(employee);
}
