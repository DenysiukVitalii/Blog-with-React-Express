import { connect } from 'react-redux';
import Posts from '../components/Posts';


var NEWS = [
  {
    id: 1,
    header: 'Как с помощью SEO зарабатывать бизнесу деньги',
    image: 'http://ain.ua/wp-content/uploads/2017/01/PR-4-300x190.png',
    views: 215,
    date: '5.01.2017'
  },
  {
    id: 2,
    header: 'Устройство, добавляющее 7 портов новому MacBook Pro, собрало на Kickstarter $1,7 млн вместо $100 000',
    image: 'http://ain.ua/wp-content/uploads/2017/01/hyperdrive-300x190.jpg',
    views: 322,
    date: '12.01.2017'
  },
  {
    id: 3,
    header: 'WSJ впервые раскрыл финансовые показатели SpaceX Илона Маска',
    image: 'http://ain.ua/wp-content/uploads/2017/01/31467130724_3e1ec5bfa8_c-300x190.jpg',
    views: 140,
    date: '21.01.2017'
  },
  {
    id: 4,
    header: 'В Киеве пройдет пятая конференция по аффилейт-маркетингу CpaConf 2017',
    image: 'http://ain.ua/wp-content/uploads/2017/01/PR1-1-300x190.png',
    views: 112,
    date: '15.01.2017'
  },
  {
    id: 5,
    header: 'Три совета по росту стартапа при работе с индексом потребительской лояльности NPS',
    image: 'http://ain.ua/wp-content/uploads/2017/01/mr-smiley-300x190.jpg',
    views: 563,
    date: '22.12.2016'
  },
  {
    id: 6,
    header: 'На Prometheus стартует бесплатный курс программирования на Java',
    image: 'http://ain.ua/wp-content/uploads/2017/01/Depositphotos_75272709_m-20-300x190.jpg',
    views: 855,
    date: '30.01.2017'
  }
];


const sortByDate = (a, b) => {
    var d1 = Date.parse(a.date.split('.').reverse().join('-'));
    var d2 = Date.parse(b.date.split('.').reverse().join('-'));
    return d2 - d1;
}

function sortByPopular(a, b) {
    return b.views - a.views;
}



const getSortedNews = (sortBy) => {
    switch (sortBy) {
        case 'FILTER_DATE': return [].concat( NEWS.sort(sortByDate) );
        case 'FILTER_POPULAR': return [].concat( NEWS.sort(sortByPopular) );

        default : return NEWS.sort(sortByDate);
  }
}


const mapStateToProps = (state) => {
  return {
    news: getSortedNews(state.visibilityFilter),
    type: 'blog'
  }
}


const BlogContainer = connect(
    mapStateToProps
)(Posts)

export default BlogContainer;
