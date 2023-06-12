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
import { Card, CardBody } from "@/components/common/card";
import SkipAuthBtn from "@/components/auth/authBtn";

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
   
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title> Login</title>
        </Head>
        <Layout>
          <Card classes="shadow">
            <CardBody>
              <div className="header">
                <h4 className="text-center">Login </h4>
                <p className="text-center">
                  Don't have an account?
                  <Link href="/auth/register"> Register </Link>
                </p>
              </div>
              <form>
                {this.renderInput("email", "Email address")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("login")}
              </form>
              <SkipAuthBtn />
            </CardBody>
          </Card>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Login;
