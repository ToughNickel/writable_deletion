import React from 'react';
import {withRouter} from 'react-router-dom';
import './bootstrap.css';

class DeleteWritable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            writableID: '',
        }
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    handleDelete = (event) => {
        event.preventDefault();
        const data  = this.props.location;

        //delete the writable by the ID
        fetch(data.data[0]+'/cv_api/delete?bg=0&volumes%5B%5D='+this.state.writableID, {
            method: 'POST'
        });
        //-------------------

        this.props.history.push('/');
    };

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleDelete}>
                    <div className="form-group">
                        <input type="text" className = "form-control form-control-lg" name="writableID" value={this.state.writableID} 
                        placeholder = "Writable ID" onChange={this.onFieldChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary form-control-lg" value = "Delete Writable" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(DeleteWritable);