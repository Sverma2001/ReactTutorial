import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddStudent } from './components/addStudent';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import { About } from './components/about';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  let initList;
  if (localStorage.getItem("list") === null) {
    initList = []
  } else {
    initList = JSON.parse(localStorage.getItem("list"))
  }

  const onDelete = (item) => {
    setStudent(list.filter((data) => { return data !== item }))
    localStorage.setItem("list", JSON.stringify(list))
  }

  const addStudent = (name, age) => {
    const newStudent = {
      Id: Math.floor(Math.random() * 100),
      name: name,
      age: age
    }
    setStudent([...list, newStudent])
  }

  const [list, setStudent] = useState(initList)
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  return (
    <BrowserRouter>
      <div className="App" >
        <Header title="React Tutorial" searchbar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddStudent addStudent={addStudent} />
                <div className="main-container">
                  <Main list={list} onDelete={onDelete} />
                </div>
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;