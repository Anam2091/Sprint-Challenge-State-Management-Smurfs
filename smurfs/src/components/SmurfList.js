import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getSmurfs} from '../actions'
import Smurf  from './Smurf';

const SmurfList = ({ getSmurfs, smurfs})=> {
    useEffect(() => {
        // run action creator when the component mounts
        getSmurfs();
      }, [getSmurfs]);

    return (
      <div>
        {
            smurfs.map((smurf) => {
                return <Smurf smurf={smurf}/>
            })
        }
      </div>
    );
  }

  const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
    };
  };
  
  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(SmurfList);

