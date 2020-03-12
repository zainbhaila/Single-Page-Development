import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingItem from './ShoppingItem.js'


let page = <div>
    <h5>Item&emsp;&emsp;&emsp;&emsp; Action &emsp;&emsp;&emsp;&emsp; Count&emsp;&emsp;&emsp;&emsp; Price</h5>
    <ShoppingItem startCount = {1} price = {24.99} name = "Flex Seal"/>
    <ShoppingItem startCount = {1} price = {14.99} name = "Shoes"/>
    <ShoppingItem startCount = {1} price = {30.99} name = "Hat"/>
</div>;

ReactDOM.render(page, document.getElementById('root'));
