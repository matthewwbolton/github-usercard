/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [`matthewwbolton`, `cgiroux86`, `tetondan`, `dustinmyers`, `justsml`, `luishrd`, `bigknell`];

followersArray.forEach(elem => {
  axios.get(`https://api.github.com/users/${elem}`)
    .then(response => {
      console.log(response.data)
      cards.appendChild(createCard(response.data));
    })
    .catch(err => {
      console.log(err)
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// axios.get('https://api.github.com/users/matthewwbolton')
//   .then(response => {
//     console.log(response.data)
//     cards.appendChild(createCard(response.data));
//   })
//   .catch(err => {
//     console.log(err)
//   });

function createCard(obj){
  const card = document.createElement('div'),
    img = document.createElement('img'),
    cardInfo = document.createElement('div'),
    name = document.createElement('h3'),
    p1 = document.createElement('p'),
    p2 = document.createElement('p'),
    p3 = document.createElement('p'),
    a = document.createElement('a'),
    p4 = document.createElement('p'),
    p5 = document.createElement('p'),
    p6 = document.createElement('p');

    


    card.classList.add('card');
    cardInfo.classList.add('card-info');
    name.classList.add('name');
    p1.classList.add('username');

    
    // card.append(img, cardInfo);
    // cardInfo.append(name, p1,p2,p3,p4,p5,p6);
    // cardInfo.append(a);
   

    
    card.appendChild(img);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(p1);
    cardInfo.appendChild(p2);
    cardInfo.appendChild(p3);
    
    cardInfo.appendChild(p4);
    cardInfo.appendChild(p5);
    cardInfo.appendChild(p6);

    img.src = obj.avatar_url;
    name.textContent = obj.name;
    p1.textContent = obj.login;
    p2.textContent = `Location: ${obj.location}`;
    p3.textContent = `Profile:`;
    a.href = obj.html_url;
    a.textContent = obj.html_url;
    p4.textContent = `Followers: ${obj.followers}`;
    p5.textContent = `Following: ${obj.following}`;
    p6.textContent = `Bio: ${obj.bio}`;

  p3.appendChild(a);  
  
    return card;

  };

  const cards = document.querySelector('.cards');
  

