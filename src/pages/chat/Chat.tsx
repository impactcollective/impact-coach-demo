import { useState } from "react";
import { Input } from "../../components/Input";
import { Wrapper } from "./Chat.styles";
import { useChat } from "../../api/chat.api";
import { Button } from "../../components/Button";

export const Chat = () => {
    const [query, setQuery] = useState("")
    const [response, setResponse] = useState("")

    const submitQuery = useChat();
    return (
        <Wrapper>
            <h1>Chat</h1>
            <Input label="Start chatting with the Impact Coach" placeholder="Enter your message" onChange={setQuery} value={query} />
            <Button onClick={() => submitQuery.mutateAsync({ query: query }).then((res) => {
                console.log(res);
                setResponse(res.data.response);
            })}>Send</Button>
            <p>{response}</p>
        </Wrapper>
    );
}