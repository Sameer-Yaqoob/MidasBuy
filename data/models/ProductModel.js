import RequestHandler from "../RequestHandler";
import React from 'react';

class ProductModel extends React.Component {
	
    static getProduct = async () => {
        return await RequestHandler("getProduct")
    }
}
export default ProductModel;
