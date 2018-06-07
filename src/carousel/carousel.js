import React, { Component } from 'react';
//import Carousel from '../carousel/carousel.js';
import './carousel.css';


class Carousel extends Component {
  render() {
    return (
<div className="Carousel">
        <div className="navbar-wrapper">
        <div className="container">
  
          <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="">Project name</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li className="dropdown">
                    <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="">Action</a></li>
                      <li><a href="">Another action</a></li>
                      <li><a href="">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li className="dropdown-header">Nav header</li>
                      <li><a href="">Separated link</a></li>
                      <li><a href="">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  
        </div>
      </div>
  
  

      <div id="myCarr" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarr" data-slide-to="0" className="active"></li>
          <li data-target="#myCarr" data-slide-to="1"></li>
          <li data-target="#myCarr" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide"></img>
            <div className="container">
              <div className="carousel-caption">
                <h1>Example headline.</h1>
                <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                <p><a className="btn btn-lg btn-primary" href="" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <img className="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide"></img>
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg btn-primary" href="" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <img className="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide"></img>
            <div className="container">
              <div className="carousel-caption">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg btn-primary" href="" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarr" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarr" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
  
  

  
      <div className="container marketing">
  
     
        <div className="row">
          <div className="col-lg-4">
            <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a className="btn btn-default" href="" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p><a className="btn btn-default" href="" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-default" href="" role="button">View details &raquo;</a></p>
          </div>
        </div>
  
  
      
  
 
  
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
          </div>
        </div>
  

  
        <div className="row featurette">
          <div className="col-md-7 col-md-push-5">
            <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 col-md-pull-7">
            <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
          </div>
        </div>
  
  
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
          </div>
        </div>
  
       
  
     
  
  
   
        <footer>
          <p className="pull-right"><a href="">Back to top</a></p>
          <p>&copy; 2016 Company, Inc. &middot; <a href="">Privacy</a> &middot; <a href="">Terms</a></p>
        </footer>
        </div>
       
        
</div>

     
  );
  }
}
export default Carousel;