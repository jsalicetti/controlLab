// radius is 5 meters
// PI = 3.1415;


const radius = 5
const PI = 3.1415
const area = 3.1415 * 5 * 5
console.log(area);

// each plant requires a minimum space of 0.8
const minSpace = 0.8;

// starting with 20 plants 
const plant = 20
const equation = 20/0.8
console.log(equation)

// the plants double every year
const week1 = 20
const week2 = week1*2
const week3 = week2*2
console.log(week1)
console.log(week2)
console.log(week3)

// Estimate the plant growth

const capacity = area / minSpace;
function plantGrowth(weeks) {

  // Calculate the number of plants after a few weeks (3)
  console.log();
  const plantCount = plant * Math.pow(2, weeks);