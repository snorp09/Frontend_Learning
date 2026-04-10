/* A thin wrapper component, allowing for the Data Provider Client to be
solely client rendered. This is needed due to the usage of localStorage.

Side Note, these patterns change so fast, in the past useEffect with a setState
would have been used to check if the component was mounted, but this is now
not a recommend approach due to cascading re-renders. I suppose this makes sense
but it makes getting into learning this stuff well, such a pain and a hassle.
*/


"use client";

import dynamic from "next/dynamic";

const DataProviderClient = dynamic(
  () => import("@/components/client/DataProviderClient"),
  { ssr: false }
);

export default function DataProviderShell() {
  return <DataProviderClient />;
}