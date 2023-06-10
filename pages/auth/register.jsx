/**
 * Regiser Page
 *
 */

import * as yup from "yup";
import React from "react";
import Link from "next/link";

import Form from "@/components/common/form";
import Layout from "@/components/auth/layout";
import Head from "next/head";

class Register extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = yup.object().shape({
    name: yup.string().min(3).required(),
    email: yup.string().min(3).required(),
    password: yup.string().min(3).required(),
  });

  submitForm = (data) => {
    console.log(data);
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title> Register</title>
        </Head>
        <Layout>
          <div className="header">
            <h1>Register </h1>
            <p>
              {" "}
              Already have an account? <Link href="/auth/login">
                {" "}
                Login{" "}
              </Link>{" "}
            </p>
          </div>
          <form>
            {this.renderInput("name", "Name")}
            {this.renderInput("email", "Email address")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("login")}
          </form>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Register;
