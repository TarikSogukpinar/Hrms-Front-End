import React from "react";
import { Menu, Header } from "semantic-ui-react";
export default function Categories() {
  return (
    <div className="categories">
      <Menu vertical>
        <Menu.Item
          name="promotions"
          // active={activeItem === 'promotions'}
          // onClick={this.handleItemClick}
        >
          <Header as="h4">İs İlanları</Header>
        </Menu.Item>
        <Menu.Item
          name="coupons"
          // active={activeItem === 'coupons'}
          // onClick={this.handleItemClick}
        >
          <Header as="h4">İs Arayanlar</Header>
        </Menu.Item>

        <Menu.Item
          name="rebates"
          // active={activeItem === 'rebates'}
          // onClick={this.handleItemClick}
        >
          <Header as="h4">CVler</Header>
        </Menu.Item>
      </Menu>
    </div>
  );
}
