import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import { PortfolioDescription, PortfolioHeader, PortfolioImage, PortfolioLink, PortfolioList, PortfolioFooter } from "../../components/PortfolioItems/portfolio-items";

const converseV1Data = {
  headerData: {
    title: 'Admin Principles for Content Companies',
    companies: ['General', 'Indaba Music', 'Splice'],
    problem: 'Admins often get the short end of the stick and yet they power the content platforms for all of the media we consume. Part of the reason that internal tooling gets shorted is in the service of accelerating end user value by putting most development resources into the user-facing product and infrastructure.',
    value: `By focusing on creating a great experience for content administrators, we can drive user value by making the platform fully serviceable by its admin. Further, with upfront investment on internal tooling for each shipped project, we'll increase build velocity in the long run, increasing user value.`
  },
  description__intro: `There’s an axiom in the garment industry, “A garment should look as nice on the inside as on the outside.” Taken more abstractly, the craftsmanship of the support product should match the care put into the forward facing product. In software development, this is not always the case. A need to rush to market creates a “just make it work” mentality. Things are hacked in ad hoc. Patches are applied to tears. Eventually, however, as the application scales, it begins to come apart at the seams. The patches wither. The tears become irreparable holes. Details in the deck:`,
  link__artistSprint: {
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/45ee152b-f49b-47e0-ab80-5816c4704aa5/Admin_Design_Principles.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45PBKCWMPA%2F20190716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190716T013743Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0AOhXjPipc0QAcaqFLUEBlgbYIzh2KvhAST9DUa1K%2BAiAjBFuVjI9uU4uttxTfRH27L2g7RGRZxQHE148Sb5lPPCraAwgfEAAaDDI3NDU2NzE0OTM3MCIMIGLCILN0LGVzVwyqKrcDCt5Lap7zeR3H2hg6BOwHiBEw07ivS79bzbFbdTwlTqfmFv7z8nZ8WrJF45Up%2FIEJRpzSsvicyVR7v4bEONdopdwo0%2FzgD4JII2yFf556YD6r%2F2gBwq5AK8lMVdWK7c%2BhfRBRUvqH4WdI%2FotSwJ94l4lggfFPqkFfWZV6zghdMstbbD%2BQhiZDXfvSOcGuxyvFEcznmrqevRa88MZOuKy5sq12199KVo4cvSn4%2Bt3a8Imtopfy2Dw6jMzdScgpE07qSgxTb2mApUyHmBq7uC5t%2FGgYUWk7tJyfTd4DoAYfxTUM7UWLr7EVv%2B8pEPC0OwvEJBME5y7pd%2B84Xj9VudlLrQjGL6zGIrmF5lHOD6979XxMOry22f257R7gqOflFzMuY2Hi84CzGewTtXwxG%2B5KDYNkq1G9Gayrzio08Y4L9qPSmx3ioO9DrXo3UqQ9WUWVBCgUYXqIwmP6ImbHC065qfu0mSmNkPHR%2Fk7%2BESshjK8%2BQ04nCEdPrIjrCAJ2pGLGQOhhNEUOHkzco1l6sP%2BN0yGlb5To%2FmFrYM3LuuIuBV%2BOoKJvtme%2BEQKzfFkFrECGmEFBA0zUTDCL7rPpBTq1AVWDAr4OAzrH6HGTQggGc8eUCqwtcb1aRRnQ4Druu8vkFJnmq2Ff5EihMkA8IF8EX9j%2FvO2Em4e8zgAgvveBv6fGulQxIwbjX%2FcsqHgrM3MlIa2hKoDGMWDnyf%2Bf7%2FF6L4NXD7T36G2wYXSeA5A0WWeMKsAj5P3Q0nLnFiGEAWzVA6Rd4xs5LenwQGaOpH1phRmTrod3%2BIXmmxkJkBPYBel11plOXyucFNhCtHc6d9%2FC9SH0TKM%3D&X-Amz-Signature=c53039fa100ba38b6a4e368c10ea597194ec3a383e0c77caf0b09c93e800fb8d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Admin%2520Design%2520Principles.pdf%22',
    name: 'Content Admin Principles.pdf'
  }, 
  footerData: {
    learnings: [
      `Making a platform fully serviceable lets that platform run on its own and either saves money or development cycles in the long run.`,
      `I would like to see this become a product and design principle more broadly; it's something that doesn't get talked about too much.`
    ],
    related: [
      {
        relatedTitle: 'Ampl Music',
        relatedLink: '/work/ampl-music'
      }  
    ]
  }
}

class RubberTracksPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  data = converseV1Data;

  render() {
    return (
      <main>
        <Header />
        <PortfolioHeader 
          headerData={this.data.headerData} />
        <h4 className="work-item__main-section work-item__header">Project Description</h4>
        <h4 className="work-item__main-section work-item__header work-item__header--sub-header">Sprint</h4>
        <PortfolioDescription
          description={this.data.description__admin} />
        <PortfolioLink 
          link={this.data.link__admin} />

        <PortfolioFooter 
          footerData={this.data.footerData} />
      </main>
    );
  }
}

export default RubberTracksPage;