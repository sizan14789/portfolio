"use client";

import { createContext, ReactNode, useContext, useRef, useState } from "react";

const Context = createContext<any | null>(null);

export default function AppContext({ children }: { children: ReactNode }) {
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const connectRef = useRef(null);

  const context = { projectRef, skillsRef, connectRef };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export function getContext() {
  return useContext(Context);
}
