import React, { useContext } from "react";
import { TaskContextApi } from "./TaskProvider";

const DispalyNotes = () => {
  let { Selective, handleCategory , task ,handleDelete,handleUpdate} = useContext(TaskContextApi);
  console.log(Selective);

  let { selectedCategory } = Selective;  

  return (
    <section className="displaySection">
      <div className="selectedNotes">
        <div
          className="selectDisplayBlock"
          name="selectedCategory"
          value={selectedCategory}
          onChange={handleCategory}
          
        >
          <label htmlFor="category">Select The Category</label>
          <br />
          <input type="radio" name="selectedCategory" value="all" />{" "}
          <span>All</span>
          <input type="radio" name="selectedCategory" value="general" />{" "}
          <span>General</span>
          <input type="radio" name="selectedCategory" value="technical" />{" "}
          <span>Technical</span>
          <input type="radio" name="selectedCategory" value="Official" />{" "}
          <span>Official</span>

        </div>
      </div>


       <main className="displayBlock">

        <div className='displayContent'> 
         {task.length == 0? "Loading.........." : task.length>0 &&  task.map((value) => {
              return selectedCategory =="all" ? (
                <div className="output">
                  <h1>Title: {value.title}</h1>
                  <p>Description:{value.description} </p>
                  <p>Category:{value.category}</p>

                  <div className="btnCont">
                  <button className="btn" onClick={()=>handleUpdate(value.id)}>Update</button> 

                  <button className="btn" onClick={()=> handleDelete(value.id)} > Delete</button>

                  </div>

                </div>

              ) :(
                selectedCategory== value.category && (
                  <div className="output"   >
                  <h1>Title: {value.title}</h1>
                  <p>Description:{value.description} </p>
                  <p>Category:{value.category}</p>

                  <button className="btn" onClick={()=>handleUpdate(value.id)}>Update</button> 

                  <button className="btn" onClick={()=> handleDelete(value.id)} > Delete</button>

                </div>
                )
              )
          })}
        </div>

       </main>




    </section>
  );
};

export default DispalyNotes;
