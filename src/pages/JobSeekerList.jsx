import React from "react";
import { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getSeeker()
      .then((result) => setJobSeekers(result.data.data));
  });
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket ID</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Şifre</Table.HeaderCell>
            <Table.HeaderCell>Yaratılma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şirket İsmi </Table.HeaderCell>
            <Table.HeaderCell>Web Site </Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeekers) => (
            <Table.Row key={jobSeekers.id}>
              <Table.Cell>{jobSeekers.id}</Table.Cell>
              <Table.Cell>{jobSeekers.email}</Table.Cell>
              <Table.Cell>{jobSeekers.password}</Table.Cell>
              <Table.Cell>{jobSeekers.createdAt}</Table.Cell>
              <Table.Cell>{jobSeekers.companyName}</Table.Cell>
              <Table.Cell>{jobSeekers.website}</Table.Cell>
              <Table.Cell>{jobSeekers.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
