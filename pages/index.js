import React from 'react';
import Index from '../Component/Home/Index';

const index = ({ data }) => {
  return (
    <>
      <Index
        key={data}
        data={data}
      />
    </>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const data = await res.json();
  return {
    props: { data }
  }
}