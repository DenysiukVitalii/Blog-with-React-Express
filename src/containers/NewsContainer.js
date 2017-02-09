import { connect } from 'react-redux';
import Posts from '../components/Posts';


const mapStateToProps = (state) => {
  return {
    news: state.articlesBySource[state.selectedSource].items.map((item,index) => {
      return {
        id: index,
        title: item.title,
        describe: item.description,
        image: item.urlToImage,
        link: item.url
      }
    }),
    type: 'news'
  }
}


const NewsContainer = connect(
    mapStateToProps
)(Posts)

export default NewsContainer;
