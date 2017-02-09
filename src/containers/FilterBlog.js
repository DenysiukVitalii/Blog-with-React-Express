
import { connect } from 'react-redux';
import { setDateFilter, setPopularFilter} from '../actions';
import BlogFilters from '../components/BlogFilters';

const mapStateToProps = (state) => {
    return { state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPopular: () => {
            dispatch(setPopularFilter());
        },
        setDate: () => {
            dispatch(setDateFilter());
        }
    }
}


const FilterBlog = connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogFilters)

export default FilterBlog;
