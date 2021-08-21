import react from "react";

function withHoverOver(Component){
    class WithHover extends React.Component{
      constructor(){
        this.state={
          hovering:false 
        }
      }
      mouseOver = ()=>{
        this.setState({hovering:true});
      }
      mouseOut = ()=>{
        this.setState({hovering:false});
      }
      render(){
        return(
          <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
            <Component hovering={this.state.hovering}/>
          </div>
        )
      }
    }
  }

  export default withHoverOver;