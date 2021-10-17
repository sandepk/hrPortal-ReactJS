import React from "react";
// import SelectBox from "devextreme-react/select-box";
import { TagBox } from "devextreme-react";
class App extends React.Component {
  constructor(props) {
    super(props);
   
    
    this.state = {
      value: ""
    };
    this.onValueChanged = this.onValueChanged.bind(this);
  }
  onValueChanged(e) {
      this.props.setValue(e.value);
      
    this.setState({
      value: e.value
    });
  }
  render() {
    return (
      <div>
        <div className="dx-fieldset">
          <div className="dx-field">
            <div className="dx-field-label">{this.props.label}</div>
            <div className="dx-field-value">
              <TagBox 
              multiline
              items={this.props.data}
              displayExpr={this.props.displayExpr}
              valueExpr={this.props.valueExpr}
              onValueChanged={this.onValueChanged}
              showClearButton={this.props.showClearButton}
              placeholder="Select  Department..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
