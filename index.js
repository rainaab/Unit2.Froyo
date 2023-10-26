const userFlavors = prompt (
    "Please enter a couple of froyo flavors separated by commas.", "vanilla, strawberry, chocolate"
)
const stringArray = userFlavors.split(",")

let i=0;
let flavors = {} ;
while(i<stringArray.length){
    if(stringArray[i] in flavors){
       flavors[stringArray[i]] +=1;
    }
    else {
        flavors[stringArray[i]] = 1;
    }
}
return flavors;
 

console.table(flavors);