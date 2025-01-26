function collectUsers() {
    var Count;
    while (true) {
        Count = prompt("Enter the number of users:");
        
        if (!isNaN(Count) && Count.trim() !== "" && parseInt(Count) > 0) {
            Count = parseInt(Count);
            break;
        } else {
            alert("Please enter a number greater than 0.");
        }
    }

    var persons = [];
    for (var i = 0; i < Count; i++) {
        var name, age;

        while (true) {
            name = prompt(`Enter the name of user ${i + 1}`);
            if (name && name.length > 3 && name.length < 10) {
                break;
            } else {
                alert("Name must be more than 3 and less than 10 characters.");
            }
        }

        while (true) {
            age = prompt(`Enter the age of user ${i + 1}`);
            if (!isNaN(age) && age.trim() !== "" && parseInt(age) > 10 && parseInt(age) < 60) {
                age = parseInt(age);
                break;
            } else {
                alert("Age must be a number greater than 10 and less than 60.");
            }
        }

        persons.push({ name, age });
    }

    var tableHTML = `
    <table style="border-collapse: collapse; width: 60%; margin: 20px auto; text-align: left; border: 2px solid #333;">
        <thead style="background-color:rgb(121, 233, 255);">
        <tr>
            <th style="padding: 8px 12px;text-align: center">Name</th>
            <th style="padding: 8px 12px;text-align: center">Age</th>
        </tr>
        </thead>
        <tbody>
    `;

    persons.forEach(person => {
        tableHTML += `
        <tr style="background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
            <td style="padding: 8px 12px; text-align: center;">${person.name}</td>
            <td style="padding: 8px 12px; text-align: center;">${person.age}</td>
        </tr>
        `;
    });

    tableHTML += `
        </tbody>
    </table>
    `;

    document.body.innerHTML = `
    <h3 style="text-align: center; font-family: Arial, sans-serif; color: #333;">Users Data</h3>
    ${tableHTML}
    `;
}

collectUsers();
