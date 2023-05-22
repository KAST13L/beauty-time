"use client";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main>
      Beauty time for your nails
      <Button
        onClick={() => alert("hello my beauty master")}
        variant={"contained"}
      >
        click
      </Button>
    </main>
  );
}
