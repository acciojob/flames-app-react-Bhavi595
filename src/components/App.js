import React, {Component, useState} from "react";
import '../styles/App.css';



let arr = ["Siblings", "Friends","Love","Affection","Marriage","Enemy"]

const App  = ()=> {
   
    const [name1 , Setname1] = useState("");
    const [name2 , Setname2] = useState("");
    const [flag , Setflag]   = useState(false);
    const [answer , SetAnswer] = useState("");
    //  console.log(name1 , name2);


    function CalculateRelation(e){
           e.preventDefault();
           if(name1.trim()==="" || name2.trim()===""){
            SetAnswer("Please Enter valid names");
            return
           }  // Handel the Emty input
            

           let str1 = name1;
           let str2 = name2;

           for(let t of str1){ // Soumya // ansh
            if(str2.includes(t)){
              str1 =  str1.replace(t,"");
              str2 = str2.replace(t,"");
            }
       }

           Setname1(str1);
           Setname2(str2);
           Setflag(true);
           SetAnswer(arr[(str1.length + str2.length)%6]);
           console.log(str1 , str2);
           console.log(name1 , name2);

    }

        return(
            <div id="main">

          <form>
            <input value={name1} placeholder="Enter first name" onChange={(e)=>{Setname1(e.target.value)}} name="name1"  data-testid="input1"/>
            <input value={name2} placeholder="Enter second name" onChange={(e)=>{Setname2(e.target.value)}} name="name2"  data-testid="input2"/>
            <button type="submit" onClick={CalculateRelation} data-testid="calculate_relationship">Calculate Relationship Future</button>
            <button onClick={(e)=>{e.preventDefault();Setname1("");Setname2("");SetAnswer("");Setflag(false);}} data-testid="clear" >Clear</button>
          </form>

            
          <h3 value={answer} data-testid="answer">{answer}</h3>
            </div>
        )
    
}


export default App;
