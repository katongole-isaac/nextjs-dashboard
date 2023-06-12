/**
 * Index / Home page
 *
 */

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function () {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  });

  // Redirects
  // You can either choose client side redirection as used here
  // OR in next.config.js
  
  return (
    <div className="container-fluid">
      <div className="container vw-100 vh-100 d-flex align-items-center justify-content-center">
        <small> Redirecting to Main dashboard ....</small>
      </div>
    </div>
  );
}
