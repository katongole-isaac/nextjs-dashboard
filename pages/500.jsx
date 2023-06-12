/**
 * 500 page - Used to handle Serverside Error.
 * Displayed in production in response of server errors
 * 
 */

import Link from "next/link";

export default function custom500() {
  return (
    <div className="container-fluid vh-100 vw-100 d-flex justify-content-center align-items-center flex-column ">
      <p> 500 | Unexpected Error occured </p>
      <Link href="/"> &larr; Back to Dashboard </Link>
    </div>
  );
}
