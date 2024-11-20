import './style.css';
/*
TASK 1 
Here I am using REact Framework So index.js file should invoke a javascript file 
in our case product.js
index.html is a static web page you can run it alone with no need for react framwork
*/
function Product() {
  return (
    <div>
      <h4>TASK 1 - Sticking with React Framwork </h4>
      <h1 className='App-header'>Product List</h1>
      <div className='container'>
        <ul>
           <li>Apple</li>
           <li>Banana</li>
           <li>Orange</li>
        </ul>
      </div>
      <p id='note'>This project has been created by <span id='name'>ABDALLAH SHNAINO</span> for Gaza Sky Geek as a requerement for selection stage in Front-end Development training</p>
    </div>
  );
}

export default Product;
