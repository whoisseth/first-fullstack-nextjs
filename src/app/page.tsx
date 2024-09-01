import { ModeToggle } from "@/components/mode-toggle";
import Todo from "./_components/todo";
import AddTodo from "./_components/add-todo";
import { getData } from "@/actions/todoActions";
import Todos from "./_components/todos";


export default async function Home() {
  const data = await getData();

  console.log("data-", data);

  return (
    <main className="flex min-h-screen flex-col gap-4 ">
      <nav className="border-b shadow ">
        <div className="flex  px-2 container mx-auto  justify-between items-center  h-[50px]  ">
          <h2 className="text-2xl font-semibold">{`  Todo's Hub`}</h2>
          <ModeToggle />
        </div>
      </nav>

      {/*  */}
      <div className=" px-2 w-full max-w-[600px]  mx-auto  flex flex-col gap-6">
        <AddTodo />
        <Todos data={data} />
      </div>
    </main>
  );
}
