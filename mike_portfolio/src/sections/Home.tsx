import { Button } from "../components/Button"
import cv from "../assets/certificates/Resume.pdf"
import { handleDownload, smoothScroll } from "../utils/functions"

export const Home = () => {
  return (
    <div style={{ height: 'calc(100vh - 2.5rem - 4px)' }} className="w-full border-2 border-b-pink-800 border-dashed">
        <div>
            <div>
                <p>Hi,</p>
                <h1>Michael Ekanem</h1>
                <h2>Certified Software Developer</h2>
                <p>a forward thinking developer with over 5 years of experience who builds clean, fast, and modern web apps. From UI to backend, I make sure everything looks great and works even better.</p>
            </div>
            <div>
                <Button className="px-4 py-3" onClick={()=>handleDownload(cv)}>Download Resume</Button>
                <Button className="px-6 py-3" variant="secondary" onClick={()=>{smoothScroll("footer")}}>Contact Me</Button>
            </div>
            <div>
                
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
