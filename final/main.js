var React=require("react");
var {render}=require("react-dom");
 var ChildComponent2=require("./Components/ChildComponent2.js");
var LeftSide=require("./Components/leftside.js");
var RightSide=require("./Components/rightside.js");

var MainComponent=React.createClass({
  render:function(){
    return(
    <div>
    <ChildComponent2/>
    <div>
    <div className="container-fluid">
	<div className="row">
		<div className="col-md-2">
      <LeftSide/>
		</div>
		<div className="col-md-10" >
    <RightSide/>
		</div>
	</div>
</div>


    </div>
    </div>


  );
  }

  });

render(<MainComponent/>,document.getElementById('app'));
//render(<MainComponent/>,document.getElementById('app1'));
