let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

let foodArray1 = [food,equipment,pets];
console.log(foodArray1[2])

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray=food.split(',').sort();
let equipmentArray=equipment.split(',').sort();
let petsArray=pets.split(',').sort();
let sleepAidsArray = sleepAids.split(",").sort();

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold=[foodArray,equipmentArray,petsArray,sleepAidsArray];
// cargoHold.push(foodArray)
console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input=require('readline-sync');
let cabinetNumber= input.question("Select a cabinet(0-3):");
// console.log(cargoHold[cabinetNumber]);

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetNumber >cargoHold.length){
  console.log(`Invalid entry !`);
  
}else{
  console.log(cargoHold[cabinetNumber]);
  let item=input.question("which item you need to select:");
  if(cargoHold[cabinetNumber].includes(item)){
    console.log(`Cabinet ${cabinetNumber} DOES contains ${item}`)
  }else{
    console.log(`Cabinet ${cabinetNumber} DOES contains ${item}`)
  }
}



//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
