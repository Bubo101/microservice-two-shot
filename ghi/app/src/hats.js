import React from "react";

class HatList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hats: []}

    this.deleteHat = this.deleteHat.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8090/api/hats/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ hats: data.hats })
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
  
export default HatList






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












