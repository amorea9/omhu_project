import Button from "@/components/Button";
import { TestComponent } from "@/components/TestComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10 flex gap-5 bg-grey-50">
      <Button intent="primary" kind="link" href="#" size="large" label="Test button" />
      <Button intent="secondary" kind="link" href="#" size="large" label="Test button" />
      <Button intent="alternative" kind="link" href="#" size="large" label="Test button" />
      <Button intent="primary" kind="link" href="#" size="small" label="Test button" />
      <Button intent="secondary" kind="link" href="#" size="small" label="Test button" />
      <Button intent="alternative" kind="link" href="#" size="small" label="Test button" />
    </main>
  );
}

// This should be the home / landing page for the website
