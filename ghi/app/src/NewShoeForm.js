import React from 'react';
import { renderMatches } from 'react-router-dom';

class NewShoeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturer: "",
            model_name: "",
            color: "",
            picture_url: "",
            bins: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
        this.handleModelNameChange = this.handleModelNameChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
        this.handleBinChange = this.handleBinChange.bind(this);
    }

    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({ manufacturer: value });
    }

    handleModelNameChange(event) {
        const value = event.target.value;
        this.setState({ modelName: value });
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({ color: value });
    }

    handlePictureUrlChange(event) {
        const value = event.target.value;
        this.setState({ pictureUrl: value });
    }

    handleBinChange(event) {
        const value = event.target.value;
        this.setState({ bin: value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.model_name = data.modelName;
        data.picture_url = data.pictureUrl;
        delete data.modelName;
        delete data.pictureUrl;
        delete data.bins;
        console.log(data);
    
        const shoeUrl = 'http://localhost:8080/api/shoes/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(shoeUrl, fetchConfig);
        if (response.ok) {
            const newShoe = await response.json();
            console.log(newShoe);

            const cleared = {
                manufacturer: "",
                model_name: "",
                color: "",
                picture_url: "",
                bin: "",
            };
            this.setState(cleared);
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/bins/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await.response.json();
            this.setState({bins: data.bins})
        }
    }

    render() {
        return ()
    }






    
}