import React, { useEffect } from 'react';
import './App.css';
import {useState} from 'react'; 
const products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
  return (
    <div className="App">
      <FilterableProductTable products = {products}></FilterableProductTable>
    </div>
  );
}

export default App;

const FilterableProductTable = (props) => {
  const {products} = props;
  const [filterData, setFilterData] = useState(products);
  const [str, setStr] = useState('');
  const changeData = (value) => {
    setStr(value);
    const filt = products.filter(el => el.name.includes(value));
    setFilterData(filt); 
  }

  const checkedData = (checked) => {
    console.log(checked);
    if(checked){
      const filt = filterData.filter(el => el.stocked);
      setFilterData(filt);
    }
    else{
      // console.log(strS);
      let filt = products.filter(el => !el.stocked && el.name.includes(str));
      console.log(filt);
      filt = [...filterData, ...filt];
      // console.log(filt);
      setFilterData(filt);
    }
  }
  
  return(
    <div className='filterableProductTable'>
      <SearchBar changeData={changeData} checkedData = {checkedData}></SearchBar>
      <ProductTable products = {filterData}></ProductTable>
    </div>
  )
}

const SearchBar = ({changeData, checkedData}) => {
  return(
    <div className='searchBar'>
      <input type='search' placeholder='Search' onChange={(e) => changeData(e.target.value)}></input>
      <div>
        <input type='checkbox' onChange={(e) => {checkedData(e.target.checked)}}></input>
        <span>Only show products in stock</span>
      </div>    
  </div>
  )
} 

const ProductTable = (props) => {
  const {products} = props;
  let titles = products.map(el=>{
    return el.category
  });

  let answer = [];
  if(titles){
    answer.push(titles[0]);
  }
  for(let i=1; i<titles.length; i++){
    if(titles[i] !== titles[i-1]){
      answer.push(titles[i])
    }
  }
  
  return(
    <div className='ProductTable'>
      <span>Name</span> 
       &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
      <span>Price</span>
      <br></br>
      {
        answer.map((el, index)=> {
          return  <CategoryTitle title={el} products={products} key={`Cat${index}`}/>
        })
      }
     
    </div>
  )
}

const CategoryTitle = (props) => {
  const {products, title} = props
  const filterProducts = products.filter(el => el.category === title);
  return(
    <div>
        <table>
        <thead>
          <tr>
            <th colSpan='2'>{props.title}</th>
          </tr>
        </thead>
      </table>
      {
        filterProducts.map((el, index) => {
         const {name, price, stocked } = el;
         return <Product name = {name} price = {price} key = {index} stocked={stocked}></Product>
        })
      } 
    </div>
            
  )
}

const Product = (props) => {
  const {name, price, stocked} = props
  return(
    <table>
      <tbody>
        <tr>
            {
              stocked ? <td className='td'><span>{name}</span></td> : <td className='td' style={{color: 'red'}}><span>{name}</span></td>
            }
            <td className='td'><span>{price}</span></td>
          </tr>
      </tbody>
        
      
    </table>
  )
}
