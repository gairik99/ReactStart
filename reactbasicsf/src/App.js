// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// const DownBtn = ({ count, setCount }) => {
//   let downVal = () => setCount(--count);
//   return (<button onClick={downVal}>Decrement</button>)
// }

// const UpBtn = ({ count, setCount }) => {
//   let upVal = () => setCount(++count);
//   return (<button onClick={upVal}>Increment</button>)
// }
const brands = [
  { id: '1', brandName: "Puma" },
  { id: '2', brandName: "Reebok" },
  { id: '3', brandName: "Addidas" },
  { id: '4', brandName: "Clark" },
  { id: '5', brandName: "Nike" }
]



function App() {

  const [selectedBrand, setSelectedBrand] = useState([]);

  const addCart = (e) => {
    let id = e.target.dataset.id;
    let isPresent = selectedBrand.find(item => item.id === id);
    let selectedItem = brands.find(item => item.id === id);

    if (isPresent) {
      let updateBrand = selectedBrand.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item);
      setSelectedBrand(updateBrand);
    }
    else {
      selectedItem = { ...selectedItem, count: 1 };
      setSelectedBrand([...selectedBrand, selectedItem]);

    }
  }

  return (
    <>
      <div className="App" >
        <h2>All Available Brands</h2>
        {
          brands.map(({ id, brandName }) => {
            return <div >
              <span>{brandName}</span>
              <button data-id={id} onClick={addCart}>Add To Cart</button>
            </div>
          }

          )
        }
      </div >

      <div className='App'>
        <h2>Items In Cart</h2>
        {
          selectedBrand.map(({ id, brandName, count }) => <div>
            <span>{brandName}</span>
            <span>{count}</span>
          </div>)
        }
      </div>
    </>

  );
}

export default App;
