import { useState } from "react";

export function Counter  ()  {
    const [count, setCount] = useState(1);
    return (
        <div>
            The Current Count: {count}
            <div>
                <button onClick={() => setCount(count + 1)}>add</button>
                <button onClick={() => setCount(count - 1)}>subtract</button>
            </div>
        </div>
    );
};