import React, { Component } from 'react'
import Title from './Title';

 class ProductList extends Component {
    state={
        products:[]
       };
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="conatiner">
                    <Title name="Our" title="Products"/>
                    <div className="row">


                </div>
                </div>
                
            </div>
            </React.Fragment>
        );
    }
}

 

export default ProductList;