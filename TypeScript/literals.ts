type Color = "red" | "blue" | "green"; 

function getColorMessage(color: Color): string {
  return `You have chosen the color: ${color}`;
}

console.log(getColorMessage("red")); 
console.log(getColorMessage("yellow")); //Error