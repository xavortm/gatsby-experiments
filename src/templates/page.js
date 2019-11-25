import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PageSingle from '../components/pageSingle';

const Page = props => {
  const data = props.data.wordpressPage;

  useStaticQuery(graphql`
    query {
      wordpressPage {
        title
        content
      }
    }
  `);

  return <PageSingle {...data}></PageSingle>;
};

export default Page;
