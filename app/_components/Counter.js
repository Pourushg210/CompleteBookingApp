"use client";

import { useState } from "react";

const Counter = ({ users }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* {users.map((user) => (
        <ul>
          <li key={user.id}>{user.name}</li>
        </ul>
      ))} */}
      <p>there are {users.lengh} users</p>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
