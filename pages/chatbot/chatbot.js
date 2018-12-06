import Layout from '../../layouts/default';
import Link from 'next/link';
import Api from '../../service/Api'; // on importe l'api

import React, { Component } from 'react';


class Chatbot extends Component {
    constructor(props){
        super(props);
        this.api = new Api(); // on crée l'api, on peut désormais l'utiliser
        this.state = {
            message: "", // variable pour le textarea
            messages: [], // liste contenant tous les messages
            loading: false
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }


    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });

    }

    // fonction pour envoyer le message
    sendMessage(event){
        // vérifions que la touche appuyée est la touche Entrée
        if (event.key === 'Enter') {
            this.setState({loading: true});
            let allMessages = this.state.messages;
            allMessages.push({computer: false, date: new Date(), message: this.state.message});
            this.setState({messages: allMessages});
            // on supprimer ce qu'il y a dans le textarea
            this.setState({message: ""})
            // on envoie le message avec l'api
            /*
            this.api.sendMessage(this.state.message).then(res=>{
                console.log(res);
            });
            */
            // la réponse de l'ordi

            setTimeout(()=>{
                allMessages.push({computer: true, date: new Date(), message: "Fuck You man!"});
                this.setState({loading: false});
            }, 1000);



        }
    }


    render(){


        let Messages = this.state.messages.map((message, index)=>{

            return (

                <div className={!message.computer ? "chat self" : "chat friend"} >

                    <p className="chat-message">{message.message}</p>
                </div>
            )
        });


        return (
            <Layout title="A propos | HackFromTheGarage1">
                <div className="headerBar">
                    <div className="user-photo"><img src={"/static/images/sarcasticGuy.png"}/></div>
                    <p className="title">Sarr Castik</p>
                </div>

                <div className="chatbox" id="box">

                    <div className="chatlogs">

                        <div className="chat friend">
                            <div className="user-photo"><img src={"/static/images/sarcasticGuy.png"}/></div>
                            <p className="chat-message">Pfff.. encore quelqu'un qui vient raconter sa vie...</p>
                        </div>



                        {Messages}

                        {this.state.loading ? <div className="chat friend" id="loadingGif">
                            <div className="user-photo"><img src={"/static/images/sarcasticGuy.png"}/></div>
                            <div className="gif"><img src={"/static/images/loading.gif"}/></div>
                        </div> : null}


                    </div>
                </div>
                <div className="chat-form">
                    <div id="inputDiv">
                        <div id="buttonDiv"></div>
                        <textarea name="message" className="input" placeholder="Message" rows="1" data-min-rows='1' onChange={this.handleInputChange} value={this.state.message} onKeyPress={this.sendMessage}></textarea>
                    </div>
                    <div id="sound">
                        <img id="soundButton" src={"/static/images/sound.png"} />
                    </div>
                </div>

                <div className="footer">
                    <p className="ourTeam">Made with ❤️ by<a href="https://github.com/HackFromTheGarage/NDI2018Team1"
                                                             target="blank"> HackFromTheGarage1 !</a></p>
                </div>
                <Link href={{ pathname: '/' }}>Retour à l'acueil</Link>


            </Layout>
        )
    }
}


export default Chatbot;