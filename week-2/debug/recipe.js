// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);
// this does not work because recipe does not include .ingredients and to show ingredients in a new line you need a for loop 

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);
  for(ingredients of recipe.ingredients){
  console.log(ingredients)
 }