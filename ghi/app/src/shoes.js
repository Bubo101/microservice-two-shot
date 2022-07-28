import React from "react";

class ShoeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { shoes: [] }

        this.deleteShoe = this.deleteShoe.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/shoes/')
        if (response.ok) {
            const data = await response.json()
            this.setState({ shoes: data.shoes })
        }
    }

    async deleteShoe(shoes) {
        const deleteUrl = `http://localhost:8080/api/shoes/${shoes.id}`
        const fetchConfig = {
            method: "delete"
        }
        await fetch(deleteUrl, fetchConfig)

        const idx = this.state.shoes.indexOf(shoes)
        const updated_shoes = [...this.state.shoes]
        updated_shoes.splice(idx, 1)
        this.setState({ shoes: updated_shoes })
    }

    render() {
        return (
            <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Manufacturer</th>
                            <th>Model Name</th>
                            <th>Color</th>
                            <th>Brand Name</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.shoes.map(shoes => {
                            return (
                                <tr key={shoes.id}>
                                    <td>{shoes.manufacturer}</td>
                                    <td>{shoes.model_name}</td>
                                    <td>{shoes.color}</td>
                                    <td>{shoes.bin.closet_name}</td>
                                    <td><img src={shoes.picture_url} className="img-fluid" /></td>
                                    <td><button className="btn btn-danger" onClick={() => this.deleteShoe(shoes)}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ShoeList;