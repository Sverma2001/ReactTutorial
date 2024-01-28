import React from 'react'

export default function main({ list, onDelete }) {
    return (
        <div className="container mt-2" >
            <div className="row">
                {list.length === 0 ? (
                    <div className="col-md-12">
                        <h2>No Data Found</h2>
                    </div>
                ) : (
                    list.map((item) => (
                        <div key={item.Id} className="col-md-6">
                            <div className="card mb-4" style={{ backgroundColor: 'lightYellow' }}>
                                <div className="card-body ">
                                    <h4 className="card-title" style={{ color: 'purple' }}>Name - {item.name}</h4>
                                    <h5 className="card-text" style={{ color: 'green' }}>Age - {item.age}</h5>
                                    <h5 className="card-text" style={{ color: 'blue' }}>Id - {item.Id}</h5>
                                    <button onClick={() => onDelete(item)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
