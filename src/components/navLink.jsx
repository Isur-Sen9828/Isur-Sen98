"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLink = ({link}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathName = usePathname();


  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
  )
}

export default navLink