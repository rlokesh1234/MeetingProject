import React from 'react';

export default class AddSow extends React.Component{
    render(){
        return(
            <form className="p-20">
            <label className="block p-12">
             <span className="pb-10 block">Project Title:</span>
              <input type="text" className="w-full rounded p-12"  placeholder="Project Title" />
            </label>
            <label className="block p-12">
            <span className="pb-10 block">P & C Letter Number:</span>
              <input type="text" className="w-full rounded p-12"  placeholder="P & C Letter Number"/>
            </label>
            <label className="block p-12">
            <span className="pb-10 block">End User Department:</span>
              <input type="text" className="w-full rounded p-12" placeholder="End User Department"/>
            </label>
            <label className="block p-12">
            <span className="pb-10 block">Evaluation Leader Name:</span>
              <input type="text" className="w-full rounded p-12" placeholder="Evaluation Leader Name" />
            </label>
            <label className="block p-12">
            <span className="pb-10 block">Procurement Engineer Name:</span>
              <input type="text" className="w-full rounded p-12" placeholder="Procurement Engineer Name" />
            </label>
            <label className="block p-12">
            <span className="pb-10 block">Estimated Project Amount:</span>
              <input type="text" className="w-full rounded p-12" placeholder="Estimated Project Amount" />
            </label>
            <label className="block p-12">
            <span className="pb-10 block">Mode of Tender:</span>
              <input type="text" disabled className="w-full rounded p-12" placeholder="Mode of Tender" />
            </label>
            <label className="block p-12">
            <span className="pb-10 block">Approval Type:</span>
              <input type="text" disabled className="w-full rounded p-12" placeholder="Approval Type" />
            </label>

            <input type="submit" value="Submit" />
          </form>
        )
    }
}