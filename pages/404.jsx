/**
 * 404 - Not Found Error Page
 *
 */

import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

import Layout from "@/components/auth/layout";

const NotFound = () => {

  const router = useRouter();
  console.log(router);

  return (
    <Layout>
      <Image
        width="100"
        height="100"
        src="https://img.icons8.com/pastel-glyph/64/page-not-found--v1.png"
        alt="page-not-found--v1"
      />

      <p className="mt-4"> 404 | Page Not Found </p>

      <Link href="/dashboard">
        <Image
          width="30"
          height="30"
          className="mr-2"
          src="https://img.icons8.com/ios-glyphs/30/arrow-pointing-left--v2.png"
          alt="arrow-pointing-left--v2"
        />
        Back to home
      </Link>
    </Layout>
  );
};

export default NotFound;
