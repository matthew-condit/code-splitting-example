import React from 'react';
import lodash from 'lodash';
import moment from 'moment';


const Big = () => {
    return (
        <div>
            Hello Big Big World
            {lodash.isEqual({ prop: 1,}, { prop: 1})}
            {
                moment().format('MM DD')
            }
        </div>
    )
};

export default Big;