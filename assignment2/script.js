let style={
    margin:"80px auto",
    width:"800px"
}
function content(){
    let content=
    <div className="main_div" style={style}>
        <hr></hr>
<h2>Learn Web Development</h2>
<p>Welcome to the MDN learning area. This set of articles aims to guide complete
beginners to web development with all that they need to start coding websites.</p>
<p>The aim of this area of MDN is not to take you from "beginner" to “expert” but to
take you from "beginner" to “comfortable.” From there, you should be able to start
making your way, learning from <a href="#">the rest of MDN</a>, and other intermediate to
advanced resources that assume a lot of previous knowledge.</p>
<p>If you are a complete beginner, web development can be challenging — we will hold
your hand and provide enough detail for you to feel comfortable and learn the topics
properly. You should feel at home whether you are a student learning web
development (on your own or as part of a class), a teacher looking for class
materials, a hobbyist, or someone who just wants to understand more about how
web technologies work.</p>
    </div>

    ReactDOM.render(content,document.getElementById("root"))
}
content()