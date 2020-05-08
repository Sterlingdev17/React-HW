import React from 'react';
import { Table } from 'reactstrap';


const Example = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th> </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone </th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
          {props.items.map( item => (
               <tr>
               <th scope="row">1</th>
               <td><img src={item.picture.large} alt={item.name.first} /></td>
               <td>{item.name.first}</td>
                <td>{item.name.last}</td>
               <td>{item.email}</td>
               <td>{item.phone}</td>
               <td>{item.dob.age}</td>
               

             </tr>

          
        ))}
        
      </tbody>
    </Table>
  );
}

export default Example;