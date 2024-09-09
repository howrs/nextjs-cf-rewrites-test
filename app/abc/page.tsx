"use client";

import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Page() {
  let pathname = usePathname();
  let query = useParams();
  // let a = useSearchParams();

  console.log(pathname);

  return <div suppressHydrationWarning>{pathname}</div>;
}
