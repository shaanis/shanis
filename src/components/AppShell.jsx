"use client";

import { useState } from "react";
import Header from "./Header";

export default function AppShell({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {children}
    </>
  );
}
