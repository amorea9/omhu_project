import Button from "@/components/Button";
import { TestComponent } from "@/components/TestComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Button intent="primary" kind="link" href="#" size="large" label="Test button" />
    </main>
  );
}

// This should be the home / landing page for the website
