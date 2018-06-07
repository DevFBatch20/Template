import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  render() {
    return (
   
        <div className="Search">

        <div className="container-fluid">
            <div className="row">             
                <div className="    col-md-8"> 
                <ul className="navbar-nav ml-auto">
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </ul>
                </div>
            </div>
        </div> 
        </div>
          );
          }
        }
    export default Search;