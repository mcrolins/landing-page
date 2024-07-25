const main = document.querySelector('.main')
const aboutUs = document.querySelector('.about-us');
const imageAndText = [
{text:`<ul>
  <h1><span>O</span>rganic <span>D</span>ines</h1>
  <h1 class = "headlines"><span>F</span>eel <span>B</span>etter <span>T</span>omorrow <span>E</span>at <span>H</span>ealthy <span>T</span>oday</h1>
  Hello, looking for well prepared healthy meals?
<p>Welcome to  Organic dines where we serve healthy food fresh from the farm.
</p>
<p>Check out our menu by clicking the Order Now below.</p>
<p>You can also make table reservations by clicking the reservation button</p>
<button class="next-button">next</button>
<button class="order-now">Order Now</button>
<button class="reservation">Make a reservation</button>
</ul>`, image:'pexels-mark-stebnicki-2255920.jpg'},
{text:`<ul><header>Discover the Essence of Organic Dining</header>
    <p>At Organic Dines, we're passionate about transforming your dining experience. Our commitment to sustainability and the environment shines through in every dish we serve. Here's what sets us apart:

    </p>
    <button class="next-button">next</button>
<button class="order-now">Order Now</button>
<button class="reservation">Make a reservation</button>
    </ul>`, image:'Food-Thought-2-2048x1366-1367976532.jpg'},
{text:`<ul> <header> A Farm to Table Journey</header>
    <p>We believe that great food starts with exceptional ingredients. Our culinary team works closely with local farmers and suppliers to bring you the finest organic produce, meats, and dairy. Our commitment to sustainable sourcing not only ensures you enjoy the best flavors but also supports our local community.
    </p>
    <button class="next-button">next</button>
<button class="order-now">Order Now</button>
<button class="reservation">Make a reservation</button>` , image:'seedling.jpg'},

    {text:`<ul><header>The Organic Difference</header>
    <p> Our menu is a celebration of pure, unadulterated flavors. Say goodbye to artificial additives, pesticides, and GMOs. Every bite at Organic Dines is a testament to the natural beauty of real food, prepared with love and care.</p> <button class="next-button">next</button>
<button class="order-now">Order Now</button>
<button class="reservation">Make a reservation</button>`, image:'sunflowers.jpg'},
    {text:`<ul>
    <header>Artistry on a Plate</header>
    <p>Prepare to be dazzled by our chef's artistry. Each dish is a masterpiece that harmoniously blends flavors, colors, and textures. From vibrant salads to mouthwatering entrees and delectable desserts, our menu showcases the versatility of organic ingredients.
<button class="next-button">next</button>
<button class="order-now">Order Now</button>
<button class="reservation">Make a reservation</button>
    </p>
    </ul>`, image:'whole foods.jpg'},
];


let currentIndex = 0;
const nextButton = document.querySelector('.next-button');

aboutUs.addEventListener("click", function(event) {
  if (event.target.classList.contains('next-button')) {
  currentIndex = (currentIndex + 1) % imageAndText.length;
  const {image, text} = imageAndText[currentIndex];
  main.style.backgroundImage = `url(${image})`;
  aboutUs.innerHTML = text;
  

  }
});
