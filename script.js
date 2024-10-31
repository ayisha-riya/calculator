const displayContent=(data)=>
    {
       output.value+=data
    }
    const clearAllContent=(data)=>
    {
        output.value=" "
    }
    const deleteContent=()=>
    {
        output.value=output.value.slice(0,-1)
    }
    const showResult=()=>
    {try{
        
        output.value=eval(output.value)
    }
    catch(err){
         console.log(err);
         output.value=""
         output.placeholder="invalid Expression"
         
    }
    finally{
        console.log("finally block");
        console.log("task completed");
        
        
    }
    }