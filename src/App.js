// // import Expenses from "./Components/Expenses/Expenses";
// // import NewExpense from "./Components/Expenses/NewExpense/NewExpense";
// // import { useState } from "react";

// // function App() {

// //   const [expense_list, setExpenses] = useState([]);

// //   const addExpenseHandler = (expense) => {
// //     // const result=[...expense_list]
// //     // result.push(expense)
// //     // setExpenses(result)

// //     setExpenses(prevExpenses =>{

// //       return [expense,...prevExpenses]
// //     })
// //   }

// //   return (
// //     <div>
// //       <NewExpense onAddExpense={addExpenseHandler} />
// //       <Expenses setExpenses={setExpenses} expense_list={expense_list}/>
// //     </div>
// //   );
// // }

// // export default App;


// // import { useState } from "react";
// // import { CourseInput } from "./Components/CourseInput/CourseInput";
// // import { CourseGoalList } from "./Components/CourseGoalList/CourseGoalList";


// // const App = () => {

// //   const [courseGoals, setCourseGoals] = useState([
// //     { text: 'Do all exercises!', id: 'g1' },
// //     { text: 'Finish the course!', id: 'g2' }
// //   ]);

// //   const addGoalHandler = enteredText => {
// //     setCourseGoals(prevGoals => {
// //       const updatedGoals = [...prevGoals];
// //       updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
// //       return updatedGoals;
// //     });
// //   };

// //   const deleteItemHandler = goalId => {
// //     setCourseGoals(prevGoals => {
// //       const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
// //       return updatedGoals;
// //     });
// //   };

// // let content = (
// //     <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
// //   );

// //   if (courseGoals.length > 0) {
// //     content = (
// //       <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
// //     );
// //   }

// //   return (
// //     <div>
// //       <section id='goal-form'>
// //         <CourseInput onAddGoal={addGoalHandler} />
// //       </section>
// //       <section id='goals'>
// //         {content}
// //       </section>
// //     </div>
// //   )
// // }

// // export default App;


// // import React from 'react'
// // import { DetailsForm } from './Components/StylingProject/DetailsForm'
// // import { useState } from 'react'
// // import { UserList } from './Components/StylingProject/UserList'

// // const App = () => {
// //   const [dataList, setDataList] = useState([])


// //   const addData = (name, college, age) => {
// //     setDataList((prevData) => {
// //      return [...prevData, { name: name, age: age, college:college, id: Math.random().toString() }]
// //     })
// //   }

// //   return (
// //     <div>
// //       <DetailsForm addData={addData} />
// //       <UserList dataList={dataList} />
// //     </div>
// //   )
// // }
// // export default App

// import React, { useState } from "react";

// import Login from "./Components/Login/Login";
// import Home from "./Components/Home/Home";
// import MainHeader from "./Components/MainHeader/MainHeader";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <React.Fragment>
//       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </React.Fragment>
//   );
// }
// export default App



// import { RestaurantForm } from "./3 hr project(1)/RestaurantForm"
// import { UserList } from "./3 hr project(1)/UserList"
// import { useState, useEffect } from "react"
// import './App.css'

// function App() {

//   const result = JSON.parse(localStorage.getItem('data'))

//   const [dataList, setDataList] = useState(result ?? [])

//   useEffect(() => {
//     localStorage.setItem('data', JSON.stringify(dataList))

//   }, [dataList])



//   const addData = (id, price, dish, table) => {
//     setDataList((prevData) => {
//       return [...prevData, { id: id, price: price, dish: dish, table: table }]
//     })
//   }

//   const removeData = (id) => {
//     setDataList((prevData) => {
//       const newData = prevData.filter(item => item.id !== id)
//       return newData
//     })
//   }

//   const arr = [1, 2, 3]

//   return (
//     <>
//       <RestaurantForm addData={addData} />
//       <h2>Orders</h2>
//       {arr.map((item) => (
//         <>
//           <h5>Table {item}</h5>
//           <UserList dataList={dataList} removeData={removeData} table={`${item}`} />
//         </>
//       ))}
//     </>
//   )
// }

// export default App


import { Header } from "./Restaurant_project/Components/Layout/Header"
import { Meals } from "./Restaurant_project/Components/Meals/Meals"

function App() {
  return (
    <>
      <Header />
      <Meals />
    </>

  )
}
export default App

