import React from "react";
import "./mainSection.css";
import Card from "./card";
function MainSection() {
  return (
    <>
      <div className="main_section">
        <div className="textArea">
          <h1>
            Let us find your<br></br>
            <span style={{ color: "brown" }}>Forever Food.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="buttons">
            <button style={{ backgroundColor: "brown", color: "white" }}>
              Search Now
            </button>
            <button style={{ color: "brown" }}>Know More</button>
          </div>
        </div>
      </div>

      <div className="secondSection">
        <div className="left">
          <img
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
        <div className="right">
          <div>
            <h1>
              Lorem ipsum dolor sit amet<br></br>
              consectetur adipisicing elit. <br></br>
              Tempore, debitis.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              <br></br> molestiae! Quidem est esse numquam odio deleniti,
              beatae, magni<br></br> dolores provident quaerat totam eos,
              aperiam architecto eius quis <br></br>quibusdam fugiat dicta.
            </p>
            <button className="touchButton" style={{backgroundColor:"#4f46e1"}}>Get In Touch</button>
          </div>
        </div>
      </div>

      <div className="thirdSection" style={{display:"flex", gap:"30px",margin:"20px 8%"}}>

    <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"20px"}}>
    <Card para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis." img="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" name="Gladis Lenon" position="Head Of SEo"/> 
    <Card para=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." img="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" name="Gladis Lenon" position="Head Of SEo"/>
    </div>
    <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"20px"}}>
    <Card para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores." img="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" name="Gladis Lenon" position="Head Of SEo"/>  
    <Card para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" img="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" name="Gladis Lenon" position="Head Of SEo"/>  

    </div>
    <div style={{display:"flex",flexDirection:"column",gap:"20px",flexWrap:"wrap"}}>
    <Card para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt." img="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" name="Gladis Lenon" position="Head Of SEo"/>        
    <Card para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima." img="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" name="Gladis Lenon" position="Head Of SEo"/>       
    </div>
      </div>
    </>
  );
}

export default MainSection;
