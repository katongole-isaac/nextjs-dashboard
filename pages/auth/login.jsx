/**
 * Login Component
 *
 */

import _ from "lodash";
import React from "react";
import * as yup from "yup";
import Link from "next/link";
import Head from "next/head";

import Form from "@/components/common/form";
import Layout from "@/components/auth/layout";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = yup.object().shape({
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().label("Password"),
  });

  submitForm = (data) => {
    console.log("data", data);
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title> Login</title>
        </Head>
        <Layout>
          <div className="header">
            <h1>Login </h1>
            <p>
              Don't have an account?
              <Link href="/auth/register"> Register </Link>
            </p>
          </div>
          <form>
            {this.renderInput("email", "Email address")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("login")}
          </form>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Login;
