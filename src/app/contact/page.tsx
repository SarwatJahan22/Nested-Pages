import styles from "./contact.module.css";
import Link from "next/link";




const Contact = () => {
  return (
    <div className={styles.container} >
<h1 className={styles.header}>Contact</h1>


<ul>
            <li><Link href="/">Go to Home Page</Link></li>
    <li><Link href="/contact">Go to About Page</Link></li>
    <li><Link href="/service">Go to Service Page</Link></li>


   </ul>

    </div>
  )
}

export default Contact
