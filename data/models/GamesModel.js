import RequestHandler from "../RequestHandler";
import React from 'react';

class GameModel extends React.Component {
	
    static getGames = async () => {
        return await RequestHandler("getGames")
    }
}
export default GameModel;
