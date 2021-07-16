import React from 'react';
import {
  useParams
} from 'react-router-dom';

const NewsPage = () => {
  const { id } = useParams();

  return (
    <h1>Soy News page {id}</h1>
  )
}

export default NewsPage;
