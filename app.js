const readline = requier('readline')
async function showMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    process.stdout.write("Personal Journal\n")
    process.stdout.write("1: Write journal entries\n")
    process.stdout.write("2: View journal entries\n")
    process.stdout.write("3: Exit\n")

    const choice = await rl.question("Please select an option (1-3)")

    

}


