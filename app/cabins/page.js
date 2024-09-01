import Counter from "../components/Counter";
// Getting data. We can make our React components async as well i Next.js
const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>Cabin Page</h1>
      {data.map((user) => (
        <ul>
          <li key={user.id}>{user.name}</li>
        </ul>
      ))}

      <Counter users={data} />
    </div>
  );
};

export default Page;
