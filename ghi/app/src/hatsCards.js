import React from "react";
import { Link } from 'react-router-dom';

function HatColumn(props) {
return (
    <div className="col">
    {props.list.map(data => {
        const conference = data.conference;
        return (
        <div key={conference.href} className="card mb-3 shadow">
            <img src={conference.location.picture_url} className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title">{conference.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
                {conference.location.name}
            </h6>
            <p className="card-text">
                {conference.description}
            </p>
            </div>
            <div className="card-footer">
            {new Date(conference.starts).toLocaleDateString()}
            -
            {new Date(conference.ends).toLocaleDateString()}
            </div>
        </div>
        );
    })}
    </div>
);
}

class HatCards extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        hats: [],
        HatColumns: [[],[],[]]
    }

    this.deleteHat = this.deleteHat.bind(this);
}

async componentDidMount() {
    const response = await fetch('http://localhost:8090/api/hats/')
    if (response.ok) {
    const data = await response.json()
    this.setState({ hats: data.hats })
    }
}
    // Set up the "columns" to put the conference
    // information into
    let HatColumns = [[], [], []];

    // Loop over the conference detail responses and add
    // each to to the proper "column" if the response is
    // ok
    let i = 0;
    for (let hat of state.hats) {
    if (hat.ok) {
        const details = await hat.json();
        HatColumns[i].push(details);
        i = i + 1;
        if (i > 2) {
        i = 0;
        }
    } else {
        console.error(hat);
    }
    }

async deleteHat(hat) {
    const deleteUrl = `http://localhost:8090/api/hats/${hat.id}`
    const fetchConfig = {
    method: "delete"
    }
    await fetch(deleteUrl, fetchConfig)

    const idx = this.state.hats.indexOf(hat)
    const updated_hats = [...this.state.hats]
    updated_hats.splice(idx, 1)
    this.setState({ hats: updated_hats })
}

render() {
    return (
    <> 
    <table className="table table-striped">
    <thead>
        <tr>
        <th>Style</th>
        <th>Color</th>
        <th>Fabric</th>
        <th>Location</th>
        <th>Picture</th>
        </tr>
    </thead>
    <tbody>
        {this.state.hats.map(hat => {
        return (
            <tr key={hat.id}>
            <td>{ hat.style }</td>
            <td>{ hat.color }</td>
            <td>{ hat.fabric }</td>
            <td>{ hat.location.closet_name }</td>
            <td><img src ={hat.picture_url} className="img-fluid"/></td>
            <td><button className="btn btn-danger" onClick={() => this.deleteHat(hat)}>Delete</button></td>
            </tr>
        );
        })}
    </tbody>
    </table>
    </> 
    )
}
}

export default HatCards






//This is the function version using the commented function in index.js to get the prop
//for this to work props would need to be added agin to app.js

// function HatList(props) {

//     return (
      //   <> 
      //  <table className="table table-striped">
      //   <thead>
      //     <tr>
      //       <th>Style</th>
      //       <th>Color</th>
      //       <th>Fabric</th>
      //       <th>Location</th>
      //       <th>Picture</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {props.hats.map(hat => {
      //       return (
      //         <tr key={hat.id}>
      //           <td>{ hat.style }</td>
      //           <td>{ hat.color }</td>
      //           <td>{ hat.fabric }</td>
      //           <td>{ hat.location.closet_name }</td>
      //           <td><img src ={hat.picture_url} className="img-fluid"/></td>
      //         </tr>
      //       );
      //     })}
      //   </tbody>
      // </table>
        // </> 
//     );
// };

// export default HatList;












