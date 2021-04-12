import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import Cart from "./Cart/Cart";

const { SubMenu } = Menu;

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <div className={styles.logoContainer}>
              <img
                src="https://logosandtypes.com/wp-content/uploads/2020/12/alegria.svg"
                className={styles.logo}
              />
              <div className={styles.logoText}>uros.</div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Dropdown overlay={menu}>
                    <div className="ant-dropdown-link">Shop</div>
                  </Dropdown>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Cart />
      </div>
    </div>
  );
}

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/shop">All</Link>
    </Menu.Item>

    <SubMenu title="Living Room">
      <Menu.Item>
        <Link to="/product/lamp">Lamp</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/product/blackChair">Black Chair</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu title="Kitchen">
      <Menu.Item>
        <Link to="/product/table">Dinner Table</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/product/chairs">Dining Chairs</Link>
      </Menu.Item>
    </SubMenu>
  </Menu>
);
