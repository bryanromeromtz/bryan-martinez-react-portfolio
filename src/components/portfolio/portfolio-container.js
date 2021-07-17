import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      data: [],
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    }
    else {
      this.getPortfolioItems(filter)
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://sautsky.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter((item) => {
              return item.category === filter;
            }),
          });
        } else {
          this.setState({
            data: response.data.portfolio_items,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (

      <div className="homepage-wrapper">
        <div className="filter-links">
          <button className="btn" onClick={() => this.handleFilter("eCommerce")}>
            eCommerce
          </button>
          <button className="btn" onClick={() => this.handleFilter("Scheduling")}>
            Scheduling
          </button>
          <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
            Enterprise
          </button>
          <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>
            All
          </button>
        </div>
        <div className="portfolio-items-wrapper">
          {this.portfolioItems()}
          
        </div>


        <footer>
          <div className="footer-content">
            <h3>Bryan Martinez Web Developer<span role="img" aria-label="waving">👋</span></h3>
            <p>!!Nada es demasiado maravilloso para ser cierto si obedece a las leyes de la naturaleza!!</p>
            <ul className="socials">
              <li><a href="https://www.facebook.com/profile.php?id=100063490877385" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
              <li><a href="https://www.instagram.com/bryan_madeon" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
              <li><a href="https://github.com/bryanromeromtz" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
              <li><a href="https://www.linkedin.com/in/bryan-romero-7995021a8/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li>
              <li><a href="https://codepen.io/bryant_kidult" target="_blank"><FontAwesomeIcon icon={['fab', 'codepen']} /></a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>copyright &copy;2021 bryan romero martinez. Designed & Built by<span> Fateuki</span></p>
          </div>
        </footer>
      </div>
    );
  }
}
