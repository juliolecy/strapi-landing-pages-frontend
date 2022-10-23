import * as k from './styles';
import { Basic } from '../Basic';
import { mockBasic } from '../Basic/mock';
import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { useLocation } from 'react-router-dom';
import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;
    const load = async () => {
      try {
        console.log('fetching');
        const data = await fetch(
          'http://https://strapi-landing-pages-v4.herokuapp.com/api/pages/1?populate=deep',
        );
        const json = await data.json();
        console.log(json.data.attributes);
        const { attributes } = json.data;
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Page not found';
    }

    if (data && !data.slug) {
      document.title = 'Loading';
    }

    if (data && data.slug) {
      document.title = data.title;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  console.log(data);
  const { links, text, link, imageSrc } = menu;
  console.log(menu);

  return (
    <Basic
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, imageSrc }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}=${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
      })}
    </Basic>
  );
}

export default Home;
