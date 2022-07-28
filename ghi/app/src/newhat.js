import React from 'react'


class HatForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fabric : '',
      style: '',
      color: '',
      pictureUrl: "",
      locations:[]
    };
    this.handleFabricChange = this.handleFabricChange.bind(this);
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.picture_url = data.pictureUrl;
        delete data.pictureUrl;
        delete data.locations;
        console.log(data);
      
        const hatUrl = 'http://localhost:8090/api/hats/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(hatUrl, fetchConfig);

    if (response.ok) {
        const newHat = await response.json();
        console.log(newHat);

        const cleared = {
            fabric : '',
            style: '',
            color: '',
            pictureUrl: "",
            location:""
            //locations was deleted and location was written so clear it
        };
        this.setState(cleared);
    }
}
    //sets default before page loads
    handleStyleChange(event) {
        const value = event.target.value;
        this.setState({style: value})
    }
    
    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value})
      }

    handleFabricChange(event) {
        const value = event.target.value;
        this.setState({fabric: value})
      }

    handlePictureUrlChange(event) {
        const value = event.target.value;
        this.setState({pictureUrl: value})
    }
    handleLocationChange(event) {
        const value = event.target.value;
        this.setState({location: value})
      }

    async componentDidMount() {
      const url = 'http://localhost:8100/api/locations/';
  
      const response = await fetch(url);
  
      if (response.ok) {
        const data = await response.json();
        this.setState({locations: data.locations})
      }
    }

    render() {
      return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a new hat!</h1>
              <form onSubmit={this.handleSubmit} id="create-hat-form">
                <div className="form-floating mb-3">
                  <input onChange={this.handleStyleChange} value = {this.state.style} placeholder="style" required type="text" name="style" id="style" className="form-control"/>
                  <label htmlFor="style">Style</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={this.handleColorChange} value = {this.state.color} placeholder="color" required type="text" name="color" id="color" className="form-control"/>
                  <label htmlFor="color">Color</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={this.handleFabricChange} value = {this.state.fabric} placeholder="fabric" required type="text" name="fabric" id="fabric" className="form-control"/>
                  <label htmlFor="fabric">Fabric</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={this.handlePictureUrlChange} value = {this.state.pictureUrl} placeholder="picture url" required type="url" name="picture_url" id="picture_url" className="form-control"/>
                  <label htmlFor="picture_url">Picture URL</label>
                </div>
                <div className="mb-3">
                <select required name="location" id="location" onChange={this.handleLocationChange} value = {this.state.location} className="form-select">
                <option value="">Choose a location</option>
                {this.state.locations.map(location => {
                    return (
                    <option key={location.href} value={location.href}>
                        {location.closet_name}
                    </option>
                    );
                })}
                </select>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
export default HatForm;