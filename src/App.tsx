import React, {useState} from 'react';
import './App.css';

function App() {

    const [messages, setMessages] = useState([{
        message: 'hello Sasha',
        id: '123',
        user: {
            id: '33333sdfsdfsdf',
            name: 'Hello Sasha'
        }
    },
        {
            message: 'hello Tina',
            id: '123',
            user: {
                id: '33333sdfsdfsdf',
                name: 'Hello Tina'
            }
        }]);


    return (
        <div>


            <div style={{
                border: '1px solid black',
                padding: '10px',
                height: '300px',
                overflow: 'scroll',
                width: '300px'
            }}>

                {messages.map(e => {

                    return (
                        <div>
                            <div>
                                {e.message}
                            </div>
                            <div>{e.user.name}</div>
                            <hr/>

                        </div>
                    )
                        ;
                })}


            </div>
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
    );
}

export default App;
