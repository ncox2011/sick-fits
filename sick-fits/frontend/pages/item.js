import Link from 'next/link';
import React from 'react';
import SingleItem from '../components/SingleItem'
import gql from 'graphql-tag';



const Item = props => (
  <div>
      <SingleItem id={props.query.id} />
  </div>
)

export default Item;