import React from "react";
import { Table , Icon, Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";
import EmployerService from "../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployer()
      .then((result) => setEmployers(result.data.data));
  });

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Kullanıcı ID</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Sifre</Table.HeaderCell>
            <Table.HeaderCell>Yaratılma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Sirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Sirket Numarası</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>


        <Table.Body>
          {employers.map((employers) => (
            <Table.Row key={employers.id}>
              <Table.Cell>{employers.id}</Table.Cell>
              <Table.Cell>{employers.email}</Table.Cell>
              <Table.Cell>{employers.password}</Table.Cell>
              <Table.Cell>{employers.createdAt}</Table.Cell>
              <Table.Cell>{employers.website}</Table.Cell>
              <Table.Cell>{employers.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a">5</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
