import React from 'react'
import { Link } from "react-router-dom";

function Instruction() {
    return (
        <div>
            <section class="page_404">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">Steps to Chat with Chatbot</h1>
                                </div>

                                <div class="contant_box_404">
                                    <h3 class="h2">
                                    1. Initiate the Conversation
                                    </h3>
                                    <p>Start the conversation by saying "hello" or a similar greeting, or follow any specific instructions provided by the chatbot interface.</p>

                                    <h3 class="h2">
                                    2. Type the Input
                                    </h3>
                                    <p>Type or speak your input into the chatbox. This could be a question, a command, or any other relevant information based on the purpose of the chatbot.</p>
                                    <h3 class="h2">
                                    3. After obtaining the solution, you need to enter these keywords
                                    </h3>
                                    <p>After receiving the answer from the bot, enter one of these keywords, such as <span id='keywords'>Ok, Listen, Good, or Great.</span>  After that, ask your question again.</p>



                                    <Link to="https://mediafiles.botpress.cloud/c9af8022-dda6-4f98-b5c6-535f2aa48607/webchat/bot.html" class="link_404">Start Chat</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Instruction
