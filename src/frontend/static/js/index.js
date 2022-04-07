const app = () => {
  // fetchUsers();
  fetchCategories();
}


if (document.readyState == 'loading') {
  // ещё загружается, ждём события
  document.addEventListener('DOMContentLoaded', app);
} else {
  // DOM готов!
  app();
}


function fetchCategories() {

  const ul = document.getElementById('categories');
  const list = document.createDocumentFragment();
  const url = 'http://localhost:8001/Categories';
  
  fetch(url, { headers: { Accept: 'application/json' } })
    .then((response) => response.json())
    .then((data) => {
      let categories = data;

      categories.map((c) => {
        let li = document.createElement('li');
        let slug = document.createElement('h3');
        let name = document.createElement('span');

        slug.innerHTML = `${c.slug}`;
        name.innerHTML = `${c.name}`;

        li.appendChild(slug);
        li.appendChild(name);
        list.appendChild(li);
      });
      ul.appendChild(list);
    })
    .catch((error) => {
      console.log(error);
    })
}

// function fetchUsers() {

//   const ul = document.getElementById('users');
//   const list = document.createDocumentFragment();
//   const url = 'https://jsonplaceholder.typicode.com/users';
  
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       let users = data;

//       users.map((u) => {
//         let li = document.createElement('li');
//         let name = document.createElement('h3');
//         let email = document.createElement('span');

//         name.innerHTML = `${u.name}`;
//         email.innerHTML = `${u.email}`;

//         li.appendChild(name);
//         li.appendChild(email);
//         list.appendChild(li);
//       });
//       ul.appendChild(list);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// }

