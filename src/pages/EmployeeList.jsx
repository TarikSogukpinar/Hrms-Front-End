import React from "react";
import EmployeeService from "../services/employeeService";
import { Table } from "semantic-ui-react";
import { useState, useEffect } from "react";

export default function EmployeeList() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployee()
      .then((result) => setEmployee(result.data.data));
  });

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Kullanıcı ID</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Şifre</Table.HeaderCell>
            <Table.HeaderCell>Yaratılma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İsmi </Table.HeaderCell>
            <Table.HeaderCell>Soy İsmi </Table.HeaderCell>
 
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employee.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell>{employer.id}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.password}</Table.Cell>
              <Table.Cell>{employer.createdAt}</Table.Cell>
              <Table.Cell>{employer.firstName}</Table.Cell>
              <Table.Cell>{employer.lastName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

      </Table>
    </div>
  );
}
