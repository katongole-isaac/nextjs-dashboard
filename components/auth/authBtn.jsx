/**
 * Skip Authentication Btn
 * 
 * 
*/

import { useRouter } from "next/router";

const SkipAuthBtn = () => {

    const router = useRouter();

    const handleClick  = () => {
       router.push("/");
    }

    return (
      <div className="py-4 d-flex justify-content-center">
        <button onClick={handleClick} className="btn login-btn text-dark font-weight-bold">
          skip authentication
        </button>
      </div>
    );
}
 
export default SkipAuthBtn;