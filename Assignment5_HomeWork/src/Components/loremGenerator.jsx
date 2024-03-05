import React, { useState } from "react";
import "./loremgen.css";
import LoremCard from "./loremCard";

function LoremGenerator() {
    const[paraCount,setparaCount]=useState(0)
    const[textdata,settextdata]=useState([])
    const loremData=[
        
            "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie."
        ,
        
            "Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut."
        ,
        
           "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
        ,
        
           "Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds."
        ,
        
           "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat."
        ,
        
           "Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie."
        ,
        
           "Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi."
        ,
        
           "Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape."
        ,
        
           "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sit amet mauris commodo quis imperdiet massa. Cursus sit amet dictum sit amet justo donec enim diam. Est ante in nibh mauris cursus. Amet justo donec enim diam vulputate ut pharetra sit. Non consectetur a erat nam at lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Justo laoreet sit amet cursus. Et sollicitudin ac orci phasellus egestas. Ultrices vitae auctor eu augue. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Etiam sit amet nisl purus in mollis nunc sed id. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Faucibus vitae aliquet nec ullamcorper. Id donec ultrices tincidunt arcu non. Orci nulla pellentesque dignissim enim. Quis blandit turpis cursus in hac habitasse platea. Amet purus gravida quis blandit turpis cursus in hac."
        ,
        
           "Ac tortor dignissim convallis aenean et tortor at. Ut sem nulla pharetra diam. In mollis nunc sed id semper risus in hendrerit. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Sed enim ut sem viverra aliquet. Semper risus in hendrerit gravida rutrum quisque non tellus. Ultricies lacus sed turpis tincidunt id. Pulvinar elementum integer enim neque volutpat. Neque egestas congue quisque egestas diam in arcu. Est velit egestas dui id ornare. Habitasse platea dictumst vestibulum rhoncus. Enim sit amet venenatis urna cursus eget. Sed nisi lacus sed viverra tellus in. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Enim blandit volutpat maecenas volutpat blandit aliquam. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus."
        ,
        
           "Tortor condimentum lacinia quis vel. Nulla facilisi morbi tempus iaculis. Pulvinar elementum integer enim neque volutpat ac tincidunt. Justo laoreet sit amet cursus sit. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Dignissim enim sit amet venenatis. Sed risus pretium quam vulputate dignissim suspendisse in est. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Urna porttitor rhoncus dolor purus. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Erat velit scelerisque in dictum non consectetur a erat. Ornare massa eget egestas purus viverra. Enim nunc faucibus a pellentesque sit amet. Viverra adipiscing at in tellus integer feugiat. Aenean euismod elementum nisi quis eleifend quam. Ultrices vitae auctor eu augue ut lectus arcu. Risus nec feugiat in fermentum posuere urna nec. Non tellus orci ac auctor augue mauris augue neque. Nisl condimentum id venenatis a condimentum vitae sapien."
        ,
        
           "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sit amet mauris commodo quis imperdiet massa. Cursus sit amet dictum sit amet justo donec enim diam. Est ante in nibh mauris cursus. Amet justo donec enim diam vulputate ut pharetra sit. Non consectetur a erat nam at lectus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Justo laoreet sit amet cursus. Et sollicitudin ac orci phasellus egestas. Ultrices vitae auctor eu augue. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Etiam sit amet nisl purus in mollis nunc sed id. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Faucibus vitae aliquet nec ullamcorper. Id donec ultrices tincidunt arcu non"
        
        ]

        loremData.length=paraCount;

        const generateLorem=()=>{
            let count=document.getElementById("paraCount").value;
            console.log(count);
            setparaCount(count)
            let value=count
            if(count<0){
                value=0
            }
            if(count>11){
                value=11
                alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
            }
            let res=loremData.slice(0,value)
            settextdata(res)
           
            
            

        }
        console.log(paraCount);
  return (
    <div className="main_container">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <div>
        <label htmlFor="">Paragraphs:</label>
        <input type="number" placeholder="Number of paragraph" id="paraCount" value={paraCount} onChange={(e)=>{
            setparaCount(e.target.value)
        }}/>
        <button onClick={generateLorem}>Generate</button>
      </div>
      <div className="data">
        {
        //    paraCount>11? alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")  :
           textdata.map((ele, index) => (
                
               <LoremCard name={ele} key={index} ind={index+1} />
             ))
        }
       
      </div>
    </div>
  );
}

export default LoremGenerator;
