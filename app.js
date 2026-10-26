const readline = require('readline/promises')
async function showMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
  let choice;
    do {
    process.stdout.write("Personal Journal\n")
    process.stdout.write("1: Write journal entries\n")
    process.stdout.write("2: View journal entries\n")
    process.stdout.write("3: Exit\n")    
       choice = await rl.question("Please select an option (1-3)")
    switch (choice){
        case '1': 
         console.log('\n You selected: Write journal entry')  
         break;
        case '2':
         console.log('\n You selected: View journal entries') 
         break;
        case '3':
          console.log('\n Goodbye!')
          break; 
        default:
          console.log('\n Invalid selection')     

    }   
      } while(choice !== "3")  
    rl.close()

}
showMenu()


