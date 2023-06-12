/**
 * 404 - Not Found Error Page
 *
 */

import Link from "next/link";
import Image from "next/image";

import Layout from "@/components/auth/layout";

const NotFound = () => {


  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <Image
          width="100"
          height="100"
          src="https://img.icons8.com/pastel-glyph/64/page-not-found--v1.png"
          alt="page-not-found--v1"
        />
      </div>

      <p className="mt-4 text-center"> 404 | Page Not Found </p>

      <div className="d-flex justify-content-center">
        <Link href="/" className="text-center">
          <Image
            width="30"
            height="30"
            className="mr-2"
            src="https://img.icons8.com/ios-glyphs/30/arrow-pointing-left--v2.png"
            alt="arrow-pointing-left--v2"
          />
          Back to home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
