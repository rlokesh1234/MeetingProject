import * as Actions from '../actions';
//import staff from '../../../../../../../../public/assets/images/admin/staff'

const initialState = {
    data: null,
    adminData:[
        {"title":"Scope of Work","data":[{"field":"Approved SOW","value":100,"class":"success"},{"field":"Rejected SOW","value":100,"class":"danger"}]},
        {"title":"Evaluation Report","data":[{"field":"Approved SOW","value":100,"class":"success"},{"field":"Rejected SOW","value":100,"class":"danger"}]},
        {"title":"Total","data":[{"field":"Approved SOW","value":100,"class":"success"},{"field":"Rejected SOW","value":100,"class":"danger"}]},
        {"title":"Scope of Work","data":[{"field":"Approved SOW","value":100,"class":"success"},{"field":"Rejected SOW","value":100,"class":"danger"}]},
        {"title":"Evaluation Report","data":[{"field":"Approved SOW","value":100,"class":"success"},{"field":"Rejected SOW","value":100,"class":"danger"}]},
        {"title":"Total","data":[{"field":"Approved SOW","value":100,"class":"success"},{"field":"Rejected SOW","value":100,"class":"danger"}]},
    ],
    campaignData:{"rows":[{"title":"Furnishing","clicks":"3621","conversion":"90"},{"title":"Heavy Equipments","clicks":"703","conversion":"7"},{"title":"Construction","conversion":"0","clicks":"532"},{"title":"Electronics","clicks":"201","conversion":"8"}]},
    sellerData:{"data":[{"title":"Patrick Store","total":"$110.00","commission":"$16.50","balance":"$93.50","siteBal":"$0.00","status":"Approved","createdAt":"May 22, 2019"},
    {"title":"Patrick Store","total":"$768.90","commission":"$115.34","balance":"-$115.34","siteBal":"$115.34","status":"Approved","createdAt":"May 22, 2019"},
    {"title":"Patrick Store","total":"$768.90","commission":"$115.34","balance":"$653.56","siteBal":"$0.00","status":"Approved","createdAt":"May 22, 2019"},
    {"title":"Patrick Store","total":"$419.40","commission":"$62.91","balance":"$356.49","siteBal":"$0.00","status":"Approved","createdAt":"May 21, 2019"},
    {"title":"Patrick Store","total":"$768.90","commission":"$115.34","balance":"$653.56","siteBal":"$0.00","status":"Approved","createdAt":"May 21, 2019"}
]}
};

const widgetsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_WIDGETS:
            return {
                ...state,
                data: {...action.payload}
            };
        default:
            return state;
    }
};

export default widgetsReducer;