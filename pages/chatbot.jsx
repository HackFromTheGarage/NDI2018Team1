import Layout from '../layouts/default';
import Link from 'next/link';
import Api from '../service/Api'; // on importe l'api

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

    scrollToBottom = () => {
        this.scroller.scrollTop = this.scroller.scrollHeight;
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
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


            if(this.state.message.length>0){
                this.setState({loading: true});
                let allMessages = this.state.messages;
                allMessages.push({computer: false, date: new Date(), message: this.state.message});
                this.setState({messages: allMessages});
                // on supprimer ce qu'il y a dans le textarea
                this.setState({message: ""})
                // on envoie le message avec l'api au serveur
                this.api.sendMessage(this.state.message).then(res=>{
                    allMessages.push({computer: true, date: new Date(), message: res.data.message});
                    this.setState({messages: allMessages});
                    this.setState({loading: false});
                }).catch(err=>{
                    console.log(err)
                })
                
            }

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

                    <div className="chatlogs" ref={(el) => { this.scroller = el; }}>

                        <div className="chat friend">
                            <div className="user-photo"><img src={"/static/images/sarcasticGuy.png"}/></div>
                            <p className="chat-message">Pfff.. encore quelqu'un qui vient raconter sa vie...</p>
                        </div>


                        {Messages.map((message, i) => (
                            <div key={i}>
                                {message}
                            </div>
                        ))}

                        {this.state.loading ? <div className="chat friend" id="loadingGif">
                            <div className="user-photo"><img src={"/static/images/sarcasticGuy.png"}/></div>
                            <div className="gif"><img src={"/static/images/loading.gif"}/></div>
                        </div> : null}




                    </div>
                </div>
                <div className="chat-form">
                    <div id="inputDiv">
                        <div id="buttonDiv"></div>
                        <input name="message" className="input" placeholder="Message" rows="1" data-min-rows='1' onChange={this.handleInputChange} value={this.state.message} onKeyPress={this.sendMessage}></input>
                    </div>
                    <div id="sound">
                        <img id="soundButton" src={"/static/images/sound.png"} />
                    </div>
                </div>

                <div className="footer">
                    <p className="ourTeam">Made with ❤️ by<a href="https://github.com/HackFromTheGarage/NDI2018Team1"
                                                             target="blank"> HackFromTheGarage1 !</a></p>
                </div>
                <Link href={{ pathname: '/' }}><a>Retour à l'acueil</a></Link>


            </Layout>
        )
    }
}


export default Chatbot;
