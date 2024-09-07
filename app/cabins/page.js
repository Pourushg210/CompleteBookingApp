import Counter from "@/app/_components/Counter";
// Getting data. We can make our React components async as well i Next.js

export const metadata = {
  title: "Cabin",
};

const Page = () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await res.json();
  return (
    <div>
      <h1>Cabin Page</h1>
    </div>
  );
};

export default Page;
