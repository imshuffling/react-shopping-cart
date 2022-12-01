import React, { useState } from "react";
import { XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import data from "./data";

function App() {
  const [cart, setCart] = useState(data);

  const completeTask = (id: string): void => {
    const filteredTodos = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(filteredTodos);
  };

  const handleAdd = (item: any): void => {
    let x = cart.map((i) => {
      if (item.id === i.id) {
        i.quantity += 1;
      }
      return i;
    });
    setCart(x);
  };

  const handleDecrease = (item: any): void => {
    let x = cart.map((i) => {
      if (item.id === i.id && i.quantity > 1) {
        console.log("hola");
        i.quantity -= 1;
      }
      return i;
    });
    setCart(x);
  };

  const total = () => {
    let x = 0;
    cart.map((i: any) => {
      return (x += i.price * i.quantity);
    });
    return x.toFixed(2);
  };

  const clearCart = () => {
    let z = cart.map((i) => ({ ...i, quantity: 0 }));
    setCart(z);
  };

  return (
    <div className="mx-auto max-w-3xl w-full py-10">
      <h1 className="text-4xl mb-8 text-center">Shopping Cart Demo</h1>

      <div className="grid max-w-sm grid-cols-1 mx-auto text-center divide-y shadow-md">
        {cart.map((item: any) => {
          return (
            <div className="p-4 text-white bg-purple-500 flex flex-row items-center gap-10">
              <div className="grow flex flex-col">
                <div>{item.name}</div>
                <div>£{item.price}</div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <button
                  onClick={() => {
                    handleDecrease(item);
                  }}
                  type="button"
                  className="flex flex-row grow-0 items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <div className="grow-0">{item.quantity}</div>
                <button
                  onClick={() => {
                    handleAdd(item);
                  }}
                  type="button"
                  className="flex flex-row grow-0 items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div>
                <button
                  onClick={() => {
                    completeTask(item.id);
                  }}
                  type="button"
                  className="rounded-full border border-transparent bg-red-600 p-1 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-5">
        <h4>TOTAL: £{total()}</h4>
        <button onClick={clearCart}>Clear cart</button>
      </div>
    </div>
  );
}

export default App;
