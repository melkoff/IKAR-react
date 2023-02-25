const BASE_URL = 'https://admin.ikar-thinktank.org/api';

const getNews = async () => {
   await fetch(`${BASE_URL}/news`)
      .then(response => response.json())
      .then(data => {
         setNews(data);
      })
};
