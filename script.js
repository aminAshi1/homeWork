
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        const tableBody = document.getElementById('table-body')
        data.map(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                        <th scope="row">${item.id}</th>
                        <td>${item.name}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item.address.city}</td>
        `
        tableBody.appendChild(tr);
        })
    })        
