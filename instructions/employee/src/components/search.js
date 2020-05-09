import React from 'react';
function Search(props) {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
            <h1 class="display-4">Employee Management</h1>
           
          </div>
            {/* <input className="search" onChange={props.handleChange.bind(e)}></input> */}

            <div className="search">
              <form className="form-group mt-5">
                <input className="form-control"  placeholder="Start typing what you need to do..." onChange={props.handleChange} />
              </form>
            </div>
        </div>
    )
}

export default Search;