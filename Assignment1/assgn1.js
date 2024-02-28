let style={
    pdding:"80px",
    width:"700px",
    height:"100%",
    
    margin:"30px auto"
}
function Content(){
    let content=<div className="main_div" style={style}>
    <h2 style={{fontSize:"35px"}}>Topics Covered</h2>
    <p >The following is a list of all the topics we cover in the MDN learning area.</p>
    <a href="#">Getting started with theweb</a>
    <p className="para">Provides a practical introduction to web development for complete beginners.</p>
    <a href="#">HTML -- Structuring the web</a>
    <p className="para">HTML is the language that we use to structure the different parts of our content
and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
<a href="#">CSS -- Styling the web</a>
<p className="para">CSS is the language that we use to control our web content's style and layout, as
well as adding behavior like animation. This topic provides comprehensive
coverage of CSS.</p>
    </div>

    ReactDOM.render(content,document.getElementById("root"))

}
Content()

