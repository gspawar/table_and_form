import React, { useState,table } from "react";
import "./App.css";
import data from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Table} from 'react-bootstrap';

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Age: "",
    Location: "",
    Mobile: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      Name: addFormData.Name,
      Age: addFormData.Age,
      Location: addFormData.Location,
      Mobile: addFormData.Mobile,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  return(
      <div >



        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map((contact) =>(
              <tr>
                <td>{contact.Name}</td>
                <td>{contact.Age}</td>
                <td>{contact.Location}</td>
                <td>{contact.Mobile}</td>
            </tr>
          ))}

          </tbody>
        </Table>
        <form onSubmit={handleAddFormSubmit}>
           <input type="text" name="Name" required="required" placeholder="Enter a Name..." onChange={handleAddFormChange} />
           <input type="text" name="Age" required="required" placeholder="Enter a Age..." onChange={handleAddFormChange}/>
           <input type="text" name="Location" required="required" placeholder="Enter a Location..." onChange={handleAddFormChange}/>
           <input type="text" name="Mobile" required="required" placeholder="Enter a Mobile..." onChange={handleAddFormChange}/>
           <Button type="submit"variant="success" onClick={() => alert("Data Is Submited...")} > Add </Button>                                    
        </form>
      </div>

  )
};

export default App
