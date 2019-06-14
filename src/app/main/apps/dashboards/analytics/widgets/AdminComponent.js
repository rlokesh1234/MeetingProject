import React from 'react';
import { withStyles, Card, Typography } from '@material-ui/core';
import classNames from 'classnames';

const AdminComponent = ({ adminDetails, theme }) => {

    const adminName = adminDetails.title

    return (
        <Card className="w-full rounded-8 shadow-none border-1">

            <div className="p-16 pb-0 flex flex-row flex-wrap items-end">

                <div className="flex w-full">
                    
                    <div className="w-full">
                        <Typography component="h5"><span className="bg-black text-white rounded p-4 block">{adminName}</span></Typography>
                        <div className="listItem">
                            {
                                adminDetails && adminDetails.data.map((details, index) => {
                                    return (<p className={classNames('p-8')} key={index}>
                                        <span className="p-4 rounded inline-block text-black w-1/2">{details.field}</span>
                                       <span className={details.class==='success'? 'bg-green text-white p-6 rounded':'bg-red text-white p-6 rounded'}>{details.value}</span> 
                                    </p>)
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>
        </Card>
    );
};

export default withStyles(null, { withTheme: true })(AdminComponent);
