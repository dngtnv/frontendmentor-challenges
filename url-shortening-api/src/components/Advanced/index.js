import React, { useCallback, useEffect, useState } from 'react';
import AdvStatistics from './AdvStatistics';
import './index.scss';
import Loader from './Loader';
import Shorten from './Shorten';
import ShortenedList from './ShortenedList';

const SHORTENED_lIST_KEY = 'SHORTENED_LINK';

function Index() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const storagedShortened = localStorage.getItem(SHORTENED_lIST_KEY);
    if (storagedShortened) {
      setData(JSON.parse(storagedShortened));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SHORTENED_lIST_KEY, JSON.stringify(data));
  }, [data]);

  const fetchData = useCallback(async () => {
    try {
      let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      if (response.ok) {
        const result = await response.json();
        setData([result.result, ...data]);
        setIsPending(false);
      } else {
        throw Error('The provided link is incorrect');
      }
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  }, [data, url]);

  const handleInput = useCallback(() => {
    if (url === '') {
      setIsEmpty(true);
    } else {
      fetchData();
      setIsPending(true);
      setError(null);
    }
  }, [fetchData, url]);

  const handleChange = useCallback(event => {
    setUrl(event.target.value);
    setIsEmpty(false);
  }, []);

  return (
    <section className="adv">
      <div className="adv-section container container-pd-adv">
        <Shorten isEmpty={isEmpty} isPending={isPending} error={error} handleInput={handleInput} handleChange={handleChange} />
        {isPending && <Loader />}
        <ShortenedList list={data} />
        <AdvStatistics />
      </div>
    </section>
  );
}

export default Index;
