import { useState, useRef, useEffect } from "react";

const users = [
    { name: "Jhon", age: 23, score: 95, prof: "Frontend Dev" },
    { name: "William", age: 32, score: 78, prof: "Backend Dev" },
    { name: "Don Brown", age: 42, score: 96, prof: "Full Stack" },
    { name: "Kafka", age: 76, score: 63, prof: " System Admin" },
    { name: "Rase", age: 32, score: 98, prof: "DevOps " },
    { name: "Alex", age: 22, score: 23, prof: "Backend Dev" },
];

const UserSearch: React.FC = () => {
    const InputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState("");
    const [user, setUser] = useState<
        { name: string; age: number; score: number; prof: string } | undefined
    >();

    useEffect(() => {
        if (!InputRef.current) {
            return;
        }
        InputRef.current.focus();
    }, [InputRef]);
    const Search = () => {
        const founduser = users.find((user) => {
            return user.name === name ? name : null;
        });

        setUser(founduser);
    };
    return (
        <div>
            <h4>User Search</h4>
            <input
                ref={InputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={Search}>Search</button>
            <div>
                {user && user.name} {user && user.age} {user && user.score}{" "}
                {user && user.prof}{" "}
            </div>
        </div>
    );
};
export default UserSearch;
