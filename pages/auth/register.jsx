/**
 * Regiser Page
 *
 */

import * as yup from "yup";
import React from "react";
import Link from "next/link";
import Head from "next/head";

import Form from "@/components/common/form";
import Layout from "@/components/auth/layout";
import { Card, CardBody } from "@/components/common/card";
import SkipAuthBtn from "@/components/auth/authBtn";

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
          <Card classes="shadow">
            <CardBody>
              <div className="header">
                <h4 className="text-center">Register </h4>
                <p className="text-center">
                  Already have an account? <Link href="/auth/login">Login</Link>
                </p>
              </div>
              <form>
                {this.renderInput("name", "Name")}
                {this.renderInput("email", "Email address")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("Register")}
              </form>
              <SkipAuthBtn />
            </CardBody>
          </Card>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Register;
