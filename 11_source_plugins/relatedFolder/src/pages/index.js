import * as React from "react"
import Layout from "../Components/Layout";
import {header , btn} from "../styles/home.module.css"
import { Link} from "gatsby";
export default function Home() {


  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Ux Designer & web developer based in manchaster</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/demo.png" alt="site banner" style={{maxWidth:"100%"}}/>
        </section>  
    </Layout>
  );
}
