*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}
:root{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --color-1:burlywood;
    --color-2:seagreen;
    --color-3:#cce6cc; 
}

.main {
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  display:flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url('pexels-mark-stebnicki-2255920.jpg');
  width:100%;
  transition: ease-in-out 0.2s;
}

.menu-bar{
   background-color: var(--color-3);
   display:flex;
   flex-direction: row;
   align-items:center;
   justify-content: space-between;
   width:100%;
   padding: 20px;
   z-index: 1;
   margin-right: 0;
   position: fixed;
   z-index: 5;
   
}
@media (max-width: 480px){
  .menu-bar{
width: fit-content;
  }

}

.about-us{
  background-color: var(--color-2);
  padding: 20px; 
  margin: 20px 5px 20px 5px; 
  z-index:3;
  height:auto(40%);
  width:100%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom:150px;
  box-shadow: black;
  opacity: 85%;
  color:white;
  flex-wrap: wrap;
  
  
}

nav{
  display: flex;
  flex-direction: row;
  background-color: transparent;
  padding:20px 5px 20px 5px;
  width:100%;
  flex-wrap:nowrap;
  
  
}
.about{
  background-color: var(--color-3);
  box-shadow:5px 5px 10px rgba(0, 0, 0, 0.3);
  padding: 5px;
  border-radius: 15px;
  margin-right: 5px;
  width: fit-content;
  transition: transform 0.3s ease-in-out;
  display: grid;
  grid-template-columns: repeat(4);
  gap: 10px;
}
.about:hover{
transform: scale(1.08);
}

.location{
  background-color: var(--color-2);
  padding: 20px;
  border-radius: 15px;
  margin:20px 5px 10px 20px;
  ;
}

.socials-bar{
  padding: 20px;
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  width:100%;
  border-bottom: solid 2px white;
}
.socials-bar p {
  font-size: small;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
}

span{
  font-size: larger;
  
  
}

button{
  border-radius: 30px;
  padding: 20px;
  border: 2px solid white;
  background-color:var(--color-2);
  margin:20px 0 20px 0;
  position:absolute;
  left: 32%; 
  z-index: 4;
  transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
}
button:hover{
  background-color: white;
  border:2px solid transparent;
  cursor: pointer;
}

.reservation{
  position: absolute;
  left:50%;
}
body{
  background-color: var(--color-3);
}
.reason-1{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.icons{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 30px;
}
.icon{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.next-button{
  width: 10;
  height: 10;
  border-top: 10px solid white; /* Adjust thickness as needed */
  border-bottom: 10px solid white; /* Adjust thickness as needed */
  border-left: 15px solid black; /* Adjust size and color as needed */
  background-color: var(--color-2);
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 10px;
  position: absolute;
  left: 95%;
  bottom: 30%;
  opacity: 100%;
}

.next-button:hover {
  background-color: white; /* Adjust hover color as needed */
}  
.fa-facebook, .fa-linkedin, .fa-instagram, .fa-twitter{
  text-decoration: none;
  color: white;
}

.ending{
  background-color: var(--color-2);
  
}
footer{
  color: white;
  padding: 20px;
}
.middle{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
  padding: 10px;
  color: white;
  border-bottom: 2px solid white;
  padding: 20px;
}
.middle a{
  text-decoration: wavy;
  color: white;
}
.middle a:hover{
  text-decoration: underline;
  cursor: pointer;
}
.middle a::after{
  color: black;
}
.footer a{
  text-decoration: none;
  color:white;
}
header{
  font-size: 30px;
  font-weight: bold;
}
