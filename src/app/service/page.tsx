import styles from "./service.module.css";
import Link from "next/link";


const Service = () => {
  return (
    <div>
      <h1>Service</h1>
      <ul>
        <li><Link href="/service/graphic-design">This is Graphic Designing Page</Link></li>
        <li><Link href="/service/video-editing"> This is Video Editing Page</Link></li>
      </ul>
    </div>
  )
}

export default Service
