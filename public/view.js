let currentTables;
let currentWaitlist;

//select elements from HTML
if (window.location.pathname === '/view') {
    currentTables = document.querySelector('#current-tables');
    currentWaitlist = document.querySelector('#current-waitlist');
  }


//make GET api request for current tables (reservations)

const getTables = () => {
    fetch('/api/view', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())   //this is metadata about the fetch request
    .then(data => {    //this is each reservation's data
        renderTables(data)

        return fetch('/api/waitlist', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => renderWaitlist(data))
    })      
}
    
const renderTables = (tables) => {
    console.log(tables);

    //use data returned from fetch() request to create li elements for current tables
    //HTML should look like this: <li class="list-group-item table">Table 1 (empty) </li>
    tables.forEach((table) => {
        let li = document.createElement('li');
        li.innerText = `Name: ${table.name}, Phone: ${table.phone}, Email: ${table.email}, ID: ${table.uniqueId}`;
        li.classList.add("list-group-item");

        currentTables.append(li);
    })
}

const renderWaitlist = (tables) => {
    
    console.log('waitlist');
    console.log(tables);

    //use data returned from fetch() request to create li elements for current tables
    //HTML should look like this: <li class="list-group-item waitlist">Reservation 1</li>

    tables.forEach((table) => {
        let li = document.createElement('li');
        li.innerText = `Name: ${table.name}, Phone: ${table.phone}, Email: ${table.email}, ID: ${table.uniqueId}`;
        li.classList.add("list-group-item");

        currentWaitlist.append(li);
    })

}

getTables();


