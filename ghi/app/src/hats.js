function HatList(props) {

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
          {props.hats.map(hat => {
            return (
              <tr key={hat.id}>
                <td>{ hat.style }</td>
                <td>{ hat.color }</td>
                <td>{ hat.fabric }</td>
                <td>{ hat.location.closet_name }</td>
                <td><img src ={hat.picture_url} className="img-fluid"/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </> 
    );
};

export default HatList;















// import React from 'react';
// import { Link } from 'react-router-dom';

// function HatList(props) {
//     return (
//         <div className="col">
//         {props.hats.map(hat => {
//             return (
//             <div key={hat.id} className="card mb-3 shadow">
//                     <img src={hat.picture_url} className="card-img-top" />
//                     <div className="card-body">
//                     <h5 className="card-title">{hat.style}</h5>
//                     <h6 className="card-subtitle mb-2 text-muted">
//                         {hat.fabric}
//                     </h6>
//                     <p className="card-text">
//                         {hat.location}
//                     </p>
//                 </div>
//                 <div className="card-footer">
//                 </div>
//             </div>
//             );
//         })}
//         </div>
//     );
//     }

// const conferenceColumns:[[],[],[]]




// function HatColumn(props) {
//     return (
//         <div className="col">
//         {props.hats.map(hat => {
//             return (
//             <div key={hat.id} className="card mb-3 shadow">
//                 <img src={hat.picture_url} className="card-img-top" />
//                 <div className="card-body">
//                 <h5 className="card-title">{hat.style}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">
//                     {hat.fabric}
//                 </h6>
//                 <p className="card-text">
//                     {hat.location}
//                 </p>
//             </div>
//         ))}
//         </div>
//     );
// }




