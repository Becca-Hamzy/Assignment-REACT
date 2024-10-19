import "../../Component/Appli/Appli.css"
import "../../Component/Coy/Coy.css"
import Hero from "../../Component/Hero/Hero.jsx"
import Button from "../../Component/Buttons/Buttons.jsx"
import Badge from "../../Component/Badge.jsx"
import Appli from "../../Component/Appli/Appli.jsx"
import Apple from "../../assets/svg/apple.svg"
import Android from "../../assets/svg/android.svg"
import Figma from "../../assets/svg/Figma.svg"
 import Chrome from "../../assets/svg/chrome.svg"
 import Adobe from "../../assets/svg/adobe.svg"

 import Designers from "../../Component/designers.jsx"

 import Coy from "../../Component/Coy/Coy.jsx"
 import Disney from "../../assets/svg/disney.svg"       
 import Dream from "../../assets/svg/dream.svg"
 import Warner from "../../assets/svg/warnerbros.jpeg"
 import Netflix from "../../assets/svg/netflix.svg"
 import Airbnb from "../../assets/svg/airbnb.svg"
 import Dropbox from "../../assets/svg/dropbox.svg"
 import Hasbro from "../../assets/svg/hasbro.png"
 import Soft from "../../assets/svg/ubisoft.svg"
 import EA from "../../assets/svg/EA.png"
 import Windows from "../../assets/svg/windows.svg"






function Home() {
    return(
       <>
       <Hero/>
       <Button className="btn1" text= "Start the generator!"/>
       <Button className="btn2" text= "Explore trending palettes"/>
       <Badge/>
       <div className="applic">
           <Appli className= "Appli1" img = {Apple} alt=""  title= "iOS App" text = "Create, browse, and save palettes on the go."/>
           <Appli className= "Appli2" img = {Android} alt="" title = "Android App" text = "Thousands of palettes in your pocket." />
           <Appli className= "Appli3" img = {Figma} alt="" title = "Figma Plugin" text = "All palettes right in your workspace."/> 
           <Appli className= "Appli4" img = {Chrome} alt="" title= "Chrome Extention" text = "Get and edit a palette every new tab."/>
           <Appli className= "Appli5" img = {Adobe} alt="" title = "Adobe Extention" text = "Use coolors with your favourite tool." /> 
       </div>
       <Designers/>
       <div className="coy">
          <Coy className = "disney" img = {Disney} alt =""/>
          <Coy className = "dream" img = {Dream} alt = ""/>
          <Coy className = "warner" img = {Warner} alt = ""/>
          <Coy className = "netflix" img = {Netflix} alt = ""/>
          <Coy className = "airbnb" img = {Airbnb} alt = ""/>
          <Coy className = "dropbox" img = {Dropbox} alt = ""/>
          <Coy className = "hasbro" img = {Hasbro} alt = ""/>
          <Coy className = "soft" img = {Soft} alt = ""/>
          <Coy className = "EA" img = {EA} alt = ""/>
          <Coy className = "apple" img = {Apple} alt = ""/> 
          <Coy className = "windows" img = {Windows} alt = ""/>


       
          </div>
       </>

    )
}
export default Home