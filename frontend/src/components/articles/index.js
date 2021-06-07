import React from "react";
import "./articles.css"
const Articles = () => {
  return (
    <>
      <div className="articles">
        <div className="article1">
          <h3>What is the vaccine?</h3>
          <div className="article_1">
          <p>
            A vaccine prepares the body to fight a specific infection, virus, or
            disease. Vaccines contain inactive or weakened parts of the organism
            that cause disease, or the "genetic code" that would create the same
            immune system response. This prompts the body's immune system to
            recognize the intruder if it comes, and produce antibodies to learn
            how to fight it. Vaccines are not likely to make you very sick, but
            a small percentage of those who receive the vaccine can suffer from
            side effects such as inflammation of the arms or high fever for some
            time. After that, you develop immunity to that disease.
          </p>
         
            <img src="/picture_vaccine.jpg"></img>
            </div>
          
        </div>
        <div className="article2">
        <h3>The Oxford/AstraZeneca</h3>
        <div className="article_2">
        <div>
            <img  src="/vaccine.png" ></img>
          </div>  
          
          <p>
            The recommended dosage is two doses given intramuscularly (0.5ml
            each) with an interval of 8 to 12 weeks. Additional research is
            needed to understand longer-term potential protection after a single
            dose.
          </p>
          </div>
          
        </div>

        
        <div className="article3">
            <h3>Symptoms after corona vaccine</h3>
            <div className="article_3">
            <p>Pain at the injection site, fatigue, or pain throughout the body accompanied by a headache.Infection after vaccination with fever, chills, nausea and vomiting.</p>
            <img src="/Symptoms.png" className="Symptoms"></img>
            </div>
        </div>
        <div className="article4">
        <h3>Tips to reduce the side effects of the corona vaccine</h3>
        <div className="article_4">
    
        <img src="/Symptoms.png" className="Symptoms"></img>
            
            <p>Use an ice pack or cool damp cloth to help reduce redness or pain and swelling at the injection site.Take a cool shower, which can also be soothing.Drink fluids frequently for a day or two after receiving the vaccine.Take an over-the-counter pain reliever, unless you have any specific contraindications</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
