import styles from './Navigation.module.css'
const Navigation = () => {
    return (
        <>
          <nav>
        <div class={`container ${styles.navWrapper}`}>
            <div class="brand">
                <span><strong>bre.ad/jane</strong></span>
            </div>
            <div class={`${styles.hamburger}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class={`${styles.navList}`}>
                <li class={`${styles.active}`}>
                    <a href="/">Offerings</a>
                </li>
                <li>
                    <a href="/">Other Links</a>
                </li>
               
                
                <li><a href="/">Testimonials</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact me</a></li>
                
                <li>
                    <button class={styles.btn}>Book Trial</button>

                </li>

            </ul>

        </div>
    </nav>
      
            
       
   
            
        </>
    )
}

export default Navigation
