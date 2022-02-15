import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";

import {changePage, changePageSorted} from "../../store";

const Pagination = ({totalPages}) => {
    const {darkMode} = useSelector(state => state.theme);
    const dispatch = useDispatch();

    function handlePage(data) {
        let selectedPage = data.selected + 1;
        dispatch(changePage(selectedPage))
        dispatch(changePageSorted(selectedPage))
    }

    return (
        <div>
            <ReactPaginate
                pageCount={totalPages}
                marginPagesDisplayed={3}
                pageRangeDisplayed={4}
                onPageChange={handlePage}
                containerClassName={'pagination justify-content-center'}
                disabledClassName={darkMode ? 'disabled_dark' : 'disabled'}
                pageClassName={'page-item'}
                pageLinkClassName={darkMode ? 'page-link_dark' : 'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={darkMode ? 'page-link_dark' : 'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={darkMode ? 'page-link_dark' : 'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={darkMode ? 'page-link_dark' : 'page-link'}
                activeClassName={'active'}
            />
        </div>
    );
};

export {Pagination};