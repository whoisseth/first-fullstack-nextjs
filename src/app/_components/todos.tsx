'use client'

import { Todo as TodoType } from "@/db/schema";
import React from "react";
import Todo from "./todo";

import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Todos({ data }: { data: TodoType[] }) {
  const [animationParent] = useAutoAnimate();
  return (
    <div ref={animationParent} className="flex flex-col gap-2">
      {data.map((d, i) => (
        <Todo key={i} data={d} />
      ))}
    </div>
  );
}
