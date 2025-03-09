import { useEffect, useState } from "react"
import { createConnection } from "./chat"

function ChatRoom({ roomID }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234')

    useEffect(() => {
        const connection = createConnection(serverUrl, roomID)

        connection.connect()

        return () => {
            connection.disconnect()
        }
    }, [roomID, serverUrl])

    return (
        <>
            <label>
                Server URL: {''}
                <input type="text" value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to the {roomID} room!</h1>
        </>
    )
}