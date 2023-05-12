"use client";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import OpenMenu from "@/components/OpenMenu";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main>
      <Navigation setShowMenu={setShowMenu} showMenu={showMenu} />
      {showMenu && <OpenMenu setShowMenu={setShowMenu} showMenu={showMenu} />}
    </main>
  );
}
