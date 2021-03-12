import React, {useState} from 'react';
import oi from 'socket.io-client'
import './App.css';


const socket = oi('http://localhost:3009')


function App() {

    //
    // useEffect(() => {
    //     // let socket = oi('https://samurai-chat-back.herokuapp.com/')
    //
    // }, [])

    const [message, setMessage] = useState('Hello')
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
                        <div key={e.id + e.user.name}>
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
                <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}/>
                <button onClick={() => {
                    socket.emit('client-message-sent', message)
                    setMessage('')

                }}>Send
                </button>
            </div>
        </div>
    );
}

export default App;
