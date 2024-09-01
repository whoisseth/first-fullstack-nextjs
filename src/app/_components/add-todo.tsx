"use client";

import { addTodo } from "@/actions/todoActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {};

export default function AddTodo({}: Props) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      addTodo(inputValue);
      toast.success(`'${inputValue}'  has been added.`);
      setInputValue("");
    } catch (error) {
      toast.error(`Something went wrong - ${error}`);
    }
  }

  

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button>Add Todo</Button>
    </form>
  );
}
