import React, {Component, useState} from "react";
import '../styles/App.css';



let arr = ["Siblings", "Friends","Love","Affection","Marriage","Enemy","Please Enter valid input"]

const App  = ()=> {
   
    const [name1 , Setname1] = useState("");
    const [name2 , Setname2] = useState("");
    const [flag , Setflag]   = useState(false);
    const [answer , SetAnswer] = useState("");



    function CalculateRelation(e){
           e.preventDefault();
           if(name1.trim()=="" || name2.trim()==""){
            SetAnswer(arr[6]);
            return
           }  // Handel the Emty input
            

           let str1 = name1;
           let str2 = name2;

           for(let i = 0; i<name1.length; i++){
                 
            if(name2.includes(name1[i])){

                str1 = name1.replace(name1[i],"");
                str2 = name2.replace(name1[i],"")

            }
           }

           Setname1(str1);
           Setname2(str2);
        //    Setflag(true);
           SetAnswer(arr[(name1.length+name2.length)%6]);


    }

        return(
            <div id="main">

          <form>
            <input value={name1} placeholder="Enter first name" onChange={(e)=>{Setname1(e.target.value)}}  data-testid="input1"/>
            <input value={name2} placeholder="Enter second name" onChange={(e)=>{Setname2(e.target.value)}}  data-testid="input2"/>
            <button type="submit" onClick={CalculateRelation} data-testid="calculate_relationship">Calculate Relationship Future</button>
            <button onClick={(e)=>{e.preventDefault();Setname1("");Setname2("");SetAnswer("")}} data-testid="clear" >Clear</button>
          </form>


          <h3 value={answer} data-testid="answer">{answer}</h3>
            </div>
        )
    
}


export default App;
