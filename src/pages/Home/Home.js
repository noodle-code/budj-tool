import React from 'react';
import {Link} from "react-router-dom";
import {
  PageWrapper,
} from './../../components';

const Home = () => (
  <PageWrapper>
    <div>Sample</div>
    <Link to="/account">Accounts</Link>
  </PageWrapper>
);

export default Home;
