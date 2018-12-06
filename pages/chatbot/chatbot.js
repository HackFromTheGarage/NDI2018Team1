import Layout from '../../layouts/default';
import Link from 'next/link';

import React, { Component } from 'react';


class Chatbot extends Component {
    constructor(props){
        super(props);

        this.state = {
            message: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });

        console.log(this.state);

    }


    render(){

        return (
            <Layout title="A propos | HackFromTheGarage1">
                <div className="headerBar">
                    <div className="user-photo"><img src={"/static/images/sarcasticGuy.png"}/></div>
                    <p className="title">Sarr Castik</p>
                </div>

                <div className="chatbox">

                    <div className="chatlogs">

                        <div className="chat friend">
                            <div className="user-photo"><img src={"/static/images/sarcasticGuy.png"}/></div>
                            <p className="chat-message">Pfff.. encore quelqu'un qui vient raconter sa vie...</p>
                        </div>

                        <div className="chat friend" id="loadingGif">
                            <div className="user-photo"><img src={"/static/images/sarcasticGuy.png"}/></div>
                            <div className="gif"><img src={"/static/images/loading.gif"}/></div>
                        </div>

                    </div>
                </div>
                <div className="chat-form">
                    <div id="inputDiv">
                        <div id="buttonDiv"></div>
                        <textarea name="message" className="input" placeholder="Message" rows="1" data-min-rows='1' onChange={this.handleInputChange} ></textarea>
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

                <style jsx>{`


            * {

                margin: 0;
                padding: 0;
                font-family: sans-serif;
                box-sizing: border-box;
                font-weight: 100;

            }
            .chatbox {

                width: 500px;
                min-width: 390px;
                height: 600px;
                background: white;
                padding: 25px;
                margin: 0px auto 0px auto;
                box-shadow: 10px 10px 5px grey;
            }

            .chatlogs {
                padding: 10px;
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                overflow-y: scroll;
            }

            /*Styling the scrolllbar*/
            .chatlogs::-webkit-scrollbar{
                width: 10px;
            }

            .chatlogs::-webkit-scrollbar-thumb{
                border-radius: 5px;
                background: rgba(0, 0, 0, .1);
            }


            .chat {
                display: flex;
                flex-flow: row wrap;
                align-items: flex-start;
                margin-bottom: 10px;
            }

            .user-photo img{
                background-color: rgb(204, 204, 255);
                padding: 8px;
                width: 100%;
            }

            .chat .chat-message {
                padding: 15px;
                margin: 5px 10px 0;
                font-size: 18px;
            }

            .user-photo {
                width: 60px;
                height: 60px;
                background: #ccc;
                border-radius: 50%;
                overflow: hidden;
            }

            .friend .chat-message {
                color: black;
                width: auto;
                max-width: 70%;
                background: rgb(229, 229, 234);
                border-radius: 20px 20px 20px 0;
            }

            .self .chat-message {
                color: white;
                max-width: 80%;
                width: auto;
                margin: 5px 0 5px auto;
                border-radius: 20px 20px 0px 20px;
                background: rgb(64, 172, 246);
                overflow-wrap: break-word;
            }

            .headerBar{
                font-size: 25px;
                color: white;
                padding: 25px;
                width: 500px;
                min-width: 390px;
                display: flex;
                flex-flow: row wrap;
                align-items: flex-start;
                margin: 20px auto 0px auto;
                background: rgb(226, 118, 30);
                border-radius: 10px 10px 0px 0px;
                box-shadow: 10px 10px 5px grey;
            }

            .headerBar .title {
                margin: auto 20px;
            }

            .headerBar .user-photo {
                margin: 0px 0px 0px 10px;

            }

            .headerBar .user-photo img{
                width: 100%;
            }

            .chat-form {

                margin: 0px auto 0px auto;
                display: flex;
                width: 500px;
                min-width: 390px;
                align-items: flex-start;
                overflow: auto;
                background: rgb(244, 243, 244);
                border-radius: 0 0 10px 10px;
                border-top: 5px solid rgb(212, 212, 212);
                box-shadow: 10px 10px 5px grey;
            }


            #inputDiv {
                width: 75%;
                margin-right: 15px;

            }


            .chat-form textarea {
                padding: 5px 5px 5px 15px;
                background: #fbfbfb;
                width: 100%;
                min-height: 5px;
                border: 2px solid lightblue;
                border-radius: 20px;
                resize: none;
                font-size: 18px;
                color: #000;
                margin: 15px 0px 15px 10px;
                display:block;
                overflow:hidden;
                box-shadow: none;
                outline: none;

            }

            .chat-form textarea:focus {
                background: #fff;
            }

            #chat-form-buttons {
                margin: auto;
            }



            .chat-form button:hover{
                background: rgb(255, 153, 0);
            }

            .gif img {
                margin: 10px;
                border-radius: 20px;
            }


            .buttonResponse {
                color: white;
                max-width: 80%;
                width: fit-content;
                margin: 5px 0 5px auto;
                border-radius: 20px 20px 0px 20px;
                background: rgb(64, 172, 246);
                overflow-wrap: break-word;
                font-size: 18px;
                padding: 10px;
                margin: 20px 5px;
                float: left;
            }

            .buttonResponse:hover{
                background: rgb(100, 200, 255);
            }


            #switchInputType{
                max-width: 40px;
                max-height: 40px;

            }

            #sound {
                width : 30px;
                height : 20px;
                transform: scale(0.08, 0.08);
                -ms-transform: scale(0.08, 0.08);
                -webkit-transform: scale(0.08, 0.08);
                margin-right : auto;
            }


            #buttonDiv {
                margin: 0 auto;
                width: inherit;

            }

            .footer {
                height : 100px;
                padding : 100px;
                text-align : center;

            }

            .ourTeam {
                color : rgb(226, 118, 30);
            }

        `}</style>
            </Layout>
        )
    }
}


export default Chatbot;