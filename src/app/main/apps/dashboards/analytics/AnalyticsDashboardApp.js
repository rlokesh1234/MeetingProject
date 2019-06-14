import React, {Component} from 'react';
import {FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import AdminComponent from './widgets/AdminComponent'
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';

class AnalyticsDashboardApp extends Component {

    componentDidMount()
    {
        this.props.getWidgets();
    }

    render()
    {
        const {widgets,adminData,campaignData,sellerData} = this.props;
        if ( !widgets )
        {
            return null;
        }
        return (
            <div className="w-full">

                {/* <Widget1 data={widgets.widget1}/> */}

                <FuseAnimate animation="transition.slideUpIn" delay={200}>

                    <div className="flex flex-col md:flex-row sm:p-8 container">

                        <div className="flex flex-1 flex-col min-w-0">

                            <div className="flex flex-col sm:flex sm:flex-row pb-32 flex-wrap">

                            {adminData && adminData.map((adminDetails,index)=>{
                                    return (<div className="widget w-full sm:w-1/3 flex p-16" key={index}>
                                                <AdminComponent adminDetails={adminDetails}/>
                                            </div>)
                                })}
                               
                            </div>

                        </div>


                    </div>
                </FuseAnimate>
            </div>
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getWidgets: Actions.getWidgets
    }, dispatch);
}

function mapStateToProps({analyticsDashboardApp})
{
    return {
        widgets: analyticsDashboardApp.widgets.data,
        adminData:analyticsDashboardApp.widgets.adminData,
        campaignData:analyticsDashboardApp.widgets.campaignData,
        sellerData:analyticsDashboardApp.widgets.sellerData
    }
}

export default withReducer('analyticsDashboardApp', reducer)(withRouter(connect(mapStateToProps, mapDispatchToProps)(AnalyticsDashboardApp)));
