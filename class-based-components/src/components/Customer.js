import styles from "./Customer.module.css";
import { Component } from "react";

class Customer extends Component {
  render() {
    return <li className={styles.customer}>{this.props.name}</li>;
  }
  
};

export default Customer;
