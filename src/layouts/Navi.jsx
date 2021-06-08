import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import { Icon, Dropdown, Input, Select } from "semantic-ui-react";
import { Header } from "semantic-ui-react";

const options = [
  { key: "edit", icon: "play", text: "Giris Yap", value: "edit" },
  {
    key: "delete",
    icon: "thumbs up outline",
    text: "Ücretsiz Dene",
    value: "delete",
  },
  {
    key: "hide",
    icon: "volume control phone",
    text: "Sizi Arayalım",
    value: "hide",
  },
];

const optionsSearch = [
  { key: 'all', text: 'Hepsi', value: 'all' },
  { key: 'articles', text: 'İs İlanı', value: 'articles' },
  { key: 'products', text: 'Firma', value: 'products' },
]

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <div className="logoButton">
            <Header as="h2">
              <Icon
                circular
                inverted
                color="teal"
                name="circle users"
                size="smaill"
              />
            </Header>
          </div>
          <div class="homePageButton">
            <Menu.Menu position="left">
              <Menu.Item>
                <Button color="white">
                  <Icon name="power off" /> Ana Sayfa
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button color="white">
                  <Icon name="book" /> Kariyer Rehberi
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button color="white">
                  <Icon name="clipboard" /> Pozisyon
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </div>
          <div className="searchButton">
            <Input type="text" placeholder="Ne aramak istersin?" action>
              <input />
              <Select compact options={optionsSearch} defaultValue="articles" />
              <Button type="submit">Ara</Button>
            </Input>
          </div>

          <div className="jobSeekerPosition">
            <Menu.Menu position="right">
              <Menu.Item>
                <div class="jobSeekerEnter">
                  <Button.Group color="teal">
                    <Button>İş Veren Girişi</Button>
                    <Dropdown
                      className="button icon"
                      floating
                      options={options}
                      trigger={<></>}
                    />
                  </Button.Group>
                </div>

                <div>
                  <Button color="blue">
                    <Icon name="book" /> Üye Ol
                  </Button>

                  <Button color="blue">
                    <Icon name="book" /> Giriş Yap
                  </Button>
                </div>
              </Menu.Item>
            </Menu.Menu>
          </div>
        </Container>
      </Menu>
    </div>
  );
}
