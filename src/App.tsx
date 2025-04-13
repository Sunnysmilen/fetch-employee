import { useState } from "react";
import "./App.css";
import { EmployeeCard } from "./components/EmployeeCard";

function App() {
  const sampleEmployee = {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  };
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    try {
      fetch("http://localhost:8080/api/employees")
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data);
          setEmployee(data.result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <EmployeeCard employee={employee} />
        <button type="button" onClick={getEmployee}>
          Get employee
        </button>
      </div>
    </>
  );
}

export default App;
