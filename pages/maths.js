import Link from "next/link";

const Maths = () => {



return(
 <div className="wrapper grid">
    {/* Create a card for each option */}
   
           
      <div className="subjectLinks mathsLinks">      
      <h1>Maths Training</h1>
      <Link href="/mixed" legacyBehavior><div className="subjectCard">Mixed Practice</div></Link>
      <Link href="/algebra" legacyBehavior><div className="subjectCard">Algebra</div></Link>
      <Link href="/fractions" legacyBehavior><div className="subjectCard">Fractions</div></Link>
          </div>
         
         </div>
          


)
}

export default Maths