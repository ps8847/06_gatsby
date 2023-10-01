import React from "react";
import "../styles/global.css"
import Layout from "../Components/Layout";

import {portfolio} from "../styles/projects.module.css"

export default function projects() {
  return (
    <Layout>

    <div className={portfolio}>
     <h2>Portfolio</h2>
     <h3>Projects & Websites I've Created</h3>
    </div>
    </Layout>
  );
}