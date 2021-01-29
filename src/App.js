import React,{Component} from "react"
class App extends Component{
  constructor(){
    super()
    this.state={
      fName:"",
      lName:"",
      age:"",
      gender:"",
      location:"",
      vegetarian:false,
      kosher:false,
      lactoseFree:false
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  
  handleSubmit(){
    
  }
  handleChange(event){
    const {name,value,type,checked} = event.target
    type==="checkbox" ? this.setState({[name]:checked}) : this.setState({[name]:value})
  }
  render(){
    return(
      <div>
          <form onSubmit={this.handleSubmit}>
            <h2>Personal Information:</h2>
            <input 
              placeholder="First Name"
              type="text" 
              name="fName" 
              value={this.state.fName} 
              onChange={this.handleChange} 
              
            />
            <br /><br />
            <input 
              placeholder="Last Name"
              type="text" 
              name="lName" 
              value={this.state.lName} 
              onChange={this.handleChange} 
              
            />
            <br />
            <br />
            <input 
              placeholder="Age"
              type="text" 
              name="age" 
              value={this.state.age} 
              onChange={this.handleChange} 
              
            />
            <br />
            <br />
            <label>Gender:</label>
            <br /><br />
            <input 
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender==="Male"}
              onChange={this.handleChange}
            />Male<br />
            <input 
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender==="Female"}
              onChange={this.handleChange}
            />Female<br /><br />
            <h2>Your travel Location:</h2>
            <select value={this.state.location} name="location" onChange={this.handleChange}>
            <option value="">-- Select Destination --</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="California">California</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Austin">Austin</option>
              <option value="New York">New York</option>
              <option value="Detroit">Detroit</option>
              <option value="Michigan">Michigan</option>
            </select>
            <h2>Food Preference:</h2>
            <label>
              <input 
                type="checkbox" 
                name="vegetarian" 
                checked={this.state.vegetarian} 
                onChange={this.handleChange}
                /> Vegetarian
                <br />
                <input 
                type="checkbox" 
                name="kosher" 
                checked={this.state.kosher} 
                onChange={this.handleChange}
                /> Kosher
                <br />
                <input 
                type="checkbox" 
                name="lactoseFree" 
                checked={this.state.lactoseFree} 
                onChange={this.handleChange}
                /> Lactose Free
                <br />
            </label>
            <br />
            <br />
            <br />
            <button>Submit</button>
        </form>
        <br />
        <hr />
        <h2>Entered Information:</h2>
        <p>Name: {this.state.fName} {this.state.lName}</p>
        <p>Age: {this.state.age}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Travel Location: {this.state.location}</p>
        <h4>Dietary Restriction:</h4>
        <p>Vegan : {this.state.vegetarian ? "Yes" : "No"}</p>
        <p>Kosher: {this.state.kosher ? "Yes" : "No"}</p>
        <p>Lactose Free : {this.state.lactoseFree ? "Yes" : "No"}</p>
      </div>
    )
  }
}

export default App;
