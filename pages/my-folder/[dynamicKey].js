import React from 'react';
import { useRouter } from 'next/router';

// you may only have one dynamic file per directory

export default function DynamicRoute() {
  // THIS BELOW OR useRouter().query
  // const router = useRouter();
  const { dynamicKey } = useRouter().query; // key is the same as the name of the file

  return <div>ID = {dynamicKey}</div>;
}
