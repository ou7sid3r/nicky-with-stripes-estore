import React from 'react';

var NickyStore = React.createClass({
  render: function() {
    return (
      <div>
        <StoreBanner userActionsNotLoggedIn={userActionsNotLoggedIn}/>
        <NavigationBar navigationCategories={navigationCategories} numItemsInCart="17"/>
        <br/>
        <div className="main">
          <span id="banner-left"></span>
          <span id="products-main"><ProductList products={products}/></span>
          <span id="banner-right"></span>
        </div>
      </div>
      );
  }
});

var StoreBanner = React.createClass({
    render: function() {
        return (
          <div className="banner">
            <span id="storeImage"><img src="https://s6.postimg.org/qg8ous6vl/NS_logo.jpg"/></span>
            <span id="storeName">Nicky with Stripes</span>
            <span id="userActions">
              {
                this.props.userActionsNotLoggedIn.map(function(item) {
                  return <span>{item}</span>
                })
              }
            </span>
          </div>);
    }
});

var NavigationBar = React.createClass({
    getInitialState: function() {
      return {
        numItemsInCart: 0
      };
    },
    render: function() {
        return (
         <div className="navigationBar">
            <span id="categories">
              {
                this.props.navigationCategories.map(function(item) {
                  return <span>{item}</span>
                })
              }
            </span>
            <span id="trolley-display-block">
              <span>{this.state.numItemsInCart}</span>
              <img src="http://www.inmotionhosting.com/support/images/stories/icons/ecommerce/empty-cart-light.png"></img>
            </span>
          </div>);
    }
});

var ProductList = React.createClass({
    render: function() {
        return (<div>
        { this.props.products.map(function(item) {
                return <Product details={item} />
            })
        }
        </div>);
    }
});

var Product = React.createClass({
    render: function() {
        return (
        <div className="w3-quarter product">
          <div className="image"><img src={this.props.details.imageUrl}/></div>
        	<div className="info">
        	  <span className="bold">{this.props.details.name}</span>
        	  <br/>
        	  R{this.props.details.price}</div>
        	<div className="actions"><button>View Detail</button><button className="primary">Add to Cart</button></div>
        </div>);
    }
});

var products =  [
{ name: 'Dress', price: 100, imageUrl: 'http://www.lindybop.co.uk/images/bernice-turquoise-tulip-swing-dress-p2747-16827_zoom.jpg'}, 

{ name: 'Shorts', price: 70, imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/80/98/fe/8098fe4c47d8cc1247f7fb901c30b993.jpg'}, 
{ name: 'Customised Baby Gro', price: 140, imageUrl: 'https://s6.postimg.org/bggc6xpzl/IMG_5081.jpg'}, 
{ name: 'Hat', price: 15, imageUrl: 'http://media.goorin.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/imports/products/100-3333-BLK-F01.png'},
{ name: 'Heart Baby Gro', price: 120, imageUrl: 'https://s6.postimg.org/7y4cajp3l/IMG_5103.jpg'},
{ name: 'Scarf', price: 10, imageUrl: 'https://blueinc_co_uk.secure-cdn.visualsoft.co.uk/images/mens-red-woven-check-scarf-p26869-44886_zoom.jpg'},
{ name: 'Baby Gro Quote', price: 130, imageUrl: 'https://s6.postimg.org/x5f8ass7l/IMG_5108.jpg'},
{ name: 'Dress', price: 100, imageUrl: 'http://www.lindybop.co.uk/images/bernice-turquoise-tulip-swing-dress-p2747-16827_zoom.jpg'}, 
{ name: 'Custom Print', price: 55.20, imageUrl: 'https://s6.postimg.org/pydjexhap/IMG_5077.jpg'}, 
{ name: 'Shorts', price: 70, imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/80/98/fe/8098fe4c47d8cc1247f7fb901c30b993.jpg'}, 
{ name: 'Customised Baby Gro', price: 140, imageUrl: 'https://s6.postimg.org/bggc6xpzl/IMG_5081.jpg'}, 
{ name: 'Hat', price: 15, imageUrl: 'http://media.goorin.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/imports/products/100-3333-BLK-F01.png'},
{ name: 'Heart Baby Gro', price: 120, imageUrl: 'https://s6.postimg.org/7y4cajp3l/IMG_5103.jpg'},
{ name: 'Scarf', price: 10, imageUrl: 'https://blueinc_co_uk.secure-cdn.visualsoft.co.uk/images/mens-red-woven-check-scarf-p26869-44886_zoom.jpg'},
{ name: 'Baby Gro Quote', price: 130, imageUrl: 'https://s6.postimg.org/x5f8ass7l/IMG_5108.jpg'}
];

var userActionsNotLoggedIn = [
  'Sign up', 'Login', 'Contact'
];

var navigationCategories = [
  'Happy Bunny', 'Happy Home', 'Happy Day'
];

export default NickyStore;
