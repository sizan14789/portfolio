"use client";

import { createContext, ReactNode, useContext, useRef, useState } from "react";

const Context = createContext<any | null>(null);

export default function AppContext({ children }: { children: ReactNode }) {
  const projectRef = useRef(null);
  const aboutRef = useRef(null);

  const context = { projectRef };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export function getContext() {
  return useContext(Context);
}
