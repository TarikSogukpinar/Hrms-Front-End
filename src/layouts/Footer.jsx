import React from "react";
import {
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";
export default function Footer() {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Hakkımızda" />
                <List link inverted>
                  <List.Item as="a">Site Haritası</List.Item>
                  <List.Item as="a">İletisim</List.Item>
                  <List.Item as="a">Rehber</List.Item>
                  <List.Item as="a">Yardım</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Hizmetlerimiz" />
                <List link inverted>
                  <List.Item as="a">İlan Satın Al</List.Item>
                  <List.Item as="a">Reklam Verin</List.Item>
                  <List.Item as="a">İş Ortaklığı</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <div class="descriptionPosition">
                  <Header as="h2">
                    <Icon name="settings" color="teal" />
                    <Header.Content>
                      <font color="white">
                        Human Managment Resources System
                      </font>
                      <Header.Subheader>
                        <font color="white">Kodlama.İO</font>
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
