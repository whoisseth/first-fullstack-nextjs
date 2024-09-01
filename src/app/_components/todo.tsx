"use client";

import { deleteTodo, editTodo, toggleTodo } from "@/actions/todoActions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo as TodoType } from "@/db/schema";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type Props = {};

export default function Todo({ data }: { data: TodoType }) {
  const [isChecked, setChecked] = useState(data?.done);
  const [isEditable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(data.text);

  function handleChecked() {
    if (data.id) {
      toggleTodo(data.id);
    }
    setChecked(!isChecked);
  }

  function handleDelete() {
    if (data.id) {
      deleteTodo(data.id);
    }
  }

  function handleSave() {
    if (data.id) {
      editTodo(data.id, inputValue);
    }
    setEditable(false);
  }

  return (
    <div className="flex items-center justify-between">
      {/* left  */}
      <section className="flex gap-2 items-center">
        <Checkbox onClick={handleChecked} checked={isChecked} />
        {isEditable ? (
          <input
            className="bg-background border-b outline-none "
            defaultValue={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          <p className={cn({ "line-through": isChecked })}>{inputValue}</p>
        )}
      </section>
      {/* right  */}
      <section className="flex gap-2 items-center">
        {isEditable ? (
          <Button onClick={handleSave}>Save</Button>
        ) : (
          <Button onClick={() => setEditable(true)} variant={"secondary"}>
            Edit
          </Button>
        )}

        <Button onClick={handleDelete} variant={"destructive"}>
          Delete
        </Button>
      </section>
    </div>
  );
}
