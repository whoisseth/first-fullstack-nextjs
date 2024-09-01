"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type Props = {};

export default function Todo({}: Props) {
  const [isChecked, setChecked] = useState(false);
  const [isEditable, setEditable] = useState(false);

  function handleChecked() {
    setChecked(!isChecked);
  }

  return (
    <div className="flex items-center justify-between">
      {/* left  */}
      <section className="flex gap-2 items-center">
        <Checkbox onClick={handleChecked} checked={isChecked} />
        {isEditable ? (
          <input
            className="bg-background border-b outline-none "
            defaultValue={"Todo 1"}
          />
        ) : (
          <p className={cn({ "line-through": isChecked })}>Todo 1</p>
        )}
      </section>
      {/* right  */}
      <section className="flex gap-2 items-center">
        {isEditable ? (
          <Button onClick={() => setEditable(false)}>Save</Button>
        ) : (
          <Button onClick={() => setEditable(true)} variant={"secondary"}>
            Edit
          </Button>
        )}

        <Button variant={"destructive"}>Delete</Button>
      </section>
    </div>
  );
}
