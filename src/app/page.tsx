import { ModeToggle } from "@/components/mode-toggle";
import Todo from "./_components/todo";
import AddTodo from "./_components/add-todo";

export default function Home() {
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

        {/*Todo items container  */}
        {/* parent div */}
        <div className="flex flex-col gap-2">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </main>
  );
}
