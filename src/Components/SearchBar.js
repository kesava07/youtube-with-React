import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: 'Default Value'
    }
    handleChange = (event) => {
        this.setState({ term: event.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.term)
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="card card-body mt-3 shadow-sm">
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" onChange={this.handleChange} placeholder="search your favorite videos" value={this.state.term} className="form-control" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default SearchBar;