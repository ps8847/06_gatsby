import React from "react";
import "../styles/global.css"
import Layout from "../Components/Layout";

import {portfolio , projectscss} from "../styles/projects.module.css"
import { Link, graphql } from "gatsby";

export default function projects({data}) {

  console.log(data);

  let projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>

    <div className={portfolio}>
     <h2>Portfolio</h2>
     <h3>Projects & Websites I've Created</h3>
    </div>
    <div className={projectscss}>
      {projects.map(project => (
        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
          <div>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </div>
        </Link>
      ))}
    </div>
    </Layout>
  );
}

export const query = graphql`
query notes2{
  allMarkdownRemark(sort: {fields: frontmatter___date , order: DESC}){
    nodes{
      html
      frontmatter{
        slug
        title
        stack
      }
      id
    }
  }
}
`