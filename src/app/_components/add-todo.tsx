import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

export default function AddTodo({}: Props) {
  return (
    <div className="flex items-center gap-3">
      <Input />
      <Button>Add Todo</Button>
    </div>
  );
}
