import * as React from "react"
import Layout from "../Components/Layout";
import {header , btn} from "../styles/home.module.css"
import { Link, graphql } from "gatsby";
export default function Home({data}) {

  console.log(data);

  const {title , description , copyright} = data.site.SiteMetadata

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
        <p>{title} - {description} - </p>
        <p>{copyright}</p>
        </section>  
    </Layout>
  );
}

export const query = graphql`
query SiteInfo {
  site {
    SiteMetadata {
      copyright
      description
      title
    }
  }
}`
