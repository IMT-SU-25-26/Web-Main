"use client";

import { createContext, useContext } from "react";

type SideNavContextType = {
  handleSideNav: () => void;
} | null;

const SideNavCtx = createContext<SideNavContextType>(null);

export const useOptionalSideNav = () => {
  return useContext(SideNavCtx);
};

export const SideNavProvider = SideNavCtx.Provider;
