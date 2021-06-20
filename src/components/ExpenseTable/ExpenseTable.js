import React from 'react';
import {
  Table
} from 'react-bootstrap';

const ExpenseTable = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Date</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Description</th>
      </tr>    
    </thead>
    <tbody>
      <tr>
        <td>
          1970/01/01
        </td>
        <td>1000</td>
        <td>Utility Bill</td>
        <td>Sample expense data.</td>
      </tr>
    </tbody>
  </Table>
);

export default ExpenseTable;
