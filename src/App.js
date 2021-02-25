import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Title from './components/Title/Title';
import List from './components/List/List';
import Button from './components/Button/Button';
import apiInfo from './apiInfo';
import styles from './App.module.css';

export default function App() {
  const { apiName, endpoints } = apiInfo;
  const [list, setList] = useState(null);

  const btnHandler = e => {
    if (list === e.target.name) {
      return setList(null);
    }
    setList(e.target.name);
  };
  return (
    <Layout>
      <h1>{apiName} API</h1>
      <p>Express API for {apiName}, view what routes pass</p>
      {endpoints.map(endpoint => (
        <>
          <div className={styles.wrapper}>
            <Button name={endpoint.title} btnHandler={btnHandler} list={list} />
            <Title key={endpoint.title} title={endpoint.title} />
          </div>
          {list && list === endpoint.title && (
            <List key={endpoint.items} endpoint={endpoint} />
          )}
        </>
      ))}
    </Layout>
  );
}
