"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { SearchableItem } from "@/types/dashboard";
import gsap from "gsap";
import { ActionResult } from "@/types/action";
import { useOptionalSideNav } from "@/app/dashboard/sa/layout";

type ItemsSearchProps<T extends SearchableItem> = {
  items: T[];
  deleteItem: (id: string) => Promise<ActionResult<void>>;
  label: string;
  urlForEdit:string;
  additionalElements?: React.ReactNode;
};


export default function ItemsSearch<T extends SearchableItem>({ items, deleteItem, label, urlForEdit, additionalElements }: ItemsSearchProps<T>) {
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const sideNav = useOptionalSideNav();
  console.log("sideNav", sideNav);

  const handleDelete = async (id: string) => {
    const res =  await deleteItem(id);
    setConfirmId(null);
  };

  // Animate all left-starting cards
  useEffect(() => {
    gsap.fromTo(
      ".start-left",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power1.out",
        stagger: 0.1,
      }
    );

    // Animate all right-starting cards
    gsap.fromTo(
      ".start-right",
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power1.out",
        stagger: 0.1,
      }
    );
    
    // Animate all bottom-starting cards
    gsap.fromTo(
      ".start-bottom",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power1.out",
        stagger: 0.1,
      }
    );
  }, []); 

  return (
    <>
      <div className="h-full w-[90vw] max-w-5xl flex flex-col items-start justify-start z-1 pt-10 gap-2">
        <h1 className={`font-family-impact text-5xl start-left cursor-pointer xl:cursor-default`} onClick={sideNav?.handleSideNav} >
          {label}
          {sideNav != null && (
            <Image
              src="/dashboard/block-right-arrow.svg"
              alt="Menu Side Nav"
              width={18}
              height={18}
              className="inline-block ml-3 cursor-pointer xl:hidden"
            />
          )}

        </h1>
        <SearchBar<T>
          items={items}
          width="400px"
          className="start-left"
          additionalElements={
            <>
              <Link href={urlForEdit+"/create"}>
                <button className="bg-[#E93400] cursor-pointer font-family-gill aspect-square w-10 text-2xl font-bold text-white rounded-full items-center align-middle">
                  +
                </button>
              </Link>
              {additionalElements}
            </>

          }
        >
          {(filteredItems) => (
            // this is the table inside search bar component
            <div className="rounded-2xl overflow-hidden start-left border-4 border-[#003772] bg-[#0555AB] w-full mt-5">
              <div className="overflow-x-auto thin-scroll">
                <table className="w-full border-collapse table-fixed min-w-[600px]">
                  <thead className="bg-[#0555AB] text-white">
                    <tr className="border-b-2 border-[#003772]">
                      <th className="w-1/7 border-r-2 border-[#003772] px-4 py-2">ID</th>
                      <th className="w-4/7 border-r-2 border-[#003772] px-4 py-2">Title</th>
                      <th className="w-2/7 px-4 py-2">Action Buttons</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item) => (
                      <tr
                        key={item.id}
                        className={`odd:bg-[#ff7cb9] even:bg-white border-b-2 border-[#003772] start-left`}
                      >
                        <td className="thin-scroll border-r-2 overflow-x-auto border-[#003772] px-4 py-2">
                          {item.id}
                        </td>
                        <td className="border-r-2 border-[#003772] px-4 py-2">
                          {item.title || item.name}
                        </td>
                        <td className="px-4 py-2 flex gap-4 justify-center">
                          <Link
                            href={`${urlForEdit}/${item.id}/edit`}
                            className="bg-[#0555AB] rounded-md w-[5rem] h-[2.5rem] relative"
                          >
                            <Image
                              src="/achievements/dashboard/pencil-logo.svg"
                              alt={"Edit "+label}
                              fill
                              className="object-contain py-[0.5rem]"
                            />
                          </Link>
                          <button
                            onClick={() => setConfirmId(item.id)}
                            className="bg-[#E93400] rounded-md w-[5rem] h-[2.5rem] relative cursor-pointer"
                          >
                            <Image
                              src="/achievements/dashboard/trash-logo.svg"
                              alt={`Delete `+ label}
                              fill
                              className="object-contain py-[0.5rem]"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </SearchBar>
      </div>

      {/* Confirmation Popup */}
      {confirmId !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg flex flex-col gap-4">
            <h2 className="text-lg font-bold">Confirm Delete</h2>
            <p>Are you sure you want to delete this {label}?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setConfirmId(null)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmId)}
                className="px-4 py-2 bg-[#E93400] text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
