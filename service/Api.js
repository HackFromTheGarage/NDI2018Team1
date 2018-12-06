import axios from 'axios';


class Api {
    constructor(){

    }

    sendMessage(message){
        console.log(message)
        return axios.post('/api/bot/sendMessage', {
            message: message
        });
    }


    getMessages(){
        return axios.get('/api/bot/getMessages');
    }
}


export default Api