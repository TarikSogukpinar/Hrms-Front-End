import React from "react";

import Categories from "./Categories";
import EmployerList from "../pages/EmployerList";
import { Grid } from "semantic-ui-react";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <EmployerList></EmployerList>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>

          <Grid.Column width={1} height={5}>
            <Categories></Categories>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
