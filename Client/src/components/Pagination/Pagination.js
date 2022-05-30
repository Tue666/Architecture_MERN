import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { currentPage, totalPage } = pagination;

    // const currentPage;

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    return (
        <div className='pagination pagination-pages'>
            <button
                disabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Prev
            </button>
            <Typography>
                {currentPage > 1 && (
                    <button disabled={true}>
                        {currentPage - 1}
                    </button>
                )}
                &nbsp;&nbsp;
                <button>
                    {currentPage}
                </button>&nbsp;&nbsp;
                {currentPage < totalPage && (
                    <button disabled={true}>
                        {currentPage + 1}
                    </button>
                )}

            </Typography>
            <button
                disabled={currentPage >= totalPage}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>


        </div>
    );
}

export default Pagination;