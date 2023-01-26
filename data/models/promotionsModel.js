import RequestHandler from "../RequestHandler";
import React from 'react';

class PromotionsModel extends React.Component {
    static getPromotions = async () => {
        return await RequestHandler("getPromotions")
    }
}
export default PromotionsModel;
